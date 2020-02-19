const{port} = require('./src/configs/index')
const express = require('express')
const app = express()
const logger = require('morgan')
const bodyParser = require('body-parser')
const mainNavigation = require('./src/routes')
const cors = require('cors')
// const fileupload = require('express-fileupload')

app.listen(port, ()=> console.log('\nThis server is running'))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors('*'))

// app.use(fileupload())

app.use('/', mainNavigation)
