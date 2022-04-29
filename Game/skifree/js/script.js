(function () {

  const FPS = 50;
  const TAMX = 300;
  const TAMY = 400;
  const PROB_ARVORE = 4;

  let montanha;
  let skier;
  let velo;

  const obstaculos = [];
  
  function init() {
    montanha = new Montanha();
    skier = new Skier();
    velo = setInterval(run, 1000/FPS);
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') skier.mudarDirecao(-1)
    else if (e.key === 'ArrowRight') skier.mudarDirecao(+1);
    if(e.key === 'f'){
      clearInterval(velo);
      velo = setInterval(run, 3);
    }else{
      clearInterval(velo);
      velo = setInterval(run, 1000/FPS);
    }
  })

  class Montanha {
    constructor() {
      this.element = document.getElementById('montanha');
      this.element.style.width = `${TAMX}px`;
      this.element.style.height = `${TAMY}px`;
    }
  }

  class Skier {
    constructor() {
      this.element = document.getElementById('skier');
      this.direcoes = ['para-esquerda', 'para-frente', 'para-direita'];
      this.direcao = 1;
      this.element.className = this.direcoes[this.direcao];
      this.element.style.top = '20px';
      this.element.style.left = parseInt(TAMX/2)-8 + 'px';
      this.vida = 3;
      this.distancia = 0;

      this.posEsquerda;
      this.posDireita;
    }
    mudarDirecao(giro) {
      if (this.direcao + giro >= 0 && this.direcao + giro <= 2) {
        this.direcao += giro;
        this.element.className = this.direcoes[this.direcao];
      }
    }
    andar() {
      if (this.direcao === 0){
        this.element.style.left = parseInt(this.element.style.left)-1 + 'px';
        this.posEsquerda = parseInt(this.element.style.left);
      }else if (this.direcao === 2){
        this.element.style.left = parseInt(this.element.style.left)+1 + 'px';
        this.posDireita = parseInt(this.element.style.left);
      }
    }
    borda(){
      if (this.posEsquerda <= 0 && this.direcao === 0) {
        this.direcao = 1;
        this.element.className = this.direcoes[this.direcao];
      }
      if (this.posDireita >= 285 && this.direcao === 2) {
        this.direcao = 1;
        this.element.className = this.direcoes[this.direcao];
      }
    }
    posicaoSkier(){
      let skier = document.getElementById('skier');
      let posSkier = skier.getBoundingClientRect();

      return {
        posX: parseInt(this.element.style.left),
        posY:  parseInt(this.element.style.top),
        altura:  parseInt(posSkier.height),
        largura:  parseInt(posSkier.width)
      }
    }
}

  class Obstaculo {
    constructor() {
      this.element = document.createElement('div');
      montanha.element.appendChild(this.element);
      this.obstaculo = Math.floor(Math.random() * 7);
      this.obstaculos =['cogumelo','arvore','arbusto','rocha','toco','arvoreG','arvoreC'];
      this.element.className = this.obstaculos[this.obstaculo];
      this.element.style.top = `${TAMY}px`;
      this.element.style.left = Math.floor(Math.random() * TAMX) + 'px';
    }
    posicaoObs(){
      return {
        posX: parseInt(this.element.style.left),
        posY: parseInt(this.element.style.top),
        altura:  parseInt(this.element.getBoundingClientRect().height),
        largura: parseInt(this.element.getBoundingClientRect().width)
      }
    }

    colisao(obstaculo,skier){
      const obstaculos = this.posicaoObs();
      const esquiador = skier.posicaoSkier();

      let posLarguraEsquiador = esquiador.posX + esquiador.largura;
      let posLarguraObs = obstaculos.posX + obstaculos.largura;

      let posAlturaEsquiador = esquiador.posY + esquiador.altura;
      let posAlturaObs = obstaculos.posY + obstaculos.altura;

      if(obstaculos.posX < posLarguraEsquiador && posLarguraObs > esquiador.posX &&
        obstaculos.posY < posAlturaEsquiador && posAlturaObs > esquiador.posY){
          if(!obstaculo.element.classList.contains('batido')){
            obstaculo.element.classList.toggle('batido');
            if(obstaculo.element.classList.contains('cogumelo')){
              cogumelo(skier);
              console.log("cogumelo")
              var pegouCogumelo = obstaculo.element.parentNode;
              if(pegouCogumelo){
                pegouCogumelo.removeChild(obstaculo.element);
              }
            }else{
              morreu(skier);
            } 
          }
      }
    }
  }
  function distanciaPercorrida(skier) {
    let cont = document.getElementById('distancia');
    var distancia = parseInt(cont.textContent);

    if (skier.vida > 0) {
      distancia = distancia + 1;
      cont.textContent = distancia;
      skier.distancia = distancia;
    }
  }
  function morreu(skier){
    skier.vida--;
    if(!(skier.vida === 0)){
      var vidaAtt = skier.vida;
      vida.textContent = vidaAtt; 
      skier.element.className = 'para-baixo';
    }else if(skier.vida == 0){
      var vidaAtt = skier.vida;
      vida.textContent = vidaAtt;
      clearInterval(velo);
      enviaDistancia(skier.distancia);
      window.location="/jogo/ranking"
    }
    
  }
  function cogumelo(skier){
    skier.vida++;
    var vidaAtt = skier.vida;
    vida.textContent = vidaAtt; 
  }
  function run() {
    const random = Math.random() * 100;
    if (random <= PROB_ARVORE) {
      const obstaculo = new Obstaculo();
      obstaculos.push(obstaculo);      
    }
    obstaculos.forEach(a => {
      a.element.style.top = parseInt(a.element.style.top)-1 + 'px';
      a.colisao(a,skier);
    })
    skier.andar();
    skier.borda();
    distanciaPercorrida(skier);
  }

  init();

})()