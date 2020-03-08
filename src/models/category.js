const connection = require('../configs/mysql')

module.exports={
    getAll: (searchName, sort,order, limit, page)=>{
        return new Promise((resolve, reject)=>{
            const firstData = ((limit*page)-limit)
            connection.query(`SELECT * FROM category WHERE name LIKE'%${searchName}%' ORDER BY ${sort} ${order} LIMIT ${firstData},${limit}`, (error, result)=>{
                if(error) reject(new Error(error))
                resolve(result)
            })
        })
    },
     insertCategory: (data) => {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO category SET ?', data, (error, result) =>{
                if(error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    updateCategory: (data)=>{
        return new Promise((resolve, reject)=>{
            connection.query('UPDATE category SET ? WHERE id_category = ?', [data,data.id_category], (error, result)=>{
                if(error) reject(new Error(error))
                resolve(result)
            })
        })
    },
     deleteCategory: (id_category)=>{
        return new Promise((resolve, reject)=>{
            connection.query('DELETE FROM category WHERE id_category = ?', id_category, (error, result)=>{
                if(error) reject(new Error(error))
                resolve(result)
            })
        })
    }
}