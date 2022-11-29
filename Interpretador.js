class Ìnterpretador {
	constructor() {

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
}