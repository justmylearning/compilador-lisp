module.exports = class TabelaDeTokens{
    static tokens = [];

    static adicionarToken(token){
        TabelaDeTokens.tokens.push(token);
    }

    static getTabela(){
        return TabelaDeTokens.tokens;
    }
}