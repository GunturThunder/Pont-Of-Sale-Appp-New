const express = require('express')
const Route = express.Router()
const { buy,getHistory } = require('../controllers/order')

Route
    .post('/', buy)
    .get('/', getHistory)

module.exports = Route