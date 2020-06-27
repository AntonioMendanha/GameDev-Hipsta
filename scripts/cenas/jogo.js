class Jogo {
    constructor(){
        this.indice = 0;  
        this.mapa = fita.mapa; /*Carrega o arquivo JSON*/
    }

    setup(){
        cenario = new Cenario(imagemCenario, 2);
        pontuacao = new Pontuacao();
        vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);
        
        /*matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade, delay*/
        personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
        const inimigo = new Inimigo (matrizInimigo, imagemInimigo, width -50, 30, 52, 52, 104, 104, 10);
        const inimigoVoador = new Inimigo (matrizInimigoVoador, imagemInimigoVoador, width -50, 200, 100, 75, 200, 150, 10);
        const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width * 2, 0, 200, 200, 400, 400, 15);
    
        inimigos.push(inimigo);
        inimigos.push(inimigoGrande);
        inimigos.push(inimigoVoador);

    }

    keyPressed(key){
        if(key === 'ArrowUp'){
            personagem.pula();
            somDoPulo.play(); 
        }
    }

    draw(){
        cenario.exibe();
        cenario.move();
        
        vida.draw();
        pontuacao.exibe();
        pontuacao.adicionarPonto();

        personagem.exibe();
        personagem.aplicaGravidade();

        const linhaAtual = this.mapa[this.indice];
        const inimigo = inimigos[linhaAtual.inimigo];
        const inimigoVisivel = inimigo.x < - inimigo.largura; /*Verificação se o inimigo está visivel na tela (true or false)*/
        
        inimigo.velocidade = linhaAtual.velocidade;

        inimigo.exibe();
        inimigo.move();
        
        if (inimigoVisivel) {
            this.indice ++; 
            inimigo.aparece();
            if(this.indice > this.mapa.length - 1) {
                this.indice = 0;
            }
        }
        
        if (personagem.estaColidindo(inimigo)){
            // console.log('hit')
            vida.perdeVida();
            personagem.tornarInvencivel();/*Invencibilidade temporaria - frames de personagens colidindo */
            if(vida.vidas == 0){
                image(imagemGameOver, width / 2 -200, height / 3);
                noLoop(); /*Para o jogo*/
                somDoJogo.stop(); /*Para a música de fundo */
            }
        }
    }
}