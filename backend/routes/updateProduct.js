
const { Product } = require('../models/products')
const express = require('express')
const router = express.Router();
router.use(express.json())

router.post('/fetch', async (req, res) => {
    const product = await Product.findById(req.body._id)
    // console.log(req.body)
    // console.log(req.body.id)
    // res.send(req.body.id)
    if (product) return res.send(product)
    return res.send('not found')
})

router.post('/update', async (req, res) => {
    const product = await Product.findById(req.body._id)

    console.log('inside update')
    // console.log(req.body)
    // console.log(req.body.id)
    // res.send(req.body.id)

    if (!product) return
    product.title = req.body.title
    product.category = req.body.category
    product.description = req.body.description
    product.price = req.body.price
    product.stock = req.body.stock
    // console.log(req.body.price)

    await product.save()
    // alert('product updated successfully')
    res.send("updated")

})

module.exports = router