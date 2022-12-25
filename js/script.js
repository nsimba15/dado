'use strict';

let botao = document.querySelector('.btn');
let imagem = document.querySelector('.imagem');
let animar = document.querySelector('.girar');
let audio = document.querySelector('.audio');
let mostar = document.querySelector('.mostrar');
let span = document.querySelector('.span');

let contagem = 0;

botao.addEventListener('click', function(){

  animar.style.display = 'block';
  mostar.style.display = 'none';
  audio.play();

  botao.style.display = 'none';

  setTimeout(function(){

    contagem = countdown(1, 6);
    console.log(contagem);

    imagem.setAttribute('src', 'imagens/'+contagem+'.png');

    span.textContent = contagem;
    animar.style.display = 'none';
    mostar.style.display = 'block';
    botao.style.display = 'block';
  }, 1600);

})
function countdown(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*max - min + 1) + min;
}


