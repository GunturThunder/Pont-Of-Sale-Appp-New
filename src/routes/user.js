const express = require('express')
const Route = express.Router()

const {getAll, register, login } = require('../controllers/user')
const {authentication, authorization} = require('../helper/auth')

Route
    .get('/',getAll)
    .post('/register', register)
    .post('/login', login)

module.exports = Route
