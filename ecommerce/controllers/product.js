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
        const product = new Product(fields);

        if (files.image) {
            console.log(files.image.type);
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
// I have some confusion about this part >> file uploading