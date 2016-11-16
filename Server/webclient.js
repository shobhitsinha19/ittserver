var request = require('request');
var request = require("request");

request({
  uri: "http://localhost:3000/login",
  method: "POST",
  form: {
    name: "Shobhit",
    regno: "140911372"
  }
}, function(error, response, body) {
  console.log(body);
});
