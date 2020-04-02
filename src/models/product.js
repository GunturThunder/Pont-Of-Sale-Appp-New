const connection = require('../configs/mysql')

module.exports={
    getAll: (searchName, sort,order, limit, page,id_category)=>{
        return new Promise((resolve, reject)=>{
            const firstData = ((limit*page)-limit)
            connection.query(`SELECT product.id_product, category.name as category, product.name, product.price, product.stock, product.description, product.image FROM category,product  WHERE category.id_category=product.id_category AND product.name LIKE'%${searchName}%' AND category.name LIKE '%${id_category}%' ORDER BY ${sort} ${order} LIMIT ${firstData},${limit}`, (error, result)=>{
                if(error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    insertProduct: (data) => {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO product SET ?', data, (error, result) =>{
                // if(error) reject(new Error(error))
                // resolve(result)
            })
            connection.query(`SELECT product.id_product, category.name as category, product.name, product.price, product.stock, product.description, product.image FROM category,product  WHERE category.id_category=product.id_category`, (error, result)=>{
                if(error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    updateProduct: (data)=>{
        return new Promise((resolve, reject)=>{
            connection.query('UPDATE product SET ? WHERE id_product = ?', [data,data.id_product], (error, result)=>{
                if(error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    deleteProduct: (id_product)=>{
        return new Promise((resolve, reject)=>{
            connection.query('DELETE FROM product WHERE id_product = ?', id_product, (error, result)=>{
                if(error) reject(new Error(error))
                resolve(result)
            })
        })
    }
}