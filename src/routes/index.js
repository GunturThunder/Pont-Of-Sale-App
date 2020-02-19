const express = require('express')
const Route = express.Router()
const itemRouter = require('./item')
const categoryRouter = require('./category')
const workerRouter = require('./worker')
const checkoutRouter = require('./checkout')

Route
    .use('/uploads', express.static('./src/uploads'))
    .use('/item', itemRouter)
    .use('/category', categoryRouter)
    .use('/worker', workerRouter)
    .use('/checkout', checkoutRouter)
    

module.exports = Route