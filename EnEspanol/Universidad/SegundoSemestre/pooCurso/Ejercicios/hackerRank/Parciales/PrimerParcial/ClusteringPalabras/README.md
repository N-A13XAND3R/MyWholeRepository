En este ejercicio, se pedirá implementar el algoritmo K-Means para agrupar un conjunto de palabras, para ello, se puede contar las ocurrencias de letras y usar puntos cartesianos de 26 dimensiones. El algoritmo debe ser capaz de agrupar las palabras similares en un cluster. Para el calculo de la distancia entre los puntos, se debe realizar por el método de Minkowski, ya que una entrada, será el parámetro p que maneja esta ecuación.

clases:

Clase Punto: Crea una clase Punto que represente un punto n-dimensional, donde su atributo será una lista con las coordenadas del punto. Como método debe tener el de calcular la distancia de Minkowski.
Clase Cluster: La clase debe tener un atributo para el centroide (un punto) y una lista de puntos que pertenecen al cluster. Como método importante, debe tener el de actualizar el centroide.
Clase KMeans: Implementara el algoritmo K-Means para agrupar los puntos. Esta debe comparar los puntos, con los clusters más cercanos, y el que tenga la menor distancia, se debe agregar el punto a este clusters. Este proceso va a ser iterativo.
Main: Donde se ejecutará el codigo, se pedirá el numero de palabras, las palabras, el número de clusters, las coordenadas de los centroides, parámetro “p” y el número de iteraciones.
Input Format

➢ Número de palabras
➢ Lista de palabras
➢ Numero de clusters
➢ Centroides
➢ parámetro “P”
➢ Numero de iteraciones
Constraints

-

Output Format

➢ Cluster X
➢ Palabras en el cluster:
➢ La lista de palabras pertenecientes a ese cluster
Sample Input 0

6
computadora
computacion
computador
universalidad
universidad
universo
2
1 0 1 0 0 0 0 0 0 0 0 0 1 0 2 1 0 1 0 1 0 0 0 0 0 0
1 0 0 1 1 0 0 0 1 0 0 1 0 1 0 0 0 1 1 0 1 1 0 0 0 0
3
100
Sample Output 0

Cluster 1
Palabras en el cluster:
computadora
computacion
computador

Cluster 2
Palabras en el cluster:
universalidad
universidad
universo
