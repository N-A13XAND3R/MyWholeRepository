Imagina que estás desarrollando un sistema de gestión de empleados para una empresa. Debes crear una clase llamada Empleado con los siguientes atributos:

nombre (String): El nombre del empleado.
edad (int): La edad del empleado.
genero (String "H"o "M")
departamento (String): El departamento al que pertenece el empleado.
semanas Cotizadas(int)
salario (double): El salario del empleado.
Crea un constructor para la clase Empleado que acepte todos los atributos como parámetros y los utilice para inicializar el objeto.

Luego, implementa los siguientes métodos en la clase Empleado:

public double obtenerBonificacion(int semanasCotizadas) La bonificacion es de 0.10 si semanas cotizadas<=325, de 0.15 si semanas cotizadas<=650, 0.20 si semanas cotizadas<=975 y en otro caso es de 0.25

public void AumentarSalario(double porcentaje) Aumenta el salario del empleado segun la bonificacion del metodo anterior

public void AumentarSemanasCotizadas() Aumenta la semana cotizadas en 1

public void DerechoPensionarse(String nombre,String genero, int semanas_cotizadas,int edad) Verifica si el empleado tiene derecho a pensionarse, tener en cuenta, que en Colombia se deben cumplir dos requisitos minimos: Tener 1300 semanas cotizadas y si es Hombre tener 62 años y si es mujer 57 años.

public int CuantasSemanasFaltanParaPensioanrse(int semanasCotizadas) Devuelve el valor de las semanas que le hacen falta para pensionarse public String toString() Devuelve toda la informacion del empleado.

Input Format

Nombre empleado
edad empleado
Genero ("H" o "M")
Departamento
semanas cotizadas
sueldo
Constraints

El sueldo esta en pesos
Output Format

Su nuevo salario es: (Nuevo salario despues de la bonificacion)
"Nombre_empleado " tiene derecho a la pension
Ya cumplio las semanas o Aun no tiene derecho a la pension
Toda la info del empleado, ejemplo (Nombre:Carlos Alberto edad:63 genero:H departamento:Matematicas semanas Cotizadas:1303 Salario:5250000.0 pesos)
Sample Input 0

Diego Andres
25
H
Contabilidad
200
2300000
Sample Output 0

Su nuevo salario es:2530000.0
Aun no tiene derecho a la pension
Le hacen falta: 1100 semanas
Nombre:Diego Andres edad:25 genero:H departamento:Contabilidad semanas Cotizadas:201 Salario:2530000.0 pesos
Sample Input 1

Karla Sthefania
58
M
Marketing
1300
2900000
Sample Output 1

Su nuevo salario es:3625000.0
Karla Sthefania tiene derecho a la pension
Ya cumplio las semanas
Nombre:Karla Sthefania edad:58 genero:M departamento:Marketing semanas Cotizadas:1301 Salario:3625000.0 pesos
