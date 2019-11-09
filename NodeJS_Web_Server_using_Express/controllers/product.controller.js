const db = require('../db')
module.exports.product = (req, res)=>{
    var page = parseInt(req.query.page) || 1
    var temp
    if(page==1){
        arrPage = [page,page+1,page+2]
        temp = true
    }else{
        arrPage = [page-1,page,page+1]
        temp=false
    }
    var perPage = 8
    var start = (page - 1)*perPage
    var end = page*perPage
    var products =  db.get('products').value().slice(start, end)
    res.render('./products/index',{
        products: products, 
        user : undefined,
        data: {
            pageSelected: page,
            arrPage: arrPage,
            temp: temp
        }
    })
}