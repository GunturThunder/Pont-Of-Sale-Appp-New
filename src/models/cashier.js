const connection = require('../configs/mysql')

module.exports = {
  register: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO cashier SET ?', data, (error, result) => {
        if (error) reject(new Error(error))
        resolve(result)
      })
    })
  },
  checkEmail: (email) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM cashier WHERE email = ?', email, (error, result) => {
        if (error) reject(new Error(error))
        resolve(result)
      })
    })
  }
}
