const express = require('express')
const router = express.Router()

app.get('/', (req, res) => {
    res.send("User List")
})
app.get('/new', (req,res) => {
    res.send("User New Form")
})

module.exports
