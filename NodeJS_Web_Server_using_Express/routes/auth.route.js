const express = require('express')
const middleware =require('../middleware/auth.middleware')
const controller = require('../controllers/auth.controller')
const router = express.Router()

router.get('/login',controller.login)
router.post('/login',controller.postLogin)
module.exports = router