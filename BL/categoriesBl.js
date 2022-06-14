//const { Module } = require("module")
const DL = require("../DL/categories")

function read() {
    const list = DL.read()
    return list
}
console.log(read());
module.exports = { read }