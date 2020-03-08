const express = require('express')
const Route = express.Router()
const multer = require('multer')

const {getAll, insertCategory, updateCategory, deleteCategory} = require('../controllers/category')

// const { uploadImage } = require('../controllers/upload')

Route
    .get('/', getAll)
    .post('/', insertCategory)
    .patch('/:id_category',updateCategory)
     .delete('/:id_category', deleteCategory)

module.exports = Route