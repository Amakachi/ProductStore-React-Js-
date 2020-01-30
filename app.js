const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID } = require('mongodb');
const _ = require('lodash');
const fs = require('fs');

const { mongoose } = require('./db/mongoose');
const { Product } = require('./entities/product-detail');
const { upload } = require('./config/imageConfig');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/uploads',express.static('uploads'))

app.get('/api/product',(req,res)=>{
    Product.find()
            .select("_id name price")
            .exec()
            .then((data)=>{
                res.json({data});
            }).catch((err)=>{
                res.status(400).json({error: err});
            });
    })

app.post('/api/product',upload.single('productImage'),(req,res)=>{
    let product = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        productImage: req.file.path,
        color: req.body.color
    });
    
    product.save().then((data)=>{
        res.json(data)
    }).catch((err)=>{
        res.status(400).json({error: err});
    })
});

app.get('/api/product/:id',(req,res)=>{
    let id = req.params.id;
    if (!ObjectID.isValid(id)) return res.status(404).json({msg: "Invalid id"});
    Product.findById(id).then((data)=>{
        let product =_.pick(data,["_id","name","description","price","category","image","color"]);
        res.json(product);
    }).catch((err)=>{
        res.status(400).json({error: err});
    })
});


app.listen(port,()=>{
    console.log(`server listening on port ${port}`);
})
