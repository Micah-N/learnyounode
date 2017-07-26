var fs = require('fs')
var filepath = process.argv[2]
var file = fs.readFileSync(filepath)
var contents = file.toString()
console.log(contents.split('\n').length - 1)