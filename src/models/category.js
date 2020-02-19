const connection = require('../configs/mysql')

module.exports={
    getAll: (searchName, sortBy)=>{
        return new Promise((reslove, reject)=>{
            connection.query(`SELECT * FROM category WHERE name LIKE '%${searchName}%' ORDER BY ${sortBy} ASC`, (error, result)=>{
                if(error) reject(new Error(error))
                reslove(result)
            })
        })
    },
    insertCategory: (data)=>{
        return new Promise((reslove, reject)=>{
            connection.query('INSERT INTO category SET ?', data, (error,result)=>{
                if(error) reject(new Error(error))
                reslove(result)
            })
        })
    },
    updateCategory: (data, id_category)=>{
        return new Promise((reslove, reject)=>{
            connection.query('UPDATE category SET ? WHERE id_category = ?', [data,id_category], (error, result)=>{
                if(error) reject(new Error(error))
                reslove(result)
            })
        })
    },
    getCategoryDetail: (id_category)=>{
        return new Promise((reslove, reject)=>{
            connection.query('SELECT * FROM category WHERE id_category = ?', id_category, (error, result)=>{
                if(error) reject(new Error(error))
                reslove(result)
            })
        })
    },
    deleteCategory: (id_category)=>{
        return new Promise((resolve, reject)=>{
            connection.query('DELETE FROM category WHERE id_category = ?', id_category, (error, result)=>{
                if(error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    getLimitPageCategory: (limit, page)=>{
        return new Promise((resolve, reject)=>{
            const firstData = ((limit * page)-limit)
            connection.query(`SELECT * FROM category LIMIT ${firstData},${limit}`, (error, result)=>{
                if(error) reject(new Error(error))
                resolve(result)
            })
        })
    }
}