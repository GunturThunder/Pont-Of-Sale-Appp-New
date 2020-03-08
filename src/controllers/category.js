const categoryModel = require('../models/category')
const miscHelper = require('../helper')
const uuidv4 = require('uuid/v4')

module.exports = {
    getAll: async(request, response)=>{
        try{
            const searchName = request.query.searchName || ''
            const sort = request.query.sort || 'id_category'
            const order = request.query.order || 'ASC'
            const limit = request.query.limit || 100
            const page = request.query.page || 1

            const result = await categoryModel.getAll(searchName, sort, order, limit, page)
            miscHelper.response(response, 200, result)
            // response.json(result)
        }
        catch(error){
            console.log(error)
            miscHelper.customErrorResponse(response, 404, 'Internal Sever Error!')
        }
    },
    insertCategory: async(request, response)=>{
        try{
            // console.log("Masuk sini")
            // let id_category = uuidv4() 
            const data =  {
                // id_product,
                // id_category,
                name : request.body.name,
                // price : request.body.price,
                // stock : request.body.stock,
                // description : request.body.description,
                // image : `http://localhost:4040/upload/${request.file.filename}`,
            }
            const result = await categoryModel.insertCategory(data)
            data.id_category = result.insertId
            
            miscHelper.response(response, 200, data)
        }
        catch(error){
            console.log(error)
            miscHelper.customErrorResponse(response, 404, 'Internal Sever Error!')
        }
    },
    updateCategory: async(request, response)=>{
        try{
            
            const id_category = request.params.id_category
            // console.log(id_category)
            const data =  {
                id_category,
                name : request.body.name,
            }
            
            const result = await categoryModel.updateCategory(data)
            miscHelper.response(response, 200, data)
        }
        catch(error){
            console.log(error)
            miscHelper.customErrorResponse(response, 404, 'Internal Sever Error!')
        }
    },
    deleteCategory: async(request, response) =>{
        try{
            const id_category = request.params.id_category
            const result = await categoryModel.deleteCategory(id_category)
            const id_cate = parseInt(id_category)
            miscHelper.response(response, 200, id_cate)
        }
        catch(error){
            console.log(error)
            miscHelper.customErrorResponse(response, 404, 'Internal Sever Error')
        }
    }
}