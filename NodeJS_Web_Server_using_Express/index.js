require('dotenv').config()
console.log('SESSION_SECRET : ', process.env.SESSION_SECRET);
const express = require('express')
const bodyParser = require('body-parser')
const routerUser = require('./routes/user.route')
const routerAuth = require('./routes/auth.route')
const cookieParser = require('cookie-parser')
const middleware =require('./middleware/auth.middleware')

const app = express()
const port = 3000


app.use(express.static('public'))
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser(process.env.SESSION_SECRET))

app.set('views', './views')
app.set('view engine', 'ejs')


app.get('/',(req, res) => {
    res.render('index',{
        name : "Hello Word"
    })
})
app.use('/auth', routerAuth)
app.use('/users',middleware.requireAuth, routerUser)
app.listen(port, () => console.log(`Server listening on port ${port}`))