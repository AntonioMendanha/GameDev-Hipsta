class Personagem extends Animacao{
    constructor( matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite ){
        super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)
        
        this.variacaoY = variacaoY;
        this.yInicial = height - this.altura - this.variacaoY;
        this.y = this.yInicial;
        this.velocidadeDoPulo = 0;
        this.gravidade = 6;
        this.alturaDoPulo = - 50
        this.pulos = 0
    }

    pula(){
        if(this.pulos < 2){
            this.velocidadeDoPulo = this.alturaDoPulo
            this.pulos ++
        }
    }

    aplicaGravidade(){
        this.y = this.y + this.velocidadeDoPulo
        this.velocidadeDoPulo = this.velocidadeDoPulo +this.gravidade
    
        if(this.y > this.yInicial){
            this.y = this.yInicial
            this.pulos = 0
        }
    
    }

    estaColidindo(inimigo) {
        const precisaoHitX =  25
        const precisaoHitY = 15
        const precisao =  0.6

       // Linhas abaixo pra testar a o Hit da colisão entre personagem e inimigo
       //  noFill()
       // rect(
       //     this.x + precisaoHitX,  this.y + precisaoHitY,   /*posição personagem */
       //     this.largura * precisao, this.altura * precisao, /* tamanho personagem */);
       // rect(
       //     inimigo.x + precisaoHitX, inimigo.y + precisaoHitY, /*posição inimigo*/
       //     inimigo.largura * precisao, inimigo.altura * precisao /* tamanho inimigo*/);

        const colisao  = collideRectRect(
            this.x + precisaoHitX,  this.y + precisaoHitY,   /*posição personagem */
            this.largura * precisao, this.altura * precisao, /* tamanho personagem */
            inimigo.x + precisaoHitX, inimigo.y + precisaoHitY, /*posição inimigo*/
            inimigo.largura * precisao, inimigo.altura * precisao /* tamanho inimigo*/
        );
        return colisao;
    }
}