Una fracción se puede representar como propio, p.ej. 7/2, o número mixto, donde (numerador < denominador), p.ej. 3 1/2.

En este ejercicio, se leerá una fracción de numerador seguido por denominador y se imprimirá como propio y como mixto. p. ej. dado:

1 10 se imprimirá 1/10 1/10, ya que eso corresponde a ambos formatos.

7 2 se imprimirá 7/2 3 1/2.

3 3 se imprimirá 3/3 1, ya que el número mixto no tiene fracción.

10 -7 se imprimirá -10/7 y -1 3/7.

Para resolver el problema de convertir la fracción propia a número mixto:

Se divide el numerador por el denominador.
El cociente de la división anterior se convierte en el entero del número mixto.
El resto de la división es el numerador de la fracción.
El denominador es el mismo que el de la fracción. Es el divisor de la división.
Por ejemplo, 8/5 da 1 3/5. Como se puede observar en la división:

El numerador es 8.
El denominador es 5.
El cociente es 1.
El resto es 3.
El divisor es 5.
Input Format

numerador denominador

Constraints

numerador y denominador en rango de números enteros

Output Format

n/d c r/d

Sample Input 0

1 10
Sample Output 0

1/10 1/10
Sample Input 1

7 2
Sample Output 1

7/2 3 1/2
Sample Input 2

3 3
Sample Output 2

3/3 1
Explanation 2

Ya que 3 sobre 3 da uno, no es necesario escribir la fracción del mixto.

Sample Input 3

7 -3
Sample Output 3

-7/3 -2 1/3
Explanation 3

Dado que uno de los números es negativo, ya sea el numerador o denominador, se imprime el negativo al inicio de cada versión.
