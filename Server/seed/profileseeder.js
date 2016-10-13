var profile = require('../models/profilemodel');
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/ittdb'); //db will be created automatically

var profiles = [ new profile({
  regno: 140911390,
  name: 'Shobhit Sinha'
}),
new profile({
  regno: 140911400,
  name: 'Divyansh Deora'
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
  mongoose.disconnect();

}
