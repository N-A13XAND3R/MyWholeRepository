Debes implementar una interface cliente, la cual tiene los metodos calcular riesgo, capacidad de pago y una para verificar si es apto para el prestamo, cada tipo de cliente debe implemetar esta interface. Reglas de Negocio:

Persona Natural:
Riesgo: deudas / ingresos. Capacidad de Pago: ingresos - deudas. Un cliente es apto para un préstamo si el riesgo es menor a 0.5 y la capacidad de pago es mayor a 1000.

Empresa Pequeña:
Riesgo: (deudas / ingresos) * (1.0 / numeroEmpleados). Capacidad de Pago: ingresos - deudas - (numeroEmpleados * 500). Una empresa es apta para un préstamo si el riesgo es menor a 0.4 y la capacidad de pago es mayor a 5000.

Gran Corporación:
Riesgo: (deudas / (ingresos + patrimonio)) * (1.0 / Math.log(numeroEmpleados + 1)). Capacidad de Pago: (ingresos + patrimonio) - deudas - (numeroEmpleados * 1000). Una gran corporación es apta para un préstamo si el riesgo es menor a 0.3 y la capacidad de pago es mayor a 20000.

Input Format

El programa primero debe leer un número entero n, que representa la cantidad de clientes a procesar. Luego, debe recibir los detalles para cada cliente en las siguientes líneas:

Si es una Persona Natural: ingresos: un número decimal que representa el total de ingresos del cliente. deudas: un número decimal que representa el total de deudas del cliente.

Si es una Empresa Pequeña: ingresos: un número decimal que representa el total de ingresos de la empresa. deudas: un número decimal que representa el total de deudas de la empresa. numeroEmpleados: un número entero que representa la cantidad de empleados en la empresa.

Si es una Gran Corporación: ingresos: un número decimal que representa el total de ingresos de la corporación. deudas: un número decimal que representa el total de deudas de la corporación. patrimonio: un número decimal que representa el patrimonio total de la corporación. numeroEmpleados: un número entero que representa la cantidad de empleados en la corporación.

Constraints

Se utiliza el tipo de dato double
Output Format

Para cada cliente, el sistema debe calcular y mostrar lo siguiente: El tipo de cliente (Persona Natural, Empresa Pequeña, Gran Corporación). El riesgo calculado para ese cliente. La capacidad de pago calculada. Si el cliente es "Apto" o "No Apto" para recibir un préstamo.

Ejemplo:

TipoCliente: Riesgo: valor_riesgo, Capacidad de Pago: valor_capacidad, Resultado: Apto/No Apto

Sample Input 0

3
PersonaNatural 50000 20000
EmpresaPequena 100000 50000 10
GranCorporacion 1.000.000 300000 2.000.000 500
Sample Output 0

Persona Natural: Riesgo: 0.4, Capacidad de Pago: 30000.0, Resultado: Apto
Empresa Pequena: Riesgo: 0.05, Capacidad de Pago: 45000.0, Resultado: Apto
Gran Corporacion: Riesgo: 0.01608594760130434, Capacidad de Pago: 2200000.0, Resultado: Apto
Sample Input 1

4
PersonaNatural 45000 15000
EmpresaPequena 80000 75000 10
GranCorporacion 200000 1500000 250000 50
PersonaNatural 35000 30000
Sample Output 1

Persona Natural: Riesgo: 0.3333333333333333, Capacidad de Pago: 30000.0, Resultado: Apto
Empresa Pequena: Riesgo: 0.09375, Capacidad de Pago: 0.0, Resultado: No Apto
Gran Corporacion: Riesgo: 0.8477825938134742, Capacidad de Pago: -1100000.0, Resultado: No Apto
Persona Natural: Riesgo: 0.8571428571428571, Capacidad de Pago: 5000.0, Resultado: No Apto
