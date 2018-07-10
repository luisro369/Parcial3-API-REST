'use strict'

const multer = require("multer"),
	  path = require("path"),
	  fs = require("fs")

const UPLOAD_PATH = 'uploads',
	  storage = multer.diskStorage({
	  	destination: function(req, file, cb){
	  		cb(null, 'uploads/')
	  	},
	  	filename: function(req, file, cb){
	  		cb(null, new Date().toISOString().replace(/:/g, '-')+ file.originalname.split(" ").join(" "))
	  	}
	  }),
	  upload = multer({ dest: storage })



function Uploader () {}

Uploader.uploadImage = function (request, response, next) {
	debugger
	upload.single('file', Uploader.uploader)
}

Uploader.uploader = function (request, response, next) {
	debugger
	let fileName = request.file.originalname
	let tempPath = request.file.path
	let targetPath = path.join(__dirname, `..`, `./uploads/${ fileName }`)

	if (path.extname(fileName).toLowerCase() === '.png' || path.extname(fileName).toLowerCase() === '.jpg' || path.extname(fileName).toLowerCase() === '.jpeg') {
		fs.rename(tempPath, targetPath, error => {
			if (error) {
				console.error(`[Error]: ${ error }`)
				return
			}

			response
				.status(200)
				.contentType('text/plain')
				.end('File uploaded')
		})
	} else {
		fs.unlink(tempPath, error => {
	        if (error) { 
	        	console.error(`[Error]: ${ error }`)
	        	return
	        }

	        response
	          .status(403)
	          .contentType("text/plain")
	          .end("Invalid image format!")
     	})
	}
}

module.exports = Uploader