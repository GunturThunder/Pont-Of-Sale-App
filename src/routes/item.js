const express = require('express')
const Route = express.Router()
const multer = require('multer')

const {getAll, insertItem, updateItem, getItemDetail, deleteItem, getLimitPageItem} = require('../controllers/item')
var storage = multer.diskStorage({
    destination: (request, file, cb)=>{
        cb(null, './src/uploads')
    },
    filename: (request, file, cb)=>{
        cb(null, file.originalname)
    }
})

const upload = multer({storage})

Route
.get('/searchSort', getAll)
.post('/uploadData', upload.single('image'), insertItem)
.patch('/update/:id_item', upload.single('image'), updateItem)
.get('/detail/:id_item', getItemDetail)
.delete('/delete/:id_item', deleteItem)
.get('/limitPage', getLimitPageItem)

module.exports = Route