const connection = require('../configs/mysql')

module.exports = {
getAll: (searchName, sort,order, limit, page)=>{
        return new Promise((resolve, reject)=>{
            const firstData = ((limit*page)-limit)
            connection.query(`SELECT * FROM user WHERE email LIKE'%${searchName}%' ORDER BY ${sort} ${order} LIMIT ${firstData},${limit}`, (error, result)=>{
                if(error) reject(new Error(error))
                resolve(result)
            })
        })
    },
  register: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO user SET ?', data, (error, result) => {
        if (error) reject(new Error(error))
        resolve(result)
      })
    })
  },
  checkEmail: (email) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM user WHERE email = ?', email, (error, result) => {
        if (error) reject(new Error(error))
        resolve(result)
      })
    })
  },
  updateUser: (data)=>{
        return new Promise((resolve, reject)=>{
            connection.query('UPDATE user SET ? WHERE id_user = ?', [data,data.id_user], (error, result)=>{
                if(error) reject(new Error(error))
                resolve(result)
            })
        })
    },
}
