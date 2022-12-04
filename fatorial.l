if w1 =/= 0 goto 3
w0 ← w0 + 1
if w0 =/= 0 goto 100
w1 ← w1 - 1                   // Passando o valor original da entrada para outras variaveis
w2 ← w2 + 1                   // Irá guardar o próximo fatorial
w3 ← w3 + 1                   // Irá servir de contador para multiplicação
w4 ← w4 + 1                   // Irá salvar o valor da entrada sem alteração
if w1 =/= 0 goto 3
w2 ← w2 - 1										// Multiplica n por n - 1
if w2 =/= 0 goto 12
if w3 =/= 0 goto 24
w0 ← w0 + 1
w3 ← w3 - 1
if w3 =/= 0 goto 11
w3 ← w3 + 1
w4 ← w4 - 1
w1 ← w1 + 1
if w4 =/= 0 goto 14
w4 ← w4 + 1
w1 ← w1 - 1
if w1 =/= 0 goto 18
if w2 =/= 0 goto 8
w4 ← w4 - 1                  // Indo para fatorial de n - 1
w1 ← w1 + 1
if w4 =/= 0 goto 22
w1 ← w1 - 1
if w2 =/= 0 goto 30
if w3 =/= 0 goto 32
if w4 =/= 0 goto 34
if w0 =/= 0 goto 36
w2 ← w2 - 1
if w0 =/= 0 goto 26
w3 ← w3 - 1
if w0 =/= 0 goto 26
w4 ← w4 - 1
if w0 =/= 0 goto 26
if w1 =/= 0 goto 3
if w0 =/= 0 goto 100
w0 ← w0 + 1