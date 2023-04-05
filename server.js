const express = require('express')
const app =express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    console.log("Here")
    //res.json({ message: 
    //"Error"})
    //res.send('Hi')
    res.render('index', { text: "world"})
})
//res.download res.send res.status res.render


app.listen(3000)
