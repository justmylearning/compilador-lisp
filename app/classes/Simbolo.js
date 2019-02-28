module.exports = class Simbolo{
    indice;
    imagem;
    tipo;

    constructor(indice, imagem, tipo = null){
        this.indice = (indice) ? indice : -1;
        this.imagem = imagem;
        this.tipo = tipo;
    }
}