const botaoPlayPause = document.getElementById("play-pause");
const botaoAvancar = document.getElementById("proximo");
const botaoVoltar = document.getElementById("anterior");
const nomeSessao = document.getElementById("sessao");
const audioCapitulo = document.getElementById("audio-capitulo");
const numerosCapitulos = 10;
//Tudo começa pelo capítulo 1 e as faixas de áudio quando não estão tocando em 0(pausadas)
let taTocando = 0;
let capituloAtual = 1;

function tocarFaixa(){
    audioCapitulo.play();
    botaoPlayPause.classList.remove("bi-play-circle-fill");
    botaoPlayPause.classList.add("bi-pause-circle-fill");

}

function pausarFaixa(){
    audioCapitulo.pause();
    botaoPlayPause.classList.add("bi-play-circle-fill");
    botaoPlayPause.classList.remove("bi-pause-circle-fill");

}

function tocarOuPausar(){
    if ( taTocando === 0) {
        tocarFaixa();
        taTocando = 1;
    } else {
        pausarFaixa();
        taTocando = 0;
    }
}

function trocarNomeFaixa(){
    nomeSessao.innerText = "Sessão " + capituloAtual;
}

function proximaFaixa(){
    if (capituloAtual === numerosCapitulos){
        capituloAtual = 1;
    } else {
        capituloAtual++;
    }

    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual +".mp3";
    tocarFaixa();
    taTocando = 1;
    trocarNomeFaixa();
}

function voltarFaixa(){
    if (capituloAtual === 1){
        capituloAtual = numerosCapitulos;
    } else {
        capituloAtual--;
    }

    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual +".mp3";
    tocarFaixa();
    taTocando = 1;
    trocarNomeFaixa();
}

//Quando clicado a faixa será tocada ou pausada
botaoPlayPause.addEventListener("click", tocarOuPausar);
botaoAvancar.addEventListener("click", proximaFaixa);
botaoVoltar.addEventListener("click", voltarFaixa);