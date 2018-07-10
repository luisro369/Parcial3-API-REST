'use strict'

const express = require('express')
const api = express.Router()


const cardControllers = require('../controllers/cardController.js')


//Implementar metodos imagenes

api.get('/cards', cardControllers.card_get_all)

//POST
api.post('/card', cardControllers.card_insert_one)
api.delete('/card/:cardId', cardControllers.card_delete_one)

api.patch('/card/:cardId', cardControllers.card_patch_one)

const images = require("../controllers/uploadImages"),
	  bodyParser = require("body-parser")

api.post('/uploadImage', images.uploadImage)

module.exports = api



