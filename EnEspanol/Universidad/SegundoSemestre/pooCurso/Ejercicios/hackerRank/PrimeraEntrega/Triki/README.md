El objetivo será crear una clase Triki con el que se pueda jugar. Considere la siguiente matriz:

a a a
a a a
a a a

Cree la clase Triki que tenga como ́unico atributo la matriz anteriormente contemplada. El constructor no recibirá parámetros de entrada, y allí se inicializará la matriz con a’s que indican que la casilla en cuestión está vacía.

La clase tendrá los siguientes métodos:

marcarCasilla(String simbolo, int fila, int columna): Marcará el simbolo indicado (lo ideal es que en el parametro simbolo se pase un ́unico caracter (X ́o O). Dicho caracter se escribirá en la posición de la matriz (fila, columna).

verificarGanador(): Verificará si hay un ganador. Retornará el ganador (si lo hay) del juego, devolviendo el caracter que usó para ganar. Si no hay ganador aun se devolverá una “a” indicando que no hay un ganador.

verificarCasilla(int fila, int columna): Devolverá el caracter que hay en la casilla que está en la posición (fila, columna) de la matriz.

imprimirTablero(): La cual va a recorrer la matriz y la va a imprimir.

Nota! Tener en cuenta cuando se ingresan valores distintos a "X" o "O", o cuando se ingresan coordenas no validas, es decir, fuera de rango o que ya esten ocupadas, se pedira que ingrese un valor hasta que sea valido. No es necesario tener en cuenta los turnos, se puede recibir dos o mas veces las letras "X" o "O". El juego termina hasta que halla un ganador(No se toma en cuenta el empate).

Input Format

Letra (Hasta que sea valida)
Fila
Columna (Hasta que sea valida la coordenada)
Constraints

Se pueden recibir todos las letras, pero para continuar se debe verificar que sea una X o O
Se puede recibir cualquier numero, pero para continuar deben estar entre 0 y 2
Output Format

SA(simbolo aceptado) o SNA(Simbolo no aceptado) (puede aparecer mas de una vez)
CA(Coordenada aceptada) o CNA (Coordenada no aceptada) (puede aparecer mas de una vez)
imprimir el tablero con los simbolos marcados
El simbolo ganador fue: X o El simbolo ganador fue: O
Sample Input 0

X
0
2
X
1
2
X
2
2
Sample Output 0

SA
CA
SA
CA
SA
CA
aaX
aaX
aaX
El simbolo ganador fue: X
Sample Input 1

F
C
X
2
0
K
X
2
1
O
1
1
X
2
2
Sample Output 1

SNA
SNA
SA
CA
SNA
SA
CA
SA
CA
SA
CA
aaa
aOa
XXX
El simbolo ganador fue: X
