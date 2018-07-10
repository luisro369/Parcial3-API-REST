'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use('./uploads', express.static('uploads'))

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
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const user = require('./routes/userRoutes.js')
app.use('/api', user)

const card = require('./routes/cardRoutes.js')
app.use('/api', card)

var path = require('path')

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
	res.sendFile('index.html', {root: path.join('./views/')})
})


module.exports = app