var fs = require('fs')
var path = require('path')
var folder = process.argv[2]
var ext = '.' + process.argv[3];

fs.readdir(folder, function(err, files) {
  files.forEach((testfile) => {
    if (path.extname(testfile) == ext) {
      console.log(testfile)
    }  
  })
})