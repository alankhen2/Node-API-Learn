const express = require('express')
const route = express.Router();
const Product = require('../models/productModel');
const {getProducts, getProductById, deleteProduct, updateProduct, addProduct} = require('../controllers/productController')

route.get('/products', getProducts)

route.get('/product/:id', getProductById)

route.delete('/product/:id', deleteProduct)

route.put('/product/:id', updateProduct)

route.post('/product', addProduct)

module.exports = route;