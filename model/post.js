const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const movieschema = Schema(
{     name:{type:String},
      img:{type:String},
      summary:{type:String}
});

module.exports = mongoose.model('Moviecollection',movieschema);