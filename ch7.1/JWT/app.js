const express = require('express')
const app =express()

app.use(express.json())
const authRouter =require('./router/auth_router')
app.use('/users', authRouter)


const passport = require('./lib/passport')
app.use(passport.initialize())

const PORT= process.env.port || 3000
app.listen(PORT, ()=>{
    console.log(`server runing on ${PORT}`)
})