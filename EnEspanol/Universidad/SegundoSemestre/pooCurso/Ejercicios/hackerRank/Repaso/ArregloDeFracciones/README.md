Este resto es una extensión al reto Fracciones. Se recomienda revisar ese reto antes de continuar.

Una fracción se puede representar como propio con numerador y denominador, p.ej. 1/10, o mixto, donde el numerador no puede superar el denominador (numerador < denominador), p.ej. 3 1/2.

En este ejercicio, se leerá un entero N y luego se leerá N fracciones de numerador seguido por denominador. Al finalizar, se leerá una opción de tipo char y se imprimirá según la letra. Por ejemplo, se lee:

'p' se imprime en forma propia, numerador/denominador
'm' se imprime en forma mixta, cociente residuo/denominador
'a' se imprime propia seguida por mixta, como en el reto Fracciones
Input Format

N
2N enteros separados por espacio de numerador denominador
un char
Constraints

0 <= N <= 100
2N enteros
char en 'a','m','p'
Output Format

las fracciones en el formato solicitado

Sample Input 0

4
1 10
7 2
3 3
7 -3
p
Sample Output 0

1/10 7/2 3/3 -7/3
Explanation 0

Revise propios de Fracciones 3

Sample Input 1

4
1 10
7 2
3 3
7 -3
m
Sample Output 1

1/10 3 1/2 1 -2 1/3
Explanation 1

Revise mixtos de Fracciones 3

Sample Input 2

4
1 10
7 2
3 3
7 -3
a
Sample Output 2

1/10 1/10 7/2 3 1/2 3/3 1 -7/3 -2 1/3
Explanation 2

Revise los casos de prueba de Fracciones 3

Sample Input 3

4
1 2
4 3
-6 5
8 -7
a
Sample Output 3

1/2 1/2 4/3 1 1/3 -6/5 -1 1/5 -8/7 -1 1/7
Sample Input 4

4
1 2
4 3
6 5
8 7
p
Sample Output 4

1/2 4/3 6/5 8/7
Sample Input 5

10
30 29
29 28
27 26
25 24
20 21
4 6
10 10
7 7
9 10
10 9
p
Sample Output 5

30/29 29/28 27/26 25/24 20/21 4/6 10/10 7/7 9/10 10/9 
Sample Input 6

10
30 29
29 28
27 26
25 24
20 21
4 6
10 10
7 7
9 10
10 9
m
Sample Output 6

1 1/29 1 1/28 1 1/26 1 1/24 20/21 4/6 1 1 9/10 1 1/9 
Sample Input 7

10
30 29
29 28
27 26
25 24
20 21
4 6
10 10
7 7
9 10
10 9
a
Sample Output 7

30/29 1 1/29 29/28 1 1/28 27/26 1 1/26 25/24 1 1/24 20/21 20/21 4/6 4/6 10/10 1 7/7 1 9/10 9/10 10/9 1 1/9 
Sample Input 8

4
1 2
4 3
-6 5
8 -7
m
Sample Output 8

1/2 1 1/3 -1 1/5 -1 1/7
