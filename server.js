const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const api = require('./src/server/routes/api.js')

mongoose.connect('mongodb://localhost/financesDB', {useNewUrlParser: true, useUnifiedTopology: true})
const app = express()

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})

app.use(express.json())
app.use(express.urlencoded({extended: false}))
// app.use(express.static(path.join(__dirname, 'App.js')))
// app.use(express.static(path.join(__dirname, 'node_modules')))

app.use('/', api)

const PORT = 4200
app.listen(PORT, () => {
    console.log(`running on port ${PORT}`)
}) 