var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  regno: {type: Number, required: true},
  name: {type: String, required: true}
});

module.exports = mongoose.model('profile',schema);
