const connection = require('../configs/mysql')

module.exports={
    getAll: (searchName, sortBy)=>{
        return new Promise((reslove, reject)=>{
            connection.query(`SELECT * FROM worker WHERE name LIKE '%${searchName}%' ORDER BY ${sortBy} ASC`, (error, result)=>{
                if(error) reject(new Error(error))
                reslove(result)
            })
        })
    },
    insertWorker: (data)=>{
        return new Promise((reslove, reject)=>{
            connection.query('INSERT INTO worker SET ?', data, (error,result)=>{
                if(error) reject(new Error(error))
                reslove(result)
            })
        })
    },
    updateWorker: (data, id_worker)=>{
        return new Promise((reslove, reject)=>{
            connection.query('UPDATE worker SET ? WHERE id_worker = ?', [data,id_worker], (error, result)=>{
                if(error) reject(new Error(error))
                reslove(result)
            })
        })
    },
    getWorkerDetail: (id_worker)=>{
        return new Promise((reslove, reject)=>{
            connection.query('SELECT * FROM worker WHERE id_worker = ?', id_worker, (error, result)=>{
                if(error) reject(new Error(error))
                reslove(result)
            })
        })
    },
    deleteWorker: (id_worker)=>{
        return new Promise((resolve, reject)=>{
            connection.query('DELETE FROM worker WHERE id_worker = ?', id_worker, (error, result)=>{
                if(error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    getLimitPageWorker: (limit, page)=>{
        return new Promise((resolve, reject)=>{
            const firstData = ((limit * page)-limit)
            connection.query(`SELECT * FROM worker LIMIT ${firstData},${limit}`, (error, result)=>{
                if(error) reject(new Error(error))
                resolve(result)
            })
        })
    }
}