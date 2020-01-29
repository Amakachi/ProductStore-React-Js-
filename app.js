const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose');
const { Product } = require('./entities/product-detail');

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/api/product',(req,res)=>{
    Product.find({}).then((data)=>{
        let products = []
        data.forEach((item) =>  {
            console.log(item)
            products.push({
                name: item.name,
                price: item.price
            })
        })
        res.send(products);
    }).catch((err)=>{
        res.status(400).send(err);
    });
})

app.post('/api/product',(req,res)=>{
    let product = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: req.body.image,
        color: req.body.color
    });
    product.save().then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.status(400).send(err);
    })
});

app.get('/api/product/:id',(req,res)=>{
    Product.findById(req.params.id).then((data)=>{
        res.send(data);
    }).catch((err)=>{
        res.status(400).send(err);
    })
});


app.listen(port,()=>{
    console.log(`server listening on port ${port}`);
})

