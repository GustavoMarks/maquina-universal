w6 ← w6 + 1            // Verificando fatorial de zero e 1
if w1 =/= 0 goto 4
w0 ← w0 + 1
if w0 =/= 0 goto 100
w1 ← w1 - 1
if w1 =/= 0 goto 8
w0 ← w0 + 1
if w6 =/= 0 goto 100
w1 ← w1 - 1            // Salvando valor da entrada para multiplicação
w2 ← w2 + 1
w3 ← w3 + 1
if w0 =/= 0 goto 14
w4 ← w4 + 1              // Caso esteja no início da recursão, deixar o valor da entrada mais um acumuado 
w5 ← w5 + 1
if w1 =/= 0 goto 8
w1 ← w1 + 1
w3 ← w3 - 1
if w3 =/= 0 goto 15
if w0 =/= 0 goto 22
w4 ← w4 + 1              // Caso esteja no início da recursão, deixar o valor da entrada mais um acumuado 
w5 ← w5 + 1
if w6 =/= 0 goto 26
w0 ← w0 - 1            // Salvando cópias do valor acumulado para multiplicação com soma num laço
w4 ← w4 + 1 
w5 ← w5 + 1
if w0 =/= 0 goto 22
w0 ← w0 + 1            // Somando o valor acumulado salvo anterior mente um número de vezes igual ao salvo no w2
w4 ← w4 - 1
if w4 =/= 0 goto 26
w2 ← w2 - 1
if w2 =/= 0 goto 32
if w6 =/= 0 goto 40
w4 ← w4 + 1            // Recuperando o valor de 4 para a próxima interação a partir de 5
w5 ← w5 - 1
w3 ← w3 + 1
if w5 =/= 0 goto 32
w5 ← w5 + 1
w3 ← w3 - 1
if w3 =/= 0 goto 36
if w6 =/= 0 goto 26
w5 ← w5 - 1            // resetando variavel para próxima iteração
if w5 =/= 0 goto 40
w1 ← w1 - 1
if w1 =/= 0 goto 8