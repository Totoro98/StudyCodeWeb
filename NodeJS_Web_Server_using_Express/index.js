const Express = require('express')
const app = Express()
const port = 3000
app.set('views', './views')
app.set('view engine', 'ejs')


listUser =[{id: 1,name:"Tom"},{id:2,name:"Jerry"}]


app.get('/',(req, res) => {
    res.render('index',{
        name : "Hello Word"
    })
})
app.get('/users',(req, res) =>{
    res.render('./users/index',{
        arrUser :listUser
    })
})

app.get('/users/search', (req, res) =>{
    var q = req.query.q
    var result = listUser.filter((user) =>{
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !==-1
    })
    res.render('./users/index',{
        arrUser: result
    })
})

app.listen(port, () => console.log(`Server listening on port ${port}`))