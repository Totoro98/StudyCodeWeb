const db = require('../db')

module.exports.requireAuth = (req, res, next) =>{
    if(!req.cookies.pass){
        res.redirect('/auth/login')
        return;
    }
    var user =  db.get('listUser').find({password : req.cookies.pass}).value()
    if(!user){
        res.redirect('/auth/login')
        return;
    }
    next()
}