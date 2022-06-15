const cloudinary = require('cloudinary').v2;
const { asyncWrapper } = require("../middleware/async")
const { CustomErrorAPI } = require('../error/CustomErrorAPI');
const { Product } = require('../models/Product');
const fs = require('fs');
const getAllProducts = asyncWrapper(async (req, res) => {
  const products = await Product.find({});
  res.status(200).json({ data: products });
});

const createProduct = asyncWrapper(async (req, res) => {
  const { name, price, image } = req.body;
  if (!name || !price) {
    throw new CustomErrorAPI('please enter valid input', 400);
  }

  const newProduct = { name, price, image };

  const product = await Product.create(newProduct);

  res.status(201).json({ data: product });

});


const uploadImage = asyncWrapper(async (req, res) => {
  // console.log(req.files);
  const filePath = req.files.image.tempFilePath;
  const result = await cloudinary.uploader.upload(filePath, {use_filename: true, folder: 'File-Upload'});
  fs.unlinkSync(req.files.image.tempFilePath);
  res.status(200).json({url: result.secure_url});
});

module.exports = { getAllProducts, createProduct, uploadImage }

