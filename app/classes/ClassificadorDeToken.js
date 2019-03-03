module.exports = class ClassificadorDeToken{
    regexPrefixo = '<REGEX>';
    classesEnum = new Enum(['PR', 'DE', 'ID', 'OP', 'CLI', 'CLS', 'CLR']);
    tokensConhecidos = {
        //PR
        'fun': this.classesEnum.get('PR'),
        'enquanto': this.classesEnum.get('PR'),
        'se': this.classesEnum.get('PR'),
        'senao': this.classesEnum.get('PR'),
        'retorna': this.classesEnum.get('PR'),
        'int': this.classesEnum.get('PR'),
        'real': this.classesEnum.get('PR'),
        'texto': this.classesEnum.get('PR'),
        'logico': this.classesEnum.get('PR'),
        'nada': this.classesEnum.get('PR'),
        //DE
        '(': this.classesEnum.get('DE'),
        ')': this.classesEnum.get('DE'),
        ':': this.classesEnum.get('DE'),
        '[': this.classesEnum.get('DE'),
        ']': this.classesEnum.get('DE'),
        //OP
        '=': this.classesEnum.get('OP'),
        '+': this.classesEnum.get('OP'),
        '-': this.classesEnum.get('OP'),
        '*': this.classesEnum.get('OP'),
        '/': this.classesEnum.get('OP'),
        '&&': this.classesEnum.get('OP'),
        '||': this.classesEnum.get('OP'),
        '.': this.classesEnum.get('OP'),
        '==': this.classesEnum.get('OP'),
        '!=': this.classesEnum.get('OP'),
        '>': this.classesEnum.get('OP'),
        '<': this.classesEnum.get('OP'),
        '>=': this.classesEnum.get('OP'),
        '<=': this.classesEnum.get('OP'),
        //CLI
        '<REGEX>^\\d(\\d)*$': this.classesEnum.get('CLI'),
        //CLR
        '<REGEX>^\\d(\\d)*\\.\\d*$': this.classesEnum.get('CLR'),
        //ID
        '<REGEX>^[a-zA-Z]([a-zA-Z]+\\d)*': this.classesEnum.get('ID'),
        //CLL
        '<REGEX>(V+F)': this.classesEnum.get('CLL'),
        //CLS
        '<REGEX>.*': this.classesEnum.get('CLS')
    }

    classificar(token){
        let tokenClasse = null;
        Object.keys(this.tokensConhecidos).map((tokenConhecido) => {
            if(tokenClasse)
                return;

            if(tokenConhecido.includes(this.regexPrefixo)){
                const regex = tokenConhecido.replace(this.regexPrefixo, '');
                if(token.imagem.match(regex)){
                    tokenClasse = this.tokensConhecidos[tokenConhecido];
                    return;
                }
            }

            if(token.imagem == tokenConhecido)
                tokenClasse = this.tokensConhecidos[tokenConhecido];
        });

        if(!tokenClasse)
            throw 'Classe de token não reconhecida: ' + token.imagem;

        return tokenClasse;
    }
}