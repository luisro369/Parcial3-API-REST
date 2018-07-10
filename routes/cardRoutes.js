"use strict"

const images = require("../controllers/uploadImages"),
	  express = require("express"),
	  router = express.Router(),
	  bodyParser = require("body-parser")

router.post('/uploadImage', images.uploadImage)

module.exports = router