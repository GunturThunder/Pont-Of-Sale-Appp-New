const productModel = require('../models/product')
const miscHelper = require('../helper')
const uuidv4 = require('uuid/v4')

module.exports = {
    getAll: async(request, response)=>{
        try{
            const searchName = request.query.searchName || ''
            const sort = request.query.sort || 'id_product'
            const order = request.query.order || 'ASC'
            const limit = request.query.limit || 100
            const page = request.query.page || 1
            const id_category = request.query.id_category || ''


            const result = await productModel.getAll(searchName, sort, order, limit, page,id_category)
            const tData = await productModel.getAll(searchName, 'id_product', 'ASC', 1000, 1,'')
            const tPage = Math.ceil(tData.length / limit)
            console.log(tData)
            // const tPage = Math.ceil(result.length / limit)
            miscHelper.response(response, 200, result, tPage)
            // response.json(result)
        }
        catch(error){
            console.log(error)
            miscHelper.customErrorResponse(response, 404, 'Internal Sever Error!')
        }
    },
    insertProduct: async(request, response)=>{
        try{
            // console.log("Masuk sini")
            let id_product = uuidv4()
            const data =  {
                id_product,
                id_category : request.body.id_category,
                name : request.body.name,
                price : request.body.price,
                stock : request.body.stock,
                description : request.body.description,
                image : `http://20.20.20.147:4040/upload/${request.file.filename}`,
            }
            const result = await productModel.insertProduct(data)
            miscHelper.response(response, 200, data)
        }
        catch(error){
            console.log(error)
            miscHelper.customErrorResponse(response, 404, 'Internal Sever Error!')
        }
    },
    updateProduct: async(request, response)=>{
        try{
            // console.log(request.body)
            const id_product = request.params.id_product
            const data =  {
                id_product,
                id_category : request.body.id_category,
                name : request.body.name,
                price : request.body.price,
                stock : request.body.stock,
                description : request.body.description,
                image : `http://20.20.20.147:4040/upload/${request.file.filename}`,
            }
            
            const result = await productModel.updateProduct(data)
            miscHelper.response(response, 200, data)
        }
        catch(error){
            console.log(error)
            miscHelper.customErrorResponse(response, 404, 'Internal Sever Error!')
        }
    },
    deleteProduct: async(request, response) =>{
        try{
            const id_product = request.params.id_product
            const result = await productModel.deleteProduct(id_product)
            miscHelper.response(response, 200, id_product)
        }
        catch(error){
            console.log(error)
            miscHelper.customErrorResponse(response, 404, 'Internal Sever Error')
        }
    }
}