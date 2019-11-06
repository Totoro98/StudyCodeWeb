const express = require('express')
const bodyParser = require('body-parser')
const routerUser = require('./routes/user.route')

const app = express()
const port = 3000


app.use(express.static('public'))
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.set('views', './views')
app.set('view engine', 'ejs')


app.get('/',(req, res) => {
    res.render('index',{
        name : "Hello Word"
    })
})
app.use('/users', routerUser)
app.listen(port, () => console.log(`Server listening on port ${port}`))