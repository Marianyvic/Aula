let xBolinha = 100;
let yBolinha = 200;
let diametro = 22
let raio = diametro/ 2;

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let xraquete = 5;
let yraquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;
let colidiu = false;
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete();
  movimentaMinhaRaquete();
  colisaoMinhaRaqueteBiblioteca();
  
  }

   function mostraBolinha(){

   circle(xBolinha, yBolinha, diametro);
   
  }

  function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
    
  }
  
  function verificaColisaoBordal(){
 if (xBolinha > width || xBolinha < 0) {
   velocidadeXBolinha *= -1;
   }
    
 if (yBolinha > height || yBolinha < 0) {
         velocidadeYBolinha *= -1;
   }
  
}

  function mostraRaquete(x,y) {
    