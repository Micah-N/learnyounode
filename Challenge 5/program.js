var lsmodule = require('./lsmodule');
var folder = process.argv[2];
var ext = process.argv[3];

lsmodule(folder, ext, function(err, files) {
  files.forEach((file)=>{
    console.log(file)
  })
})