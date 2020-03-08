const express = require('express')
const Route = express.Router()
const productRouter = require('./product')
const categoryRouter = require('./category')
const userRouter = require('./user')
const orderRouter = require('./order')
const cashierRouter = require('./cashier')

Route
    .use('/upload', express.static('./upload'))
    .use('/product', productRouter)
    .use('/category', categoryRouter)
    .use('/user', userRouter)
    .use('/order', orderRouter)
    .use('/cashier', cashierRouter)

    

module.exports = Route