const db = require('../db')

module.exports.requireAuth = (req, res, next) =>{
    if(!req.signedCookies.userId){
        res.redirect('/auth/login')
        return;
    }
    var user =  db.get('listUser').find({id : req.signedCookies.userId}).value()
    if(!user){
        res.redirect('/auth/login')
        return;
    }
    res.locals.user = user
    next()
}