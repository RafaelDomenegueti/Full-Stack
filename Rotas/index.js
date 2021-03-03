module.exports = function(app, urlencodedParser){

    app.get("/", function(req, res){
        res.sendFile("C:/Users/Rafael/Documents/GitHub/Full-Stack/paginas/views/login.html")
    })
    app.post("/", urlencodedParser, function(req, res){
        var username = req.body.username
        var pass = req.body.password
    });

}