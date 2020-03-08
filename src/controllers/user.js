const userModel = require('../models/user')
const helper = require('../helper/')
// const miscHelper = require('../helper')
const JWT = require('jsonwebtoken')
const { JWT_KEY } = require('../configs')

module.exports = {
    getAll: async(request, response)=>{
        try{
            const searchName = request.query.searchName || ''
            const sort = request.query.sort || 'id_user'
            const order = request.query.order || 'ASC'
            const limit = request.query.limit || 100
            const page = request.query.page || 1

            const result = await userModel.getAll(searchName, sort, order, limit, page)
            helper.response(response, 200, result)
            // response.json(result)
        }
        catch(error){
            console.log(error)
            helper.customErrorResult(response, 404, 'Internal Sever Error!')
        }
    },
  register: async (request, response) => {
    try {
      const salt = helper.generateSalt(18)
      const hashPassword = helper.setPassword(request.body.password, salt)
      const data = {
        // name: request.body.name,
        id_user : request.body.id_user,
        name : request.body.name,
        email: request.body.email,
        status: request.body.status,
        password: hashPassword.passwordHash,
        salt: hashPassword.salt
        
        // created_at: new Date(),
        // updated_at: new Date()
      }
      const result = await userModel.register(data)
      response.json(result)
    } catch (error) {
      console.log(error)
    }
  },
  login: async (request, response) => {
    const data = {
      password: request.body.password,
      email: request.body.email
    }

    const emailValid = await userModel.checkEmail(data.email)
    const dataUser = emailValid[0]
    const hashPassword = helper.setPassword(data.password, dataUser.salt)

    if (hashPassword.passwordHash === dataUser.password) {
      const token = JWT.sign({
        email: dataUser.email,
        id_user: dataUser.id_user
      }, JWT_KEY, { expiresIn: '10000h' })

      delete dataUser.salt
      delete dataUser.password

      dataUser.token = token

      response.json(dataUser)
    } else {
      response.json({ message: 'Login error!' })
    }
  }
}
