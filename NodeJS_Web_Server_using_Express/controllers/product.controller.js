const db = require('../db')
module.exports.product = (req, res)=>{
    var products = db.get('products').value()
    res.render('./products/index',{
        products: products, user : undefined
    })
}