const express = require('express')
const bodyParser = require('body-parser')
const booksRouter = require('../books')
const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json)

app.use('/', booksRouter)

module.exports = app