const express = require('express')
const router = express.Router()
const { createProduct, getAllProducts, getProductById, updateProductById,
    deleteProductById } = require('../controllers/productsController')



//routes
router.route('/')
    .post(createProduct)
    .get(getAllProducts)

// id routes
router.route('/:id')
    .get(getProductById)
    .patch(updateProductById)
    .delete(deleteProductById)

module.exports = router;