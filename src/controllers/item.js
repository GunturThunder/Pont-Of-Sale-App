const itemModel = require('../models/item')
const miscHelper = require('../helpers')

module.exports={
    getAll: async(request, response)=>{
        try{
            const searchName = request.query.name || ''
            const sortBy = request.query.sortBy || 'id_item'
            const result = await itemModel.getAll(searchName, sortBy)
            miscHelper.response(response, 200, result)
        }
        catch(error){
            console.log(error)
            miscHelper.customErrorResponse(response, 404, 'Internal Sever Error!')
        }
    },
    insertItem: async(request, response)=>{ 
        try{
            const {id_category, name, stock, price, description} = request.body
            const data = {
                id_category,
                name,
                stock,
                price,
                image : `http://localhost:3030/uploads/${request.file.filename}`,
                description,
                date_added : new Date(),
                date_updated : new Date() 
            }
            const result = await itemModel.insertItem(data) 
            miscHelper.response(response, 200, result)
        }
        catch(error){
            // console.log(error)
            // miscHelper.customErrorResponse(response, 404, 'Internal Sever Error!')
        }
    },
    updateItem: async(request, response)=>{
        try{
            const {id_category, name, stock, price, description} = request.body
            const data = {
                id_category,
                name,
                stock,
                price,
                image : `http://localhost:3030/uploads/${request.file.filename}`,
                description,
                date_updated : new Date() 
            }
            const id_item = request.params.id_item
            const result = await itemModel.updateItem(data,id_item)
            miscHelper.response(response, 200, result)
        }
        catch(error){
            console.log(error)
            miscHelper.customErrorResponse(response, 404, 'Internal Sever Error!')
        }
    },
    getItemDetail: async(request, response)=>{
        try{
            const id_item = request.params.id_item
            const result = await itemModel.getItemDetail(id_item)
            miscHelper.response(response, 200, result)
        }
        catch(error){
            console.log(error)
            miscHelper.customErrorResponse(response, 404, 'Internal Sever Error!')
        }
    },
    deleteItem: async(request, response)=>{
        try{
            const id_item = request.params.id_item
            const result = await itemModel.deleteItem(id_item)
            miscHelper.response(response, 200, result)
        }
        catch(error){
            console.log(error)
            miscHelper.customErrorResponse(response, 404, 'Internal Sever Error!')
        }
    },
    getLimitPageItem: async(request, response)=>{
        try{
            const limit = request.query.limit
            const page = request.query.page || 1

            const result = await itemModel.getLimitPageItem(limit,page)
            miscHelper.response(response, 200, result)
        }
        catch(error){
            console.log(error)
            miscHelper.customErrorResponse(response, 404, 'Internal Sever Error!')
        }
    }
    
}
// postFile: async(request,response)=>{
    //     try{
    //         const file = request.files.photo
            
    //         const result = await itemModel.postFile(file)
    //         miscHelper.response(response, 200, result)
    //     }
    //     catch(error){
    //         console.log(error)
    //         miscHelper.customErrorResponse(response, 404, 'Internal Sever Error!')

    //     }
    // }











 // const data={
            //     id_category: request.body.id_category,
            //     name: request.body.name,
            //     stock: request.body.stock,
            //     price: request.body.price
            // }
            // const result = await itemModel.insertItem(data)
            // miscHelper.response(response, 200, result)
        // catch(error){
        //     console.log(error)
        //     miscHelper.customErrorResponse(response, 404, 'Internal Sever Error!')
        // }





    // sortItem: async(request, response)=>{
    //     try{
    //         const sortBy = request.query.sortBy || 'id_item'
    //         const result =  await itemModel.sortItem(sortBy)
    //         response.json(result)
    //     }
    //     catch(error){
    //         console.log(error)
    //     }
    // }
