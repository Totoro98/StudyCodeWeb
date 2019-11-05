const Express = require('express')
const app = Express()
const port = 3000
app.set('views', './views')
app.set('view engine', 'pug')
app.get('/',(req, res) => {
    res.render('index',{
        name : "Hello Word"
    })
})
app.get('/users',(req, res) =>{
    res.render('./users/index',{
        arrUser : [{
            id: 1,name:"Tom"
        },{
            id:2,name:"Jerry"
        }]
    })
})
app.listen(port, () => console.log(`Server listening on port ${port}`))