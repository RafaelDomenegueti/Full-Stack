const express = require("express")
const consign = require("consign")
const app = express()
const path = require("path")

// Deixa ultilizar o css e js
app.use(express.static(path.join(__dirname, "./Paginas")))

//  Rotas
consign().include("Rotas").into(app)


app.listen(8221, "192.168.15.7", function(){
    console.log("Servidor On-line")
    console.log("On-line: 192.168.15.7:8221")
})