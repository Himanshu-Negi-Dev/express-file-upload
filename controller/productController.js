const { asyncWrapper } = require("../middleware/async")

const getAllProducts = asyncWrapper((req, res) => {
  res.send('from getALl product controller')
});

const createProduct = asyncWrapper((req, res) => {
  res.send('from getALl create controller controller')
});


const uploadImage = asyncWrapper((req, res) => {
  res.send('from getALl upload image controller')
});

module.exports = { getAllProducts, createProduct, uploadImage }

