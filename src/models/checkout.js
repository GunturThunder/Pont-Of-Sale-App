const connection = require('../configs/mysql')

module.exports={
    getAll: (searchName, sortBy)=>{
        return new Promise((reslove, reject)=>{
            // connection.query(`SELECT * FROM checkout WHERE name LIKE '%${searchName}%' ORDER BY ${sortBy} ASC`, (error, result)=>{
            connection.query(`SELECT checkout.id_checkout, item.name AS product_name, worker.name AS worker_name, checkout.quantity, item.price, checkout.total, checkout.date_ordered FROM item,checkout,worker,category 
            WHERE category.id_category=item.id_category 
            AND item.id_item=checkout.id_item 
            AND checkout.id_worker=worker.id_worker AND item.name LIKE '%${searchName}%' ORDER BY checkout.${sortBy} ASC`, (error, result)=>{
                if(error) reject(new Error(error))
                reslove(result)
            })
        })
    },
    insertCheckout: (data)=>{
        return new Promise((reslove, reject)=>{
            connection.query('INSERT INTO checkout SET ?', data, (error,result)=>{
                if(error) reject(new Error(error))
                reslove(result)
            })
        })
    },
    updateCheckout: (data, id_checkout)=>{
        return new Promise((reslove, reject)=>{
            connection.query('UPDATE checkout SET ? WHERE id_checkout = ?', [data,id_checkout], (error, result)=>{
                if(error) reject(new Error(error))
                reslove(result)
            })
        })
    },
    getCheckoutDetail: (id_checkout)=>{
        return new Promise((reslove, reject)=>{
            connection.query('SELECT checkout.id_checkout, item.name AS proruct_name, worker.name AS worker_name, checkout.quantity, item.price, checkout.total, checkout.date_ordered FROM item,checkout,worker,category WHERE category.id_category=item.id_category AND item.id_item=checkout.id_item AND checkout.id_worker=worker.id_worker AND id_checkout = ?', id_checkout, (error, result)=>{
                if(error) reject(new Error(error))
                reslove(result)
            })
        })
    },
    deleteCheckout: (id_checkout)=>{
        return new Promise((resolve, reject)=>{
            connection.query('DELETE FROM checkout WHERE id_checkout = ?', id_checkout, (error, result)=>{
                if(error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    getLimitPageCheckout: (limit, page)=>{
        return new Promise((resolve, reject)=>{
            const firstData = ((limit * page)-limit)
            connection.query(`SELECT * FROM checkout LIMIT ${firstData},${limit}`, (error, result)=>{
                if(error) reject(new Error(error))
                resolve(result)
            })
        })
    }
}