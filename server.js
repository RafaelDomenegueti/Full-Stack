const express = require("express")
const consign = require("consign")
const app = express()
const path = require("path")

// Deixa ultilizar o css e js
app.use(express.static(path.join(__dirname, "/Paginas")))

//  Rotas
consign().include("Rotas").into(app)


app.listen(3000, "localhost", function(){
    console.log("Servidor On-line")
})