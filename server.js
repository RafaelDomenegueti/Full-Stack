// Require
const express = require("express")
const consign = require("consign")
const app = express()
const path = require("path")
const bodyparser = require("body-parser")
const fs = require("fs")


// Config
    // Deixa ultilizar o css e js
    app.use(express.static(path.join(__dirname, "./paginas")))

    // Receber informações
    var urlencodedParser = bodyparser.urlencoded({ extended: false })
    app.use(bodyparser.urlencoded({ extended: false }))


//  Rotas
consign().include("Rotas").into(app, urlencodedParser, fs)


// Porta
app.listen(8221, "192.168.15.7", function(){
    console.log("Servidor On-line")
    console.log("On-line: http://192.168.15.7:8221")
})