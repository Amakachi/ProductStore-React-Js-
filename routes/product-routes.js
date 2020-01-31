const express = require('express');
const {ObjectID } = require('mongodb');

const { upload } = require('../config/imageConfig');

function routes(Product) {
    const ProductRouter = express.Router();

    ProductRouter.route('/product')
        .get((req, res) => {
            Product.find()
                .select("_id name price")
                .exec()
                .then((data) => {
                    res.json({
                        data
                    });
                }).catch((err) => {
                    res.status(400).json({
                        error: err
                    });
                });
        })

        .post(upload.single('image'), (req, res) => {
            let product = new Product({
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                category: req.body.category,
                image: req.file.path,
                color: req.body.color
            });

            product.save().then((data) => {
                res.status(201).json(data)
            }).catch((err) => {
                res.status(400).json({
                    error: err
                });
            })
        });

    ProductRouter.route('/product/:id')
        .get((req, res) => {
            let id = req.params.id;
            if (!ObjectID.isValid(id)) return res.status(404).json({
                msg: "Invalid id"
            });
            Product.findById(id)
                .select("_id name description price category image color")
                .exec()
                .then((data) => {
                    res.json(data);
                }).catch((err) => {
                    res.status(400).json({
                        error: err
                    });
                });
        });

    return ProductRouter; 
}

module.exports = routes;