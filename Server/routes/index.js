var express = require('express');
var router = express.Router();
var Profile = require('../models/profilemodel');
/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  var profiles = Profile.find();
  //res.send(profiles);
});

module.exports = router;
