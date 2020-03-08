const {port} = require('./src/configs/index')
const express = require('express')
const app = express()
const logger = require('morgan')
const bodyParser = require('body-parser')
const mainNavigation = require('./src/routes')
const cors = require('cors')
app.use(cors('*'))
app.listen(port, ()=> console.log('\nThis sever is running'))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/', mainNavigation)
