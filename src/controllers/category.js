const categoryModel = require('../models/category')
const miscHelper = require('../helpers')

module.exports={
    getAll: async(request, response)=>{
        try{
            const searchName = request.query.name || ''
            const sortBy = request.query.sortBy || 'id_category'
            const result = await categoryModel.getAll(searchName, sortBy)
            miscHelper.response(response, 200, result)
        }
        catch(error){
            console.log(error)
            miscHelper.customErrorResponse(response, 404, 'Internal Sever Error!')
        }
    },
    insertCategory: async(request, response)=>{
        try{
            const data = {
                name : request.body.name,
                date_added : new Date(),
                date_updated : new Date()
            }
            const result = await categoryModel.insertCategory(data)
            miscHelper.response(response, 200, result)
        }
        catch(error){
            console.log(error)
            miscHelper.response(response, 200, result)
        }
    },
    updateCategory: async(request, response)=>{
        try{
            const data = {
                name : request.body.name,
                date_updated : new Date()
            }
            const id_category = request.params.id_category
            const result = await categoryModel.updateCategory(data,id_category)
            miscHelper.response(response, 200, result)
        }
        catch(error){
            console.log(error)
            miscHelper.response(response, 200, result)
        }
    },
    getCategoryDetail: async(request, response)=>{
        try{
            const id_category = request.params.id_category
            const result = await categoryModel.getCategoryDetail(id_category)
            miscHelper.response(response, 200, result)
        }
        catch(error){
            console.log(error)
            miscHelper.customErrorResponse(response, 404, 'Internal Sever Error!')
        }
    },
    deleteCategory: async(request, response)=>{
        try{
            const id_category = request.params.id_category
            const result = await categoryModel.deleteCategory(id_category)
            miscHelper.response(response, 200, result)
        }
        catch(error){
            console.log(error)
            miscHelper.customErrorResponse(response, 404, 'Internal Sever Error!')
        }
    },
    getLimitPageCategory: async(request, response)=>{
        try{
            const limit = request.query.limit
            const page = request.query.page || 1

            const result = await categoryModel.getLimitPageCategory(limit, page)
            miscHelper.response(response, 200, result)
        }
        catch(error){
            console.log(error)
            miscHelper.customErrorResponse(response, 404, 'Internal Sever Error!')
        }
    }
}