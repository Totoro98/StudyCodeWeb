const express = require('express')
const shortid = require('shortid')
const db = require('../db')
const router = express.Router()

router.get('/',(req, res) =>{
    res.render('./users/index',{
        arrUser :db.get('listUser').value()
    })
})

router.get('/search', (req, res) =>{
    var q = req.query.q
    var result = db.get('listUser').value().filter((user) =>{
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !==-1
    })
    res.render('./users/index',{
        arrUser: result
    })
})
router.get('/create',(req, res)=>{
    res.render('./users/createUser')
})
router.get('/:id',(req, res)=>{
    var id = req.params.id
    var result = db.get('listUser').value().filter((user)=>{
        return user.id==id
    })
    res.render('./users/viewinfo',{
        name: result[0].name
    })
})
router.post('/create',(req, res)=>{
    req.body.id = shortid.generate()
    db.get('listUser').push(req.body).write()
    res.redirect('/users')
})

module.exports = router