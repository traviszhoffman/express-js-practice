const express = require('express')
const app =express()

app.set('view engine', 'ejs')
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
//app.use(logger)

//can apply middleware to only ceertain requests


//res.download res.send res.status res.render

const userRouter = require('./routes/users')

app.use('/users', userRouter)

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

app.listen(3000)
