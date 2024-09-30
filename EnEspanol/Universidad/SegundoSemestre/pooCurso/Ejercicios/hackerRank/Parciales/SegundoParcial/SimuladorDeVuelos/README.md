Este desafío consiste en crear un programa para la gestión de vuelos en un aeropuerto, por lo cual, se deben crear algunas clases:

Clase pasajero
Clase avión
Clase Reserva
Clase Silla
Clase Vuelo
subclase Vuelo Nacional
subclase Vuelo Internacional
Además de estas clases, se piden algunas funcionalidades: 1. Registro de usuarios (nombres, apellidos, documento). 2. Creación de Aviones (empresa, capacidad,): Una opción para registrar los Aviones, hay que tener en cuenta que hay sillas ejecutivas que son el 40% y estarán en las primeras posiciones y sillas económicas con son el restante 60% de la capacidad. Además, el costo en la clase ejecutiva, es 2.5 veces el costo de la clase económica, que es el precio que se da como parámetro.

Creación de vuelos tanto nacionales como internacionales (int numero, String origen, String destino, String fecha, Avion avion, double precio): La clase VueloNacional heredara de la clase vuelo solo que tendrá un atributo de tipo double que será el impuesto que se aplicara a cada silla comprada y será de 1000 mientras que en el caso de la clase vueloInternacional su impuesto será de 2500 además de tener un atributo adicional con el nombre de las ciudades donde tiene escala.

Creación de Reservas: Se tiene una que permite crear reservas tanto para vuelos nacionales como internacionales, donde se pedirá el numero de vuelo (de los que hay creados), la clase (Económica o Ejecutiva), escoger el nombre del pasajero que hace la reserva(de los que hay creados) y la cantidad de sillas que va a reservar, donde se debe tener en cuenta si hay la disponibilidad en la clase que quiera reservar. Al final debe decir si se pudo hacer la reserva o no, y si se puedo hacer, mostrar el precio total, tomando en cuenta la cantidad y el impuesto.

Mostrar información del vuelo con el Numero de vuelo: Debe haber una función, la cual muestre la información referente al vuelo dando como argumento el numero de vuelo, para ello, se pueden usar los diccionarios y el método toString para mostrar la información.
Se debería tener un menú como el siguiente:

        ("1. Registrar un avión");
        ("2. Registrar un pasajero");
        ("3. Crear una reserva");
        ("4. Crear un vuelo nacional");
        ("5. Crear un vuelo internacional");
        (“6. Mostrar la información del vuelo con el número de Vuelo)
        ("0. Salir");
No es necesario mostrarlo en consola, solo es como referencia, cada vez que se cumpla una función, debe volver al menú hasta que se ingrese un 0 y se termina el codigo.

Input Format

Tendrá el numero de la función que se quiere realizar (0 a 6 ) y la respectiva información que solicita el método, hasta que se ingrese un 0.
Registro de avion Se solicita en orden el nombre de la empresa y la capacidad

Registro de Pasajero: Se solicita en orden nombres, apellidos y documento.

Crear una reserva: Se solicitara en orden el tipo de vuelo(1 para vuelo nacional y 2 para internacional), se solicitara el numero de vuelo para la reserva(debe haber ya creados), se solicitara la clase(Ejecutiva o Económica ), el nombre del pasajero que hará la reserva(de los ya creados) y la cantidad de asientos a reservar. Siempre debe regresar al menú, independientemente si se logro la reserva con éxito o no.

Crear un vuelo nacional e internacional: Se solicitará el nombre de la empresa del avion (avion creado anteriormente), un numero de vuelo, origen, destino, la fecha, (si es internacional el nombre de las ciudades de las escalas separado por comas) y el precio del vuelo.

Mostrar la información del vuelo con el número de Vuelo: Se solicitará el numero de vuelo del cual se quiere conocer la información.

Constraints

Manejo de excepciones al momento de reservar
Output Format

Registro de avion: “Avion registrado con exito.”
Registro de Pasajero: "Pasajero registrado con exito."
Crear una reserva: "Reserva creada con exito. Precio total: $" + precioTotal o "Error al crear la reserva: No hay suficientes asientos disponibles."
Crear un vuelo nacional e internacional: “Vuelo creado con exito.”

Mostrar la información del vuelo con el número de Vuelo: El formato es similar al siguiente: “Origen: " + origen + ", Destino: " + destino ", Fecha: " + fecha + ", Empresa: " + empresa + ", Precio: " + precio.

Sample Input 0

1
Avianca
10
2
Carlos
Garzon murillo
42445345
4
Avianca
211
Bogota
Cartagena
2023-11-21
600
5
Avianca
411
Bogota
Oslo
2023-11-09
Miami,Madrid
900
3
1
211
Economica
Carlos
2
6
411
0
Sample Output 0

Avion registrado con exito.
Pasajero registrado con exito.
Vuelo creado con exito.
Vuelo creado con exito.
Reserva creada con exito. Precio total: $3200.0
Origen: Bogota, Destino: Oslo, Fecha: 2023-11-09, Empresa: Avianca, Precio: 900.0
Sample Input 1

1
Viva Air
10
1
LATAM
100
2
Sandra
Gonzalez Roa
100013563
5
Viva Air
411
Bogota
Oslo
2023-12-09
Miami,Madrid
900
3
2
411
Ejecutiva
Sandra
11
4
LATAM
512
Cartagena
Cali
2023-12-09
400
3
1
512
Ejecutiva
Sandra
5
6
512
0
Sample Output 1

Avion registrado con exito.
Avion registrado con exito.
Pasajero registrado con exito.
Vuelo creado con exito.
Error al crear la reserva: No hay suficientes asientos disponibles.
Vuelo creado con exito.
Reserva creada con exito. Precio total: $10000.0
Origen: Cartagena, Destino: Cali, Fecha: 2023-12-09, Empresa: LATAM, Precio: 400.0
