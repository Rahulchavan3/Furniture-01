
const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
            title: String, 
            url: String,
            category: String,
            image: String,
            description:String,
            brand: String,
            rating: Number,
            reviews: Number,
            price: Number,
            stock:Number,
            // inCart:Number,
})

const Product = mongoose.model('Product', productSchema)

exports.Product = Product