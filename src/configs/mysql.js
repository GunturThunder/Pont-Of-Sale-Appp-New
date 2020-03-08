const mysql = require('mysql')
const {database} = require('./index')

const connnection = mysql.createConnection(database)

connnection.connect((error)=>{
    if(error) console.log(error)
    console.log('database connected')
})

module.exports = connnection