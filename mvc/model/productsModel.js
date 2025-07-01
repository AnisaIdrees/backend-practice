const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    tilte: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    isAvailable: {
        type: Boolean,
        require: true
    },
    description: {
        type: String,
        require: true
    },
})

// model 
const productModel = mongoose.model('productsss', productSchema);
module.exports = productModel;