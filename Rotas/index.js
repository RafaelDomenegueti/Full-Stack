module.exports = function(app, urlencodedParser, fs){

    app.get("/", function(req, res){
        res.sendFile("C:/Users/Rafael/Documents/GitHub/Full-Stack/paginas/views/login.html")
    })
    app.post("/", urlencodedParser, function(req, res){

        var conteudo = JSON.stringify(req.body);
        fs.writeFile("C:/Users/Rafael/Documents/GitHub/Full-Stack/Info/"+req.body.ip+'.json', conteudo, 'utf8', function (err) {
            if (err) throw err;
        });
    
        res.send(req.body)
    });

}