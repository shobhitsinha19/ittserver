var request = require('request');
var request = require("request");

request({
  uri: "http://localhost:3000/signup",
  method: "POST",
  form: {
    name: "Devanshi",
    regno: "140911372"
  }
}, function(error, response, body) {
  console.log(body);
});
