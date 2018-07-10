
'use strict'

const express = require('express')
const api = express.Router()


const UserControllers = require('../controllers/auth.js')
const auth = require('../middlewares/authMiddleware.js')

api.post('/signup', UserControllers.signUp)
api.post('/login', UserControllers.signIn)
	
api.get('/private', auth, (req, res) =>{
	res.status(200).send({message: "Tienes acceso"})
})

//api.get('/user/:userId', UserControllers.getUser)
api.get('/user/', UserControllers.getUser)
module.exports = api