const con = require('../configs/mysql')

module.exports = {
    buy: (data, a, date) => {
        return new Promise((resolve, reject) => {
            con.query(`SELECT * FROM product WHERE id_product= ${data.id_product}`, (error, result) => {
                if (result.length > 0) {
                    var stock = result[0].stock - data.stock
                    var price = result[0].price * data.stock

                    if (a == 0) { con.query(`INSERT INTO pof_db.order SET ?, id_buyer=${data.id_buyer}, total=0`, date) }

                    con.query(`UPDATE product SET stock = ${stock} WHERE id_product=${data.id_product}`, (error, result) => {
                        if (error) reject(new Error(error))
                        con.query(`INSERT INTO pof_db.order_detail (id_order, id_buyer, id_product, stock, price) VALUES (NULL, '${data.id_buyer}', '${data.id_product}', '${data.stock}', '${stock}')`, (error, result) => {
                            // console.log(result)
                            con.query(`SELECT sum(price) as tPrice FROM pof_db.order_detail WHERE id_buyer=${data.id_buyer}`, (error, result) => {
                                if (error) reject(new Error(error))
                                const newP = result[0].tPrice
                                con.query(`UPDATE pof_db.order SET total = ${newP} WHERE id_buyer=${data.id_buyer}`, (error, result) => {
                                    if (error) reject(new Error(error))
                                    resolve(result)
                                })
                            })
                        })
                    })
                } else reject(new Error(error))
            })
        })
    }
}