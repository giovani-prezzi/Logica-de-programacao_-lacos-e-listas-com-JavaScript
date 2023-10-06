//Ator
let xAtor = 85;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;
let isMovLivre = true;

function mostraAtor(){
  image(imagemCarneiro, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (isMovLivre){
    if (keyIsDown(UP_ARROW)){
      yAtor -= 3;
    }
    if (keyIsDown(DOWN_ARROW)){
      if (yAtor < 366){
        yAtor += 3;
      }
    }
  }
}

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
    if (colisao){
      voltaAtorParaPosicaoInicial();
      verificaPontosMaiorQueZero();
      somDaColisao.play();
    }
  }
}

function voltaAtorParaPosicaoInicial(){
  yAtor = 366;
    isMovLivre = false;
  setTimeout(() => {isMovLivre = true;}, 750);
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60));
  text(meusPontos, width / 5, 27);
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    somDoPonto.play();
    voltaAtorParaPosicaoInicial();
  }
}

function verificaPontosMaiorQueZero(){
  if (meusPontos > 0){
    meusPontos -= 1;
  }
}