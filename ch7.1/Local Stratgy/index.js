const express = require('express')
const session = require('express-session')
const passport = require('./lib/passport')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.set('view engine', 'ejs')
app.use(session({
secret:'rahasia',
resave:false,
    saveUninitialized:false,
}))

app.use(passport.initialize())
app.use(passport.session())


app.get('/home', (req, res)=>{
    return res.render('index')
})

const authRouter = require('./routers/auth_router')
app.use('/', authRouter)


const PORT = process.env.port || 3000

app.listen(PORT, ()=>{
    console.log(`server runing on http://localhost:${PORT}`)
})



