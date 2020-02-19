const express = require('express')
const Route = express.Router()
const multer = require('multer')

const {getAll, insertCheckout, updateCheckout, getCheckoutDetail, deleteCheckout, getLimitPageCheckout} = require('../controllers/checkout')

Route
.get('/searchSort', getAll)
.post('/uploadData', insertCheckout)
.patch('/update/:id_checkout', updateCheckout)
.get('/detail/:id_checkout', getCheckoutDetail)
.delete('/delete/:id_checkout', deleteCheckout)
.get('/limitPage', getLimitPageCheckout)

module.exports = Route