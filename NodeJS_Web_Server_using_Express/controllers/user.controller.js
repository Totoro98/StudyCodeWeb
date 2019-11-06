const shortid = require('shortid')
const db = require('../db')


module.exports.index=(req, res) =>{
    res.render('./users/index',{
        arrUser :db.get('listUser').value()
    })
}
module.exports.search =(req, res) =>{
    var q = req.query.q
    var result = db.get('listUser').value().filter((user) =>{
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !==-1
    })
    res.render('./users/index',{
        arrUser: result
    })
}
module.exports.create = (req, res)=>{
    res.render('./users/createUser',{
        error : 0
    })
}
module.exports.id = (req, res)=>{
    var id = req.params.id
    var result = db.get('listUser').value().filter((user)=>{
        return user.id==id
    })
    res.render('./users/viewinfo',{
        name: result[0].name
    })
}
module.exports.postCreate = (req, res)=>{
    
    req.body.id = shortid.generate()
    db.get('listUser').push(req.body).write()
    res.redirect('/users')
}
module.exports.deleteUser = (req, res) =>{
    var id = req.params.id
    for(user of db.get('listUser').value()){
        if(user.id == id){
            db.get('listUser').remove({id: id}).write()
        }
    }
    res.render('./users/index',{
        arrUser :db.get('listUser').value()
    })
}