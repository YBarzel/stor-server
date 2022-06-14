const express = require("express"),
    app = express.Router(),
    BL = require("../BL/itemsFnBl")

app.get("/", (req, res) => {
    console.log("1");
    try {
        const r = BL.read(req.params.cat)
        console.log(req.params.cat);
        res.send(r)
    } catch (error) {
        res.status(400).send(error.message || error)
    }
})

module.exports= app