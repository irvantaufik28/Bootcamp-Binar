const express = require('express')
const router = express.Router()
const auth = require('../controllers/auth_controller')
const passport =require('passport')

router.get('/register', auth.registerPage)
router.post('/register', auth.register)

router.get('/login', auth.loginPage)
router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
   }))
   

 router.get('/', (req, res)=>{
    return res.render('index')
})



module.exports =router