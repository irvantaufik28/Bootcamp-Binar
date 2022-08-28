const express = require('express')
const router = express.Router()
const auth = require('../controllers/auth_controllers')


router.post('/register', auth.register)
router.post('/login', auth.login)
router.get('/whoami', auth.whoami)


module.exports = router