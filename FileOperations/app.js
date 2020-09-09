var file = require('fs');
file.writeFileSync("./demo.txt","mahitha");
var data = file.readFileSync("./demo.txt",{encoding:'utf-8'})
console.log(data);