const express = require('express')
const Route = express.Router()
const { buy } = require('../controllers/order')

Route
    .post('/', buy)

module.exports = Route