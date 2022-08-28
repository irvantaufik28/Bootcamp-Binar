const passport = require('passport')
const {Strategy: JwtStrategy, ExtractJwt}=require('passport-jwt')
const {User}=require('../models')



const options = {
    jwtFromRequest : ExtractJwt.fromHeader('Authorization'),
    secretOrKey:"srerefoui|gp@q*wrpj[oief"
}

passport.use(new JwtStrategy(options,(payload, done)=>{
    User.findBypk(payload.id)
    .then(user => done(null,user))
    .catch(err => done(err, false))
}))

module.exports = passport