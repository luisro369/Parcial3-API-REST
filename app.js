'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const mongoose =require('mongoose')
var uri = 'mongodb://adminUser1:parcial3@ds231991.mlab.com:31991/api-parcialpdm'

mongoose.connect(uri, { useNewUrlParser: true })


app.set('view-engine','pug')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
//	/app.use('/api', api)

app.get('/', function(req, res){
	res.render('loginWeb.pug', {title: "Login"})
})

module.exports = app