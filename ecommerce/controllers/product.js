const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs')
const path = require('path')
const Product = require('../models/product');
const { errorHandler } = require('../helpers/dbErrorHandler');

exports.create = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: 'Image could not be uploaded'
            });
        }
        // Validation for all fields
        const { name, description, price, category, quantity, shipping } = fields;

        if (!name ||
            !description ||
            !price ||
            !category ||
            !quantity ||
            !shipping) {
            return res.status(400).json({
                error: "All fields are required."
            })
        }

        const product = new Product(fields);

        if (files.image) {
            //console.log("FILES IMAGE", files.image);
            if (files.image.size > 1000000) {
                return res.status(400).json({
                    error: "Image should be less than 1mb!!"
                })
            }
            product.image.data = fs.readFileSync(files.image.path);
            product.image.contentType = files.image.type;
            // fs.readFileSync(files.photo.path, (err, data) => {
            //     if (err) return res.status(400).send("Problem in the file data");
            //     product.image.data = data;
            //     product.image.contentType = files.image.type;
            // })
        };
        product.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            res.json(result);
        });

    });
};

