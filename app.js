'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.set('view-engine','pug')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const user = require('./routes/userRoutes.js')
app.use('/api', user)

const user = require('./routes/userRoutes.js')
app.use('/api', user)

app.get('/', function(req, res){
	res.render('loginWeb.pug', {title: "Login"})
})

module.exports = app