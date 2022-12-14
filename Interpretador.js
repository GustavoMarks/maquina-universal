const fs = require('fs');

class Interpretador {
	constructor() {
		// Tarefa 2 e 3
		this.PC = 0;
		this.W = [0];
	}

	// Tarefa 1: ler instrução
	// wi ← wi + 1
	// wi ← wi − 1
	// if wi =/= 0 goto L
	ler_instrucao(instrucao) {
		let tipo = "";
		let variavel = "";
		let gotoLinha = "";

		try {
			const argumentos = String(instrucao).split(" ");

			if (String(instrucao).includes("←") && String(instrucao).includes("+ 1")) {
				tipo = "incremento";
				variavel = argumentos[0];

			} else if (String(instrucao).includes("←") && String(instrucao).includes("- 1")) {
				tipo = "decremento";
				variavel = argumentos[0];

			} else if (String(instrucao).includes("if") && String(instrucao).includes("=/= 0") && String(instrucao).includes("goto")) {
				tipo = "condicional";
				variavel = argumentos[1];
				gotoLinha = argumentos[argumentos.length - 1];

			} else {
				throw new Error(`Instrução "${instrucao}" não reconhecida.`)
			}

			return { tipo, variavel, gotoLinha };

		} catch (error) {
			throw new Error(`Falha ao ler instrução: ${instrucao}.`);
		}
	}

	// Tarefa 2
	max_var([...programa]) {
		let max = 0;
		programa.forEach(instrucao => {
			const { variavel } = this.ler_instrucao(instrucao);
			const variavelIndice = parseInt(String(variavel).substring(1)) // removendo "w"
			if (variavelIndice > max) max = variavelIndice;
		});

		return max;
	}

	// Tarefa 3
	// Ex.: 7,2,55,2,31
	inicializa(entradasString, instrucoes) {
		try {
			const entradasArray = String(entradasString).split(",");
			entradasArray.forEach(entrada => {
				this.W.push(parseInt(entrada));
			});

			const max_var = this.max_var(instrucoes);
			while (this.W.length < max_var + 1) {
				this.W.push(0);
			}

		} catch (error) {
			throw new Error(`Falha na incialização com lista de entradas: ${entradasString}`);
		}

	}

	// Tarefa 4
	exec_inst(instrucao) {
		const { tipo, variavel, gotoLinha } = this.ler_instrucao(instrucao);
		const variavelIndice = parseInt(String(variavel).substring(1)) // removendo "w"

		if (tipo === "incremento") {
			this.W[variavelIndice] += 1;
			this.PC += 1;

		} else if (tipo === "decremento") {
			if (this.W[variavelIndice] - 1 < 0) throw new Error('Decremento negativo não permitido');
			this.W[variavelIndice] -= 1;
			this.PC += 1;

		} else {
			if (this.W[variavelIndice] === 0) this.PC += 1;
			else this.PC = parseInt(gotoLinha);

		}
	}

	// Tafera 5
	Universal(nomeArquivoPrograma, nomeArquivoEntradas) {
		fs.readFile(nomeArquivoEntradas, 'utf8', (err, entradasString) => {
			if (err) throw new Error("Falha ao tentar ler o arquivo de entradas");

			fs.readFile(nomeArquivoPrograma, 'utf8', (err, instrucoesString) => {
				if (err) throw new Error("Falha ao tentar ler o arquivo do programa");
				const instrucoes = String(instrucoesString).split('\n');
				this.inicializa(entradasString, instrucoes);

				const maxLinha = instrucoes.length;

				while (this.PC < maxLinha) {
					this.exec_inst(instrucoes[this.PC]);
					// console.log(this.W);
					// console.log(this.PC);
				}

				fs.writeFile('saida.txt', String(this.W[0]), 'utf8', () => null);
			});
		});
	}
}

module.exports = Interpretador;