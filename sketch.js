let imagemCenario;
let imagemPersonagem;
let cenario;
let somDoJogo;
let persongem;

function preload() {
    imagemCenario = loadImage('/imagens/cenario/floresta.png')
    imagemPersonagem = loadImage('/imagens/personagem/correndo.png')
    somDoJogo = loadSound('/sons/trilha_jogo.mp3')
}

function setup() {
    createCanvas(1000, 1000);
    cenario = new Cenario(imagemCenario, 2);
    personagem = new Personagem(imagemPersonagem);
    somDoJogo.loop();
}

function draw() {
    cenario.exibe();
    cenario.move();

    personagem.exibe();
}
