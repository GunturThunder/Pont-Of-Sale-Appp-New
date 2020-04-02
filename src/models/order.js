const con = require('../configs/mysql')

module.exports = {
    buy: (data, a, date) => {
        return new Promise((resolve, reject) => {
            con.query(`SELECT * FROM product WHERE id_product= '${data.id_product}'`, (error, result) => {
                console.log(result)
                if (result.length > 0) {
                    var stock = result[0].stock - data.stock
                    var price = result[0].price * data.stock

                    if (a == 0) { con.query(`INSERT INTO pof_db.order SET ?, id_buyer='${data.id_buyer}', total=0`, date) }

                    con.query(`UPDATE product SET stock = ${stock} WHERE id_product='${data.id_product}'`, (error, result) => {
                        if (error) reject(new Error(error))
                        con.query(`INSERT INTO pof_db.order_detail (id_order, id_buyer, id_product, stock, price) VALUES (NULL, '${data.id_buyer}', '${data.id_product}', '${data.stock}', '${price}')`, (error, result) => {
                            // console.log(result)
                            con.query(`SELECT sum(price) as tPrice FROM pof_db.order_detail WHERE id_buyer='${data.id_buyer}'`, (error, result) => {
                                if (error) reject(new Error(error))
                                const newP = result[0].tPrice
                                con.query(`UPDATE pof_db.order SET total = ${newP} WHERE id_buyer='${data.id_buyer}'`, (error, result) => {
                                    if (error) reject(new Error(error))
                                    resolve(result)
                                })
                            })
                        })
                    })
                } else reject(new Error(error))
            })
        })
    },
    getHistory: (startDate, endDate) => {
        return new Promise((resolve, reject) => {
            // console.log("start",startDate)
            con.query(
                `SELECT SUM(total) AS total , DATE_FORMAT(date_added,'%Y-%m-%d') as date FROM pof_db.order where date_added >= '${startDate}' and date_added <= DATE_ADD('${endDate}', INTERVAL 1 DAY) GROUP BY DATE(date_added)`,
                (error, result) => {
                    if (error) reject(new Error(error));
                    // console.log(result);
                    resolve(result);
                }
            );
        });
    }
}