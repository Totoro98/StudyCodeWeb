const express = require('express')
const usermiddleware =require('../middleware/user.middleware')
const controller = require('../controllers/user.controller')
const authmiddleware = require('../middleware/auth.middleware')
const router = express.Router()

router.get('/',controller.index)
router.get('/search', controller.search)
router.get('/create',controller.create)
router.get('/:id',controller.id)
router.post('/create',usermiddleware.postCreate ,controller.postCreate)
router.get('/delete/:id',controller.deleteUser)

module.exports = router