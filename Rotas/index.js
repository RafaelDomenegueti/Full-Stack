module.exports = function(app){

    app.get("/", function(req, res){
        res.sendFile("C:/Users/Rafael/Documents/GitHub/Full-Stack/paginas/views/index.html")
    })

}