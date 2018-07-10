'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

<<<<<<< HEAD
const mongoose =require('mongoose')
var uri = 'mongodb://adminUser1:parcial3@ds231991.mlab.com:31991/api-parcialpdm'

const session = require('express-session')
const cookieParser = require('cookie-parser')
app.use(cookieParser())

app.use(session({
  secret: 'MLL0D19T',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))


mongoose.connect(uri, { useNewUrlParser: true })



=======
>>>>>>> a1667088610e7d58cee15dbb2c9145bb591b157d
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