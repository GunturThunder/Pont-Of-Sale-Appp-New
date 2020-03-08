const express = require('express')
const Route = express.Router()

const {register, login } = require('../controllers/cashier')
const {authentication, authorization} = require('../helper/auth')

Route
    // .get('/',authentication, authorization, getAll)
    .post('/register', register)
    .post('/login', login)

module.exports = Route
