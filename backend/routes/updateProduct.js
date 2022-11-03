
const { Product } = require('../models/products')
const express = require('express')
const router = express.Router();
router.use(express.json())

router.post('/fetch', async (req, res) => {
    const product = await Product.findById(req.body._id)
    if (product) return res.send(product)
    return res.send('not found')
})

router.post('/update', async (req, res) => {
    const product = await Product.findById(req.body._id)

    if (!product) return
    product.title = req.body.title
    product.image = req.body.image
    product.category = req.body.category
    product.description = req.body.description
    product.price = req.body.price
    product.stock = req.body.stock

    await product.save()
    res.send("updated")

})

router.post('/add', async (req, res) => {
    const product = new Product({
        title : req.body.title,
        image : req.body.image,
        category : req.body.category,
        description : req.body.description,
        price : req.body.price,
        stock : req.body.stock
    })

    await product.save()
    console.log('add reached')
    res.send("added")

})

module.exports = router