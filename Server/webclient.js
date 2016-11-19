var request = require('request');
var request = require("request");

request({
  uri: "http://localhost:3000/login",
  method: "POST",
  form: {
    email: "shobhit@ittpro.com",
    pass: "pass123"
  }
}, function(error, response, body) {
  console.log(body);
});
