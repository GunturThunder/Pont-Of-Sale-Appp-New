const express = require('express')
const Route = express.Router()
const multer = require('multer')

const {getAll, insertProduct, updateProduct, deleteProduct} = require('../controllers/product')

const { uploadImage } = require('../controllers/upload')

// const { authentication, authorization} = require('../helper/auth')
Route
    .get('/',/*authentication, authorization, */getAll)
    .post('/', uploadImage, insertProduct)
    .patch('/:id_product',uploadImage, updateProduct)
    .delete('/:id_product', deleteProduct)

module.exports = Route