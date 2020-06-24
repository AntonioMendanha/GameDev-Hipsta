class Personagem extends Animacao{
    constructor( matriz, imagem, x, largura, altura, larguraSprite, alturaSprite ){
        super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite)
        
        this.yInicial = height - this.altura
        this.y = this.yInicial
        this.velocidadeDoPulo = 0
        this.gravidade = 3

    }

    pula(){
        this.velocidadeDoPulo = - 30
    }

    aplicaGravidade(){
        this.y = this.y + this.velocidadeDoPulo
        this.velocidadeDoPulo = this.velocidadeDoPulo +this.gravidade
    
        if(this.y > this.yInicial){
            this.y = this.yInicial
        }
    
    }

    estaColidindo(inimigo) {
        const precisao = .7
        const colisao  = collideRectRect(
            this.x, this.y, /*posição personagem */
            this.largura * precisao, this.altura * precisao, /* tamanho personagem */
            inimigo.x, inimigo.y,/*posição inimigo*/
            inimigo.largura * precisao, inimigo.altura * precisao /* tamanho inimigo*/
        );
        return colisao;
    }
}