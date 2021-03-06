
function preload() {
    imagemCenario = loadImage('/imagens/cenario/floresta.png');
    imagemPersonagem = loadImage('/imagens/personagem/correndo.png');
    
    imagemInimigo = loadImage('/imagens/inimigos/gotinha.png');
    imagemInimigoGrande = loadImage('/imagens/inimigos/troll.png');
    imagemInimigoVoador = loadImage('/imagens/inimigos/gotinha-voadora.png');

    imagemVida = loadImage('/imagens/assets/coracao.png');
    
    imagemGameOver = loadImage('/imagens/assets/game-over.png');
    imagemTelaInicial = loadImage('/imagens/assets/telaInicial.png');
    fonteTelaInicial = loadFont('/imagens/assets/fonteTelaInicial.otf');

    fita = loadJSON('/fita/fita.json');
    

    somDoPulo = loadSound('/sons/somPulo.mp3');
    somDoJogo = loadSound('/sons/trilha_jogo.mp3');
}