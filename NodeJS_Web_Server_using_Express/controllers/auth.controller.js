const db = require('../db')
const md5 = require('md5');
const cookieParser = require('cookie-parser')

module.exports.login = (req, res)=>{
    res.render('auth/login',{
        errors : [], user : undefined
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
    res.cookie('userId',user.id,{signed: true})
    res.redirect('/users')
}