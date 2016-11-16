var express = require('express');
var router = express.Router();
var Profile = require('../models/profilemodel');
var mongoose = require('mongoose');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
//  var profiles = Profile.find();
  //res.send(profiles);
});


/* GET home page. */
router.get('/profile', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  var n = req.query.name; //extract query item 'name' ref: http://expressjs.com/en/api.html#req.query

  // standard query
  // Profile.find(function(err, docs)
   Profile.find().where("name",n).
          exec(function(err, docs)
{
    var profileChunks = [];
    for(var i = 0; i<docs.length; i++){         //to avoid sending data without complete extraction
      profileChunks.push(docs.slice(i,i+1));
    }
    res.send(profileChunks);
  });

});

router.post('/login', function(req, res) {
    var n = req.body.name;
    var r = req.body.regno;
        //regnumber = req.query.regno;
        Profile.find({"name":n,"regno":r}).exec(function(err, docs)
     {
         var profileChunks = [];
         for(var i = 0; i<docs.length; i++){         //to avoid sending data without complete extraction
           profileChunks.push(docs.slice(i,i+1));
         }
         if(profileChunks.length!=0)
          res.send("{ack:1}");
          else {
            res.send("{ack:0}");
          }
       });

});
router.post('/signup', function(req, res) {
    var Name = req.body.name,
        regnumber = req.body.regno;
        //to insert
        var profiles = [ new Profile({
          regno: regnumber,
          name: Name
        })
        ];

        var done =0;
        for(var i=0; i<profiles.length;i++){
          profiles[i].save(function(err,result){
            done++;
            if(done==profiles.length){
              exit();
            }
          });
        }

        function exit(){
        res.send("{\"ack\":1}");
        mongoose.disconnect();
        }

    // ...

});

module.exports = router;
