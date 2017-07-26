var fs = require('fs')
var filepath = process.argv[2]
var file = fs.readFile(filepath, 'utf8', function(err, data) {
  console.log(data.toString().split('\n').length - 1)  
})