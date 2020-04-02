const models = require('../models/order')
const helpers = require('../helper')
const uuid = require('uuid/v4')
const moment = require("moment");


module.exports = {
    buy: async (request, response) => {
        try {
            const buy = request.body
            if (buy === undefined || buy === '') return console.log('Data is empty')

            var a = 0
            // console.log(request.body)
            const id_buyer = uuid()
            console.log(id_buyer)
            console.log(buy.product)
            await buy.product.map(e => {
                const data = {
                    id_buyer: id_buyer,
                    id_product: e.id_product,
                    stock: e.qty
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
    },
    getHistory: async (request, response) => {
        try {
            const date = new Date();
            const start = request.query.start || date;
            const end = request.query.end || date;
            const startDate = moment(new Date(start)).format("YYYY-MM-DD");
            const endDate = moment(new Date(end)).format("YYYY-MM-DD");
            const result = await models.getHistory(startDate, endDate);
            // console.log("controler ",startDate);
            response.json(result);
        } catch (error) {
            console.log(error);
        }
    }
}