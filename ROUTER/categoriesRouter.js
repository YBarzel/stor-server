const express = require("express"),
    app = express.Router(),
    BL = require("../BL/categoriesBl")

app.get("/", (req, res) => {
    console.log("1");
    try {
        const r = BL.read()
        console.log("2");
        res.send(r)
    } catch (error) {
        res.status(400).send(error.message || error)
    }
})


// app.get("/", async (req, res) => {
//     try {
//         res.send(await BL.read(req.query.id))
//     } catch (error) {
//         res.status(400).send(error.message || error)
//     }
// })

module.exports = app