
'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bcrypt = require('bcrypt-nodejs')

const UserSchema = new Schema({
	_id: mongoose.Schema.Types.ObjectId,
	username: {type: String, required: true, default: "John Doe"},
	password: {type: String, select: false},
	firstName: {type: String, required: true},
	email: {type: String, unique: true, lowercase: true},
	phone: {type: String, required: true},
	lastName: {type: String, required: true}
})

UserSchema.methods.generateHash = function(password){
	return bcrypt.hashSync(password, bcrypt.genSaltSync(9))
}

UserSchema.methods.validPassword = function(password){
	return bcrypt.compareSync(password, this.password)
}


module.exports = mongoose.model('User', UserSchema)