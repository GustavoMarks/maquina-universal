const Interpretador = require('./Interpretador.js');

const nomeDoArquivoEntradas = 'entradas.txt';
const nomeDoArquivoProgramas = 'fatorial.l';

const itp = new Interpretador();
itp.Universal(nomeDoArquivoProgramas, nomeDoArquivoEntradas);