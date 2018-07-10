//paquete de mongoose
'use strict'

const mongoose = require('mongoose');

//creacion del Schema de productos
const cardSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: {type: String, required: true},
  image: {type: String, required: true},
  description: {type: String, required: true},
  game: {type: String, enum: ['Yu-Gi-Oh!', 'Magic', 'Pokemon']},
  type: {type: String, enum: ['Monster', 'Spell', 'Gadget']},
 quality: {type: String, enum: ['Excelent', 'Acceptable', 'Deteriorated']}
});

//esto es para exportar el Schema como un modelo. Como un modelo de objeto para ser construido
module.exports = mongoose.model('Card', cardSchema);
