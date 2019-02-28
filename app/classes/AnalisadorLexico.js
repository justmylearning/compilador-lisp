const ClassificadorDeTokenClass = require('./ClassificadorDeToken');
const classificadorDeToken = new ClassificadorDeTokenClass();
const TokenClass = require('./Token');
const SimboloClass = require('./Simbolo');
const TabelaDeTokensClass = require('./TabelaDeTokens');
const tabelaDeSimbolosClass = require('./TabelaDeSimbolos');

module.exports = class AnalisadorLexico{

    cursor = {
        linha: 1,
        coluna: 1
    }

    constructor(codigoFonte){
        // this.codigoFonte = codigoFonte.replace('\n', '');
        this.codigoFonte = codigoFonte;
    }

    analisar(){
        console.log(this.codigoFonte);
        console.log('Separando Tokens...');
        this.separarTokens();
        console.log('Classificando Tokens...');
        this.classificarTokens();
        console.log(TabelaDeTokensClass.getTabela());
        console.log(tabelaDeSimbolosClass.getTabela());

    }

    separarTokens(){
        let tokenIsString = false;
        let token = new TokenClass();
        for(let i = 0; i < this.codigoFonte.length; i++){
            const caracter = this.codigoFonte.charAt(i);
            this.cursor.coluna++;

            if(caracter == '\n'){
                this.cursor.linha++;
                this.cursor.coluna = 1;
                continue;
            }
            
            //SEPARADOR DE TOKEN
            if(caracter == ' ' && !tokenIsString){
                if(token.imagem){
                    this.adicionarTokenNaLista(token);
                    token = new TokenClass();
                }
                continue;
            }

            //ABRE OU FECHA STRING
            if(caracter == '"'){
                tokenIsString = !tokenIsString;
                continue;
            }
            
            if(tokenIsString){
                token.imagem += caracter;
                continue;
            }
            
            if(caracter == ')' || caracter == '('){
                token.imagem = caracter;
                this.adicionarTokenNaLista(token);
                token = new TokenClass();
                continue;
            }
            token.imagem += caracter;
        }
    }

    adicionarTokenNaLista(token){
        token.coluna = this.cursor.coluna - ( token.imagem.length );
        token.linha = this.cursor.linha;

        TabelaDeTokensClass.adicionarToken(token);
    }

    classificarTokens(){
        TabelaDeTokensClass.getTabela().map((token) => {
            token.classe = classificadorDeToken.classificar(token);
            if(token.classe == classificadorDeToken.classesEnum.get('ID')){
                let simbolo = new SimboloClass(-1, token.imagem);
                simbolo = tabelaDeSimbolosClass.adicionarSimbolo(simbolo);
                token.indiceTabelaDeSimbolos = simbolo.indice;
            }
        });
    }

}