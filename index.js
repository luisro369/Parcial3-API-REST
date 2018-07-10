
'use strict'
const app = require('./app')
const config = require('./config')
const mongoose = require('mongoose')


app.listen(config.port, () => {
		console.log(`http://localhost:${config.port}`)
	})