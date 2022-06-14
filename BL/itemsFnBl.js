const DL = require("../DL/itemsDb")


function read(cat) {
    const list = DL.read()
    const items = list.filter(i => i.category == cat)
    return items
}
console.log(read());


module.exports = {read}
