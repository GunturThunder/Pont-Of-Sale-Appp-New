const express = require('express')
const Route = express.Router()

const {getAll, register, login, updateUser } = require('../controllers/user')
const {authentication, authorization} = require('../helper/auth')

Route
    .get('/',getAll)
    .patch('/:id_user',updateUser)
    .post('/register', register)
    .post('/login', login)

module.exports = Route
