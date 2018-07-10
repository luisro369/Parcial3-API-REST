//paquete mongoose
const mongoose = require('mongoose');
//importando el modelo de bebidas
const Card = require('../models/cardModel');

//GET all card
exports.card_get_all = (req, res, next) => {
  Card.find()
  .select('_id title image description _id_album type quality')
  .exec()
  .then(docs => {
    const response = {
      pollos: docs.map(doc =>{
        return {
          _id: doc._id,
          title: doc.title,
          image: doc.image,
          description: doc.description,
          _id_album: doc._id_album,
          type: doc.type,
          quality: doc.quality
        }
      })
    }
    if (docs.length > 0){
      res.status(200).json(response);//retornamos el response de arriba
    } else { //por si no hay cartas
      res.status(404).json({
        message: "Not card found"
      });
    }
  })
  .catch(err => {
    res.status(500).json({
      error: err
    });
  });
}

//POST a drink
exports.card_insert_one = (req, res, next) => {
  //creando una instanca del modelo de producto. Como un constructor de Java. Se crea a partir de los datos que se envian en la req de POST
  const card = new Card({
    _id: new mongoose.Types.ObjectId(), //esto nos creara un Id automaticamente. Por el paquete mongoose
    title: req.body.title,
    image: req.file.path
    description: req.body.description,
    _id_album: req.body._id_album,
    type: req.body.type,
    quality: req.body.quality
  });

  card.save(function(err){
    if(err) return res.status(500).json({error: err})      
  })

  

}

//DELETE a card
exports.card_delete_one = (req, res, next) => {
  const id = req.params.cardId   //revisar el productId
  Card.findByIdAndRemove(id)
  .exec()
  .then(result => {
    res.status(200).json({
      message: 'The card was successfully deleted'
    });
  })
  .catch(err => {
    res.status(500).json({
      error: err
    });
  });
}

//PATCH a card
exports.card_patch_one = (req, res, next) => {
  const id = req.params.cardId;  //revisar el productId
  const updateOperations = {};
  for (const ops of req.body){
    updateOperations[ops.propName] = ops.value;
  }
  Card.update({_id: id}, {$set: updateOperations})
  .exec()
  .then(result =>{
    res.status(200).json({
      message: 'The card was updated successfully'
    });
  })
  .catch(err => {
    res.status(500).json({
      error: err
    });
  });
}
