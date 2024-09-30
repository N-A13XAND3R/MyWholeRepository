En este ejercicio, se pedirá implementar el algoritmo K-Means para agrupar un conjunto de datos N-dimensionales en clusters. El algoritmo debe ser capaz de asignar los puntos a los clusters más cercanos y calcular los centroides de estos, todo esto de manera iterativa. Para el calculo de la distancia entre los puntos, se debe realizar por el método de Minkowski, ya que una entrada, será el parámetro p que maneja esta ecuación.

clases:

Clase Punto: Crea una clase Punto que represente un punto n-dimensional, donde su atributo será una lista con las coordenadas del punto. Como método debe tener el de calcular la distancia de Minkowski.
Clase Cluster: La clase debe tener un atributo para el centroide (un punto) y una lista de puntos que pertenecen al cluster. Como método importante, debe tener el de actualizar el centroide.
Clase KMeans: Implementara el algoritmo K-Means para agrupar los puntos. Esta debe comparar los puntos, con los clusters más cercanos, y el que tenga la menor distancia, se debe agregar el punto a este clusters. Este proceso va a ser iterativo.
Main: Donde se ejecutará el codigo, se pedirá el numero de puntos, la dimensión de los puntos, las coordenadas de estos, el número de clusters, las coordenadas de los centroides, el número de iteraciones y el parámetro “p” para la distancia, y se instanciará un objeto de la clase KMeans con la lista de puntos, los clusters y el parámetro.
Input Format

➢ Número de puntos
➢ Dimensión de los puntos
➢ Coordenadas de los puntos
➢ Numero de clusters
➢ Centroides
➢ Numero de iteraciones
➢ parámetro “P”
Constraints

Las coordenadas de los puntos y centroides pueden ser decimales
Output Format

➢ Cluster X-Centroide: (Las coordenadas del centroide)
➢ Puntos en el cluster:
➢ La lista de puntos que hacen parte de este cluster
Sample Input 0

10
2
1 2
2 3
5 5
6 6
1.5 2.5
5.5 5.5
7 7
1.2 2.2
5.2 5.2
7.2 7.2
3
1 2
5 5
7 7
10
2
Sample Output 0

Cluster 1 - Centroide: [1.425, 2.425]
Puntos en el cluster:
[1.0, 2.0]
[2.0, 3.0]
[1.5, 2.5]
[1.2, 2.2]

Cluster 2 - Centroide: [5.425, 5.425]
Puntos en el cluster:
[5.0, 5.0]
[6.0, 6.0]
[5.5, 5.5]
[5.2, 5.2]

Cluster 3 - Centroide: [7.1, 7.1]
Puntos en el cluster:
[7.0, 7.0]
[7.2, 7.2]
Sample Input 1

10
3
1 2 3
5 4 6
0 1 1
4 5 5
10 9 9
8 9 11
2 4 1
6 7 3
2 3 1
9 11 9
3
1 1 1
5 5 5
9 9 9
10
3
Sample Output 1

Cluster 1 - Centroide: [1.25, 2.5, 1.5]
Puntos en el cluster:
[1.0, 2.0, 3.0]
[0.0, 1.0, 1.0]
[2.0, 4.0, 1.0]
[2.0, 3.0, 1.0]

Cluster 2 - Centroide: [5.0, 5.333333333333333, 4.666666666666667]
Puntos en el cluster:
[5.0, 4.0, 6.0]
[4.0, 5.0, 5.0]
[6.0, 7.0, 3.0]

Cluster 3 - Centroide: [9.0, 9.666666666666666, 9.666666666666666]
Puntos en el cluster:
[10.0, 9.0, 9.0]
[8.0, 9.0, 11.0]
[9.0, 11.0, 9.0]
