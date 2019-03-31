//Base file name
const path = require('path')
console.log(path.basename(__filename))  //get base name

console.log(path.parse(__filename).root)   //create path obj and access the obj's root property