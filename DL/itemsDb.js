const fs = require("fs")

function read() {
    return require("./items.json")
}

module.exports = { read }