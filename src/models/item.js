const connection = require('../configs/mysql')

module.exports={
    getAll: (searchName, sortBy)=>{
        return new Promise((resolve, reject)=>{
            // connection.query(`SELECT * FROM item WHERE name LIKE '%${searchName}%' ORDER BY ${sortBy} ASC`, (error, result)=>{
            connection.query(`SELECT item.id_item, category.name AS name_category, item.name, item.stock, item.price, item.image, item.description, item.date_added, item.date_updated FROM item,category
                            WHERE item.id_category=category.id_category
                            AND item.name LIKE '%${searchName}%' ORDER BY item.${sortBy} ASC`, (error, result)=>{
                if(error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    insertItem: (data)=>{
        return new Promise((resolve, reject)=>{
            connection.query('INSERT INTO item SET ?', data, (error, result)=>{
                if(error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    updateItem: (data, id_item)=>{
        return new Promise((resolve,reject)=>{
            connection.query('UPDATE item SET ? WHERE id_item = ?', [data,id_item], (error, result)=>{
                if(error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    getItemDetail: (id_item)=>{
        return new Promise((resolve, reject)=>{
            connection.query('SELECT item.id_item, category.name AS name_category, item.name, item.stock, item.price, item.image from item,category WHERE item.id_category=category.id_category AND id_item = ?', id_item, (error,result)=>{
                if(error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    deleteItem: (id_item)=>{
        return new Promise((resolve, reject)=>{
            connection.query('DELETE FROM item WHERE id_item = ?', id_item, (error, result)=>{
                if(error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    getLimitPageItem: (limit, page)=>{
        return new Promise((resolve, reject)=>{
            const firstData = ((limit * page)-limit) 
            connection.query(`SELECT item.id_item, category.name AS name_category, item.name, item.stock, item.price, item.image from item,category WHERE item.id_category=category.id_category LIMIT ${firstData},${limit}`, (error, result)=>{
            // connection.query('SELECT * FROM item LIMIT ? , ?',[firstData, limit], (error, result)=>{
                if(error) reject(new Error(error))
                resolve(result)
            })
        })
    },
   
}
// sortItem: (sortBy)=>{
    //     return new Promise((resolve, reject)=>{
    //         connection.query('SELECT * FROM item ORDER BY ? ASC', sortBy, (error, result)=>{
    //             if(error) reject(new Error(error))
    //             resolve(result)
    //         })
    //     })
    // }