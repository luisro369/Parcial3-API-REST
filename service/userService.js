'use strict'

const jwt = require('jwt-simple')
const moment = require('moment')
const confif = require('../config')

function createToken(user){
	
	const payload = {
		sub: user._id,
		iat: moment().unix(),									//creacion de token
		exp: moment().add(14, 'days').unix()				 	//vencimiento de token 
	}

	return jwt.encode(payload, confif.SECRET_TOKEN)
}

function decodeToken(token){
	const decoded = new Promise((resolve, reject) => {
		try{
			const payload = jwt.decode(token, confif.SECRET_TOKEN)

		if(payload.exp<=moment.unix()){
			reject({
				status: 401,
				message: "Expired token"
			})
		}

		resolve(payload.sub)

		}catch(err){
			reject({
				status: 500,
				message: "Invalid token"
			})
		}
	})

	return decoded
}


module.exports = {createToken, decodeToken}