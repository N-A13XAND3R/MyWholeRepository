Esta pregunta es un continuación del reto Fracciones. Se recomienda revisar ese reto antes de continuar.

Una fracción se puede representar como propio con numerador y denominador, p.ej. 1/10, o mixto, donde el numerador no puede superar el denominador (numerador < denominador), p.ej. 3 1/2.

En este ejercicio, se leerá un entero N y luego se leerá N fracciones de numerador seguido por denominador. Finalmente, se leerá una fracción x.

Se debe imprimir la fracción más cercana a la fracción x.

Input Format

N

2N enteros separados por espacio de numerador denominador

Constraints

0 <= N <= 100

2N enteros

Output Format

La fracción más cercana a x en formato mixto

Sample Input 0

5
1 2
3 4
1 2
7 8
5 6
0 10
Sample Output 0

10/20
1/2
Explanation 0

El número más cercano a 0 es un medio. 1/2 - 0/10 = 10/20

Sample Input 1

4
1 2
4 3
-6 5
8 -7
8 7
Sample Output 1

4/21
1 1/3
Explanation 1

El más cercano a 8/7 es 4/3. Para restarlos, se usa el denominador común de 21 y se resta los numeradores ajustados, 24 y 28.

Sample Input 2

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
1 -4
Sample Output 2

22/24 
4/6
