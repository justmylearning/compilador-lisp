require('enum').register();
const AnalisadorLexicoClass = require('./app/classes/AnalisadorLexico');
const fs = require('fs');

const codigoFonte = fs.readFileSync('./codigo_fonte.txt', 'utf8');

const analisadorLexico = new AnalisadorLexicoClass(codigoFonte);
analisadorLexico.analisar();