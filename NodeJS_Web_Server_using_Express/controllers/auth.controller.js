const db = require('../db')
const md5 = require('md5');


module.exports.login = (req, res)=>{
    res.render('auth/login',{
        errors : []
    })
}
module.exports.postLogin = (req, res)=>{
    var email = req.body.email
    var password = req.body.password

    var user = db.get('listUser').find({email: email}).value()

    if(!user){
        res.render('auth/login',{
            errors : ['User does not exist'],
            values: req.body
        })
        res.end()
    }
    if(user.password !==md5(password)){
        res.render('auth/login',{
            errors : ['Wrong password'],
            values: req.body
        })
        res.end()
    }
    res.cookie('pass',user.password)
    res.redirect('/users')
}