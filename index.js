require("dotenv").config()

const express = require("express"),
    app = express(),
    PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/", require("./ROUTER/categoriesRouter"))
app.use("/products/:cat/:id",require ("./ROUTER/itemsRouter"))


app.listen(PORT || 3009, () => console.log((`server is runing on port:${PORT}`)))
