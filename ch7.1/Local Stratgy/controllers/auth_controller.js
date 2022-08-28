const bcrypt = require('bcrypt')

const {User} = require('../models')

exports.registerPage = async (req, res) =>{
    return res.render('register')
}

exports.register = async (req, res) =>{
   const {username, password} = req.body
   const encryptedPassword = bcrypt.hashSync(password, 10)
    
    User.create({
        username : username,
        password : encryptedPassword,
    }).then(result =>{
        return res.redirect('./login')
    })
   
    
}

exports.loginPage = (req, res)=>{
    let messages = ''
    if(req.session){
        if(req.session.messages){
            message = req.session.messages[0]
            req.session.messages = []
        }
    }
     return res.render('login', {messages:messages})
}

