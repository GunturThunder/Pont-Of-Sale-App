const workerModel = require('../models/worker')
const miscHelper = require('../helpers')

module.exports={
    getAll: async(request, response)=>{
        try{
            const searchName = request.query.name || ''
            const sortBy = request.query.sortBy || 'id_worker'
            const reslut = await workerModel.getAll(searchName, sortBy)
            miscHelper.response(response, 200, reslut)
        }
        catch(error){
            console.log(error)
            miscHelper.customErrorResponse(response, 404, 'Internal Sever Error!')
        }
    },
    insertWorker: async(request, response)=>{
        try{
            const data = {
                name : request.body.name,
                password : request.body.password,
                position : request.body.position
            }
            const result = await workerModel.insertWorker(data)
            miscHelper.response(response, 200, result)
        }
        catch(error){
            console.log(error)
            miscHelper.response(response, 200, result)
        }
    },
    updateWorker: async(request, response)=>{
        try{
            const data = {
                name : request.body.name,
                password : request.body.password,
                position : request.body.position
            }
            const id_worker = request.params.id_worker
            const result = await workerModel.updateWorker(data,id_worker)
            miscHelper.response(response, 200, result)
        }
        catch(error){
            console.log(error)
            miscHelper.response(response, 200, result)
        }
    },
    getWorkerDetail: async(request, response)=>{
        try{
            const id_worker = request.params.id_worker
            const result = await workerModel.getWorkerDetail(id_worker)
            miscHelper.response(response, 200, result)
        }
        catch(error){
            console.log(error)
            miscHelper.customErrorResponse(response, 404, 'Internal Sever Error!')
        }
    },
    deleteWorker: async(request, response)=>{
        try{
            const id_worker = request.params.id_worker
            const result = await workerModel.deleteWorker(id_worker)
            miscHelper.response(response, 200, result)
        }
        catch(error){
            console.log(error)
            miscHelper.customErrorResponse(response, 404, 'Internal Sever Error!')
        }
    },
    getLimitPageWorker: async(request, response)=>{
        try{
            const limit = request.query.limit
            const page = request.query.page || 1

            const result = await workerModel.getLimitPageWorker(limit, page)
            miscHelper.response(response, 200, result)
        }
        catch(error){
            console.log(error)
            miscHelper.customErrorResponse(response, 404, 'Internal Sever Error!')
        }
    }
}