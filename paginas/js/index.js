var player = document.getElementById("player")
var socket = io();
var mapa_jogo = document.getElementById("mapa_jogo")
var x = 0


// Nome do Jogador
    var nick = prompt("Qual seu nome? (Letras Minúsculas!)")

    while(nick == "" || nick == " " || nick == "    "){
        var nick = prompt("Qual seu nome? (Letras Minúsculas!)")
    }

    socket.emit("nomejogador", nick)


// Enviando Comandos

    addEventListener("keydown", function(a){

        socket.emit("buttonpress", nick, a.key);

    })


// Posição Players
socket.on('posição players', function(players, play){
    function a(name){ return name.nome == play.nome}
    console.log(players)
    console.log(play)
    
    // Adiciona todos os antigos jogadores
    let c = 0
    while (c < players.length && x == 0) {
        while (c < players.length){
            var div = document.createElement("div")
            div.style = "position: absolute; background-color: grey; width: 30px; height: 30px;"+"left: "+players[0].x+"px;"+"top: "+players[0].y+"px;"
            div.id = players[c].nome
            div.style.left = players[c].x+"px"
            div.style.top = players[c].y+"px"
            mapa_jogo.appendChild(div)
            c++
        }
        x++
    }

    // Movimenta os jogadores
    var idnome = document.getElementById(play.nome)
    idnome.style.top = players.find(a).y+"px"
    idnome.style.left = players.find(a).x+"px"

});