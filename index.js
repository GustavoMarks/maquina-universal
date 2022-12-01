const Interpretador = require('./Interpretador.js');

const nomeDoArquivoEntradas = 'entradas.txt';
const nomeDoArquivoProgramas = 'soma.l';

const itp = new Interpretador();
itp.Universal(nomeDoArquivoProgramas, nomeDoArquivoEntradas);