const fs = require("fs")

function read() {
   return require("./categories.json")   
}

console.log(read());

module.exports = { read }