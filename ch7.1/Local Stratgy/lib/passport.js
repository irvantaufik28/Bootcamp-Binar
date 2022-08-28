const passport =require('passport')
const localStrategy = require('passport-local').Strategy;
const bcrypt =require('bcrypt')

const {User}=require('../models')

const authenticate = async (username, password, done) =>{
    try {
        const user = User.findOne({
            where : {
                username : username
            }
        })
        if(!user){
            return done(null, false,  {
                message : "user not found"
            })
        }
        const isPasswordValid = bcrypt.compareSync(password, user.password)
        if(!isPasswordValid){
            return done(null, false, {
                message: "Wrong password"
            })
        }
        return done(null, user)
    } catch (err) {
        return done(null, false, {message:err.message})
    }
}
passport.use(new localStrategy({
    usernameField: "username",
    passwordField: "password",
}, authenticate))

passport.serializeUser((user, done)=>{
    return done(null,user.id)
})

passport.deserializeUser(async (id, done)=>{
    const user = await User.findByPk(id)
    return done(null, user)
})

module.exports = passport