
var altura = 0
var largura = 0
var vida = 1
var tempo = 20

var criaMosquitoTempo = 1500;

function ajustaDisplay(){
 
    altura = window.innerHeight
    largura = window.innerWidth
}

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal'){
    criaMosquitoTempo = 1500;
}else if(nivel === 'dificil'){
    criaMosquitoTempo = 1000;
}else{
    criaMosquitoTempo = 750;
}


ajustaDisplay()

var cronometro = setInterval(function(){
    tempo-=1;

    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    }else{
        document.getElementById('cronometro').innerHTML = tempo;
    }
    
}, 1000)

function posicaoRandomica(){

    // Remover o mosquito anteior, caso exista

    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove();

        if(vida > 3){
            window.location.href = 'fim_de_jogo.html';
        }else{
        document.getElementById('v' + vida).src ="imagens/coracao_vazio.png"

        vida++
    }
    
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90;
    var posicaoY = Math.floor(Math.random() * altura) - 90;

    posicaoY = posicaoY < 0 ? 0 : posicaoY;
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    

    console.log(posicaoX, posicaoY);

    // Criar o elemento HTML usando o DOM

    var mosquito = document.createElement('img');

    mosquito.src = 'imagens/mosca.png';
    mosquito.className = tamanhoAleatorio() + ladoAleatorio();
    mosquito.style.left = posicaoX + "px";
    mosquito.style.top = posicaoY + "px";
    mosquito.style.position = "absolute"
    mosquito.id = "mosquito";

    mosquito.onclick = function(){
        this.remove()
    }

    document.body.appendChild(mosquito);

    
}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3);

    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'

    }
}

function ladoAleatorio(){
    
    var lado = Math.floor(Math.random() * 2);

    switch(lado){
        case 0:
            return ' ladoA'
        case 1:
            return ' ladoB'
    }
}
