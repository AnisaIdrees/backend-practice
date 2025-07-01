const productModel = require('../model/productsModel');


// create product

const createProduct = async(req , res)=>{
    const data = await new productModel(req.body)
    await data.save();
    res.status(201).json({
        message:`product create succussfully `, data
    })
}

const getAllProducts=async(req , res)=>{
    const products = await productModel.find({})
    res.status(200).json({
        messsage:` get products succussfully `, products
    })
}

// id
const getProductById=async(req , res)=>{
    const product = await productModel.findById(req.params.id)
    res.status(200).json({
        messsage:` get product succussfully `, product
    })
}

const updateProductById=async(req , res)=>{
    const product = await productModel.findByIdAndUpdate(req.params.id ,req.body)
    res.status(200).json({
        messsage:` update product succussfully `, product
    })
}

const deleteProductById=async(req , res)=>{
    const product = await productModel.findByIdAndDelete(req.params.name)
    res.status(200).json({
        messsage:`Delete  product succussfully `, product
    })
}

module.exports= {
    createProduct,
    getAllProducts,
    getProductById,
    updateProductById,
    deleteProductById
}