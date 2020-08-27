module.exports = function(app){

    app.get("/", function(req, res){
        res.sendFile("C:/Users/Rafael/Documents/Projetos/Full-Stack/Paginas/views/index.html")
    })

}