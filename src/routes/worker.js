const express = require('express')
const Route = express.Router()
const multer = require('multer')

const {getAll, insertWorker, updateWorker, getWorkerDetail, deleteWorker, getLimitPageWorker} = require('../controllers/worker')
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
.post('/uploadData', insertWorker)
.patch('/update/:id_worker', updateWorker)
.get('/detail/:id_worker', getWorkerDetail)
.delete('/delete/:id_worker', deleteWorker)
.get('/limitPage', getLimitPageWorker)

module.exports = Route