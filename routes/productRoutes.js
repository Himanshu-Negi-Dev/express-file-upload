const express = require('express');
const { getAllProducts, createProduct, uploadImage } = require('../controller/productController');
const router = express.Router();

router.get('/', getAllProducts);

router.post('/', createProduct);

router.post('/uploads', uploadImage)

module.exports = router;