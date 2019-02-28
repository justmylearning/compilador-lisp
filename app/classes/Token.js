module.exports = class Token{
    imagem;
    classe;
    linha;
    coluna;
    indiceTabelaDeSimbolos;

    constructor(imagem, classe, linha, coluna, indiceTabelaDeSimbolos){
        this.imagem = (imagem) ? imagem : '';
        this.classe = classe;
        this.linha = linha;
        this.coluna = coluna;
        this.indiceTabelaDeSimbolos = indiceTabelaDeSimbolos;
    }
}