var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  fname: {type: String, required: true},
  lname: {type: String, required: true},
  email: {type: String, required: true},
  pass: {type: String, required: true}
});

module.exports = mongoose.model('profile',schema);
