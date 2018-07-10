'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.set('view-engine','pug')

app.use(express.static(path.join(__dirname, 'assets')))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
//	/app.use('/api', api)

const user = require('./routes/userRoutes.js')
app.use('/api', user)

app.get('/', function(req, res){
	res.render('loginWeb.pug', {title: "Login"})
})

module.exports = app