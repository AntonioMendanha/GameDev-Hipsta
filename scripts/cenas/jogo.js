class Jogo {
    constructor(){
        this.inimigoAtual = 0;  
    }

    setup(){
        cenario = new Cenario(imagemCenario, 2);
        pontuacao = new Pontuacao();
        
        /*matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade, delay*/
        personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
        const inimigo = new Inimigo (matrizInimigo, imagemInimigo, width -50, 30, 52, 52, 104, 104, 10, 100);
        const inimigoVoador = new Inimigo (matrizInimigoVoador, imagemInimigoVoador, width -50, 200, 100, 75, 200, 150, 10, 100);
        const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width * 2, 0, 200, 200, 400, 400, 15, 100);
    
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
        
        pontuacao.exibe();
        pontuacao.adicionarPonto();

        personagem.exibe();
        personagem.aplicaGravidade();

        const inimigo = inimigos[this.inimigoAtual];
        const inimigoVisivel = inimigo.x < - inimigo.largura; /*Verificação se o inimigo está visivel na tela (true or false)*/

        inimigo.exibe();
        inimigo.move();
        
        if(inimigoVisivel) {
            this.inimigoAtual ++; /*Mostrar próximo inimigo*/
            //console.log(inimigoAtual, 'Mostrar proximo inimigo')
            if(this.inimigoAtual >= inimigos.length) {
                this.inimigoAtual = 0
            }
            inimigo.velocidade = parseInt(random(10,20));
        }
        
        if (personagem.estaColidindo(inimigo)){
            image(imagemGameOver, width / 2 -200, height / 3);
            // console.log('hit')
            noLoop(); /*Para o jogo*/
            somDoJogo.stop(); /*Para a música de fundo */
        }
    }
}