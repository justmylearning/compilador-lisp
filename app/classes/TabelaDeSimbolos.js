module.exports = class TabelaDeSimbolos{
    static simbolos = [];
    static indice = 0;

    static adicionarSimbolo(simbolo){
        let simboloExistente = false;
        TabelaDeSimbolos.simbolos.map((simboloItem) => {
            if(simboloItem.imagem == simbolo.imagem){
                simboloExistente = true;
                simbolo.indice = simboloItem.indice;
            }
        });
        if(!simboloExistente){
            simbolo.indice = TabelaDeSimbolos.indice;
            TabelaDeSimbolos.simbolos.push(simbolo);
            TabelaDeSimbolos.indice++;
        }

        return simbolo;
    }

    static getTabela(){
        return TabelaDeSimbolos.simbolos;
    }
}