const express = require('express')

const controller = require('../controllers/user.controller')
const router = express.Router()

router.get('/',controller.index)

router.get('/search', controller.search)
router.get('/create',controller.create)
router.get('/:id',controller.id)
router.post('/create',controller.postCreate)
router.get('/delete/:id',controller.deleteUser)

module.exports = router