const models = require('../models/order')
const helpers = require('../helper')

module.exports = {
    buy: async (request, response) => {
        try {
            const buy = request.body
            if (buy === undefined || buy === '') return console.log('Data is empty')

            var a = 0
            await buy.products.map(e => {
                const data = {
                    id_buyer: buy.id_buyer,
                    id_product: e.id_product,
                    stock: e.quantity
                }
                const date = {
                    date_added: new Date()
                }
                models.buy(data, a, date)
                a++
            })

            helpers.response(response, 200, 'Thank You For The Order')
        } catch (error) {
            console.log(error)
            helpers.customErrorResponse(404, 'Your Request Not Found')
        }
    }
}