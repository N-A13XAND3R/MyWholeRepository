Crear la clase Persona que tenga como atributos Nombre, Edad, Genero (H hombre, M mujer), peso(Kilogramos) y altura (metros). El constructor debe recibir todos los parametros para su inicialización. La clase debe tener los siguientes métodos:

calcularIMC(): Calculará y retornará el Indice de Masa Corporal del objeto.

esMayorDeEdad(): Devolverá true si es mayor de edad, false en caso contrario.

toString(): Devolverá toda la información del objeto en un String.

En un caso especifico, se podrian poner directamente los datos en el constructor, pero para probar los distintos casos de prueba, estos valores deben ser ingresados por un input, para ello lo puede hacer con el metodo de scanner en java.

Input Format

Diego
22
H
75.4
1.75
Constraints

-Genero solo debe ser 'H' para hombre y 'M' para mujer (Puede ser string o char) -Los pesos deben ir en kilogramos y debe aceptar decimales -La altura debe ir en metros y debe aceptar decimales

Output Format

24.620408163265306
Mayor de edad: true
Nombre:Diego edad:23 genero:H peso:75.4 altura:1.75
Sample Input 0

Cristian
25
H
80.0
1.85
Sample Output 0

23.37472607742878
Mayor de edad: true
Nombre:Cristian edad:25 genero:H peso:80.0 altura:1.85
