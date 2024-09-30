Debes crear una interface "curso" que tenga los metodos de calcular nota final, un metodo para verificar si esta aprobado, y otro para conocer el rendimiento del estudiante.

CursoRegular Peso del examen: 60% Peso de la tarea: 30% Peso del proyecto: 10%.
Un estudiante aprueba si su nota final es mayor o igual a 60.

Rendimiento: Excelente si la nota final es >= 90 Bueno si la nota final es >= 75 Suficiente si la nota final es >= 60 Insuficiente si la nota final es < 60

CursoAvanzado: Peso del examen: 70% Peso de la tarea: 10% Peso del proyecto: 20% .
Un estudiante aprueba si su nota final es mayor o igual a 70.

Rendimiento: Excelente si la nota final es >= 90 Bueno si la nota final es >= 80 Suficiente si la nota final es >= 70 Insuficiente si la nota final es < 70

Taller: Peso del examen: 30% Peso de la tarea: 20% Peso del proyecto: 50% .
Un estudiante aprueba si su nota final es mayor o igual a 65.

Rendimiento: Excelente si la nota final es >= 85 Bueno si la nota final es >= 75 Suficiente si la nota final es >= 65 Insuficiente si la nota final es < 65

Input Format

La primera línea contiene un entero N, el número de cursos.

Las siguientes N líneas contienen los detalles de cada curso en el formato:

TipoCurso Nota_Examen Nota_Tarea Nota_Proyecto
Constraints

-La salida de la nota es un double -Despues de la salida de cada curso hay un salto de linea

Output Format

Para cada curso, se imprimen las siguientes líneas:

Curso X (TipoCurso): Nota Final: Y Estado: Aprobado/No Aprobado Rendimiento: Excelente/Bueno/Suficiente/Insuficiente

Sample Input 0

5
CursoRegular 100 95 90
CursoAvanzado 60 70 80
Taller 50 50 50
CursoRegular 70 70 70
CursoAvanzado 85 75 95
Sample Output 0

Curso 1 (CursoRegular):
Nota Final: 97.5
Estado: Aprobado
Rendimiento: Excelente

Curso 2 (CursoAvanzado):
Nota Final: 65.0
Estado: No Aprobado
Rendimiento: Insuficiente

Curso 3 (Taller):
Nota Final: 50.0
Estado: No Aprobado
Rendimiento: Insuficiente

Curso 4 (CursoRegular):
Nota Final: 70.0
Estado: Aprobado
Rendimiento: Suficiente

Curso 5 (CursoAvanzado):
Nota Final: 86.0
Estado: Aprobado
Rendimiento: Bueno
