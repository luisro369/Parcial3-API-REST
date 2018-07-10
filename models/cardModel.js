//paquete de mongoose
'use strict'

const mongoose = require('mongoose');

//creacion del Schema de productos
const cardSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: {type: String, required: true},
  image: {type: String, required: true},
  description: {type: String, required: true},
  _id_album: {type: String, required: true},
  type: {type: String, required: true},
  quality: {type: String, required: true}
});

//esto es para exportar el Schema como un modelo. Como un modelo de objeto para ser construido
module.exports = mongoose.model('Card', cardSchema);
