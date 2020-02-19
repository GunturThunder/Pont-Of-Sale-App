const checkoutModel = require('../models/checkout')
const miscHelper = require('../helpers')

module.exports={
    getAll: async(request, response)=>{
        try{
            const searchName = request.query.name || ''
            const sortBy = request.query.sortBy || 'id_checkout'
            const result = await checkoutModel.getAll(searchName, sortBy)
            miscHelper.response(response, 200, result)
        }
        catch(error){
            console.log(error)
            miscHelper.customErrorResponse(response, 404, 'Internal Sever Error!')
        }
    },
    insertCheckout: async(request, response)=>{
        try{
            const data = {
                id_item : request.body.id_item,
                id_worker : request.body.id_worker,
                quantity : request.body.quantity,
                total : request.body.total,
                date_ordered : new Date()
                
            }
            const result = await checkoutModel.insertCheckout(data)
            miscHelper.response(response, 200, result)
        }
        catch(error){
            console.log(error)
            miscHelper.response(response, 200, result)
        }
    },
    updateCheckout: async(request, response)=>{
        try{
            const data = {
                name : request.body.name,
                date_updated : new Date()
            }
            const id_checkout = request.params.id_checkout
            const result = await checkoutModel.updateCheckout(data,id_checkout)
            miscHelper.response(response, 200, result)
        }
        catch(error){
            console.log(error)
            miscHelper.response(response, 200, result)
        }
    },
    getCheckoutDetail: async(request, response)=>{
        try{
            const id_checkout = request.params.id_checkout
            const result = await checkoutModel.getCheckoutDetail(id_checkout)
            miscHelper.response(response, 200, result)
        }
        catch(error){
            console.log(error)
            miscHelper.customErrorResponse(response, 404, 'Internal Sever Error!')
        }
    },
    deleteCheckout: async(request, response)=>{
        try{
            const id_checkout = request.params.id_checkout
            const result = await checkoutModel.deleteCheckout(id_checkout)
            miscHelper.response(response, 200, result)
        }
        catch(error){
            console.log(error)
            miscHelper.customErrorResponse(response, 404, 'Internal Sever Error!')
        }
    },
    getLimitPageCheckout: async(request, response)=>{
        try{
            const limit = request.query.limit
            const page = request.query.page || 1

            const result = await checkoutModel.getLimitPageCheckout(limit, page)
            miscHelper.response(response, 200, result)
        }
        catch(error){
            console.log(error)
            miscHelper.customErrorResponse(response, 404, 'Internal Sever Error!')
        }
    }
}