const db = require('../models');

const Product = db.products;
const Review = db.reviews;

const addProduct = async(req , res) => {
    let info = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        available: req.body.available ? req.body.available : false,
    }
    const product = await Product.create(info);
    console.log(product);
    res.status(200).json(product);
}

const getAllProducts = async (req , res) => {
    const products = await Product.findAll({
        attributes: [
            'title',
            'price',
            'description'
        ]
    });
    res.status(200).json(products);
}

const getOneProduct = async (req , res) => {
    let id = req.params.id;
    const product = await Product.findOne({where: {id: id}});
    res.status(200).json(product);
}

const updateProduct = async (req , res) => {
    let id = req.params.id;
    let data = req.body;
    const product = await Product.update(data , {where: {id: id}});
    res.status(200).json(product);
}

const deleteProduct = async (req , res) => {
    let id = req.params.id;
    await Product.destroy({where: {id: id}});
    res.status(200).json({message: 'Product deleted successfully'});
}

const getAvailableProducts = async (req , res) => {
    let id = req.params.id;
    const products = await Product.findAll({where: {available: true}});
    res.status(200).json(products);
}

module.exports = {
    addProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct,
    getAvailableProducts
}