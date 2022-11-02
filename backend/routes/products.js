
const {Product} = require('../models/products')
const express = require('express')
const router = express.Router();
router.use(express.json())

router.post('/', async (req,res,next)=>{

    const product = new Product({
            title: req.body.title, 
            url: req.body.url,
            category: req.body.category,
            image: req.body.image,
            description: req.body.description,
            brand: req.body.brand,
            rating: req.body.rating,
            reviews: req.body.reviews,
            price: req.body.price,
            stock: req.body.stock,
    })

    const result = await product.save()
    res.send(result)
})

router.get('/', (req,res)=>{
    res.send('api/mongo/products')
})

//Chairs route
router.get('/chairs', async (req,res)=>{
    const chairs = await Product.find({category:'chair'})
    res.send(chairs)
})

module.exports = router