const Express = require('express')
const bodyParser = require('body-parser')
const shortid = require('shortid')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

const app = Express()
const port = 3000



app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.set('views', './views')
app.set('view engine', 'ejs')

// Set some defaults (required if your JSON file is empty)
db.defaults({ listUser: []})
  .write()



app.get('/',(req, res) => {
    res.render('index',{
        name : "Hello Word"
    })
})
app.get('/users',(req, res) =>{
    res.render('./users/index',{
        arrUser :db.get('listUser').value()
    })
})

app.get('/users/search', (req, res) =>{
    var q = req.query.q
    var result = db.get('listUser').value().filter((user) =>{
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !==-1
    })
    res.render('./users/index',{
        arrUser: result
    })
})
app.get('/users/create',(req, res)=>{
    res.render('./users/createUser')
})
app.get('/users/:id',(req, res)=>{
    var id = req.params.id
    var result = db.get('listUser').value().filter((user)=>{
        return user.id==id
    })
    res.render('./users/viewinfo',{
        name: result[0].name
    })
})
app.post('/users/create',(req, res)=>{
    req.body.id = shortid.generate()
    db.get('listUser').push(req.body).write()
    res.redirect('/users')
})
app.listen(port, () => console.log(`Server listening on port ${port}`))