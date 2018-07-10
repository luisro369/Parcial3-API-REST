'use strict'

const mongoose = require('mongoose')
const User = require('../models/userModel.js')
const service = require('../service/userService.js')

const bcrypt = require('bcrypt-nodejs')

function signUp(req, res){

	let user = new User();
	user._id = new mongoose.Types.ObjectId(),
	user.username = req.body.username,
	user.password = user.generateHash(req.body.password),
	user.firstName = req.body.firstName,
	user.lastName = req.body.lastName,
	user.email = req.body.email,
	user.phone = req.body.phone,
	
	user.save((err) => {
		if(err){
			return res.status(500).send({message: "Error al crear usuario"})
		}else{
			return res.status(201).send({token: service.createToken(user)})
		}
	});

}

function signIn(req, res){

	User.find({username: req.body.username}, (err, user) =>{
		if(err) return res.status(500).send({message: "Error"})
		if(!user) return res.status(404).send({message: "Usuario no encontrado"})
		
		//if(bcrypt.compareSync(req.body.password, user.password)) {
		return res.status(200).send({token: service.createToken(user)})
		//}else{
		//	return res.status(404).send({message: "Datos invalidos"})
		//}
	})
}


function getUser(req, res){
	User.find().exec().then(doc => {console.log(doc); res.status(200).json(doc)}).catch(err =>{console.log(err); res.status(500).json({error: err})})
}


module.exports = {
	signIn,
	signUp,
	getUser
}