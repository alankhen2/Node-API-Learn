const Product = require('../models/productModel')

const getProducts = async(req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const getProductById = async(req, res) => {
    try {
        const {id} = req.params
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const deleteProduct = async(req, res) => {
    try {
        const {id} = req.params
        const product = await Product.findByIdAndRemove(id);
        if (!product) {
            return res.status(404).json({message: `Cannot find any product with ID ${id}`})
        }
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const updateProduct = async(req, res) => {
    try {
        const {id} = req.params
        const product = await Product.findByIdAndUpdate(id, req.body)
        if (!product) {
            return res.status(404).json({message: `Cannot find any product with ID ${id}`})
        }

        const Updatedproduct = await Product.findById(id)
        res.status(200).json(Updatedproduct)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const addProduct = async(req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    getProducts,
    getProductById,
    deleteProduct,
    updateProduct,
    addProduct
}