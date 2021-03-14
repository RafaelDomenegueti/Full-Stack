module.exports = function(app, dir, io, players){

    app.get("/", function(req, res){
        res.sendFile(dir+ "/paginas/views/login.html")
    })
    io.on('connection', function(socket){
        // Aciona quando o jogador cadastrar o nome
        socket.on('nomejogador', function(nick){

            // Adiciona variavel da posição dos jogadores
            players.push({"nome":nick, "x":0, "y":0})

            // Aciona quando o jogador apertar um botão
            socket.on("buttonpress", function(nickn, buttonpress){

                function a(name){ return name.nome == nickn}
                
                // Movimentação dos jogadores
                if (buttonpress == "a"){

                    if (players.find(a).x - 30 < 0){
                        return(0)
                    } else {
                        players.find(a).x = players.find(a).x - 30
                        console.log(players.find(a))
                    }
                }
                if (buttonpress == "d"){

                    if (players.find(a).x + 30 > 330){
                        return(0)
                    } else {
                        players.find(a).x = players.find(a).x + 30
                        console.log(players.find(a))
                    }
                }
                if (buttonpress == "w"){

                    if (players.find(a).y - 30 < 0){
                        return(0)
                    } else {
                        players.find(a).y = players.find(a).y - 30
                        console.log(players.find(a))
                    }
                }
                if (buttonpress == "s"){

                    if (players.find(a).y + 30 > 330){
                        return(0)
                    } else {
                        players.find(a).y = players.find(a).y + 30
                        console.log(players.find(a))
                    }
                }

                // envia a posição dos jogadores
                io.emit('posição players', players, players.find(a)); // Enviando a posião dos players

            });

            // Envia "players" quando algum jogador conectar
            io.emit("players novos", players)

       });

    });


}