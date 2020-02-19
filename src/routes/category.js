const express = require('express')
const Route = express.Router()
const multer = require('multer')

const {getAll, insertCategory, updateCategory, getCategoryDetail, deleteCategory, getLimitPageCategory} = require('../controllers/category')
// var storage = multer.diskStorage({
//     destination: (request, file, cb)=>{
//         cb(null, './src/uploads')
//     },
//     filename: (request, file, cb)=>{
//         cb(null, file.originalname)
//     }
// })

// const upload = multer({storage})

Route
.get('/searchSort', getAll)
.post('/uploadData', insertCategory)
.patch('/update/:id_category', updateCategory)
.get('/detail/:id_category', getCategoryDetail)
.delete('/delete/:id_category', deleteCategory)
.get('/limitPage', getLimitPageCategory)

module.exports = Route