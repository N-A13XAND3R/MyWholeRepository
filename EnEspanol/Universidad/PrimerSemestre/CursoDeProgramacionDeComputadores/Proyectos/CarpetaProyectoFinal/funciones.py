
# MODULO DE FUNCIONES DEL SISTEMA.

import os 
import manejo_de_archivos
import msvcrt

def Borrar_pantalla(): #Definimos la función estableciendo el nombre que queramos
    if os.name == "posix":
        os.system("clear")
    elif os.name == "ce" or os.name == "nt" or os.name == "dos":
        os.system ("cls")


def Imprimir_opciones(numero): 
    
    menu = '''
    
    ========================================================
        PROGRAMA PARA EL MANEJO DE ESTUDIANTES DEL CURSO.
    ========================================================

    1. Crear registros. 
    2. Modificar registros.
    3. Consultar registros. 
    4. Eliminar registro.

    0. <Terminal>


    '''

    opcion0 = '''

    ********************************************************
                ESO FUE TODO, FIN DEL PROGRAMA.
    ********************************************************

    '''

    opcion1 = '''

    ********************************************************
                    INGRESO DE REGISTRO.
    ********************************************************

    '''

    opcion2 = '''

    ********************************************************
                    MODIFICAR REGISTROS.
    ********************************************************

    '''

    opcion3 = '''

    ********************************************************
                    CONSULTA DE REGISTRO.
    ********************************************************

    '''

    opcion4 = '''

    ********************************************************
                    ELIMINACIÓN DEL REGISTRO.
    ********************************************************

    '''

    if numero == 5: 
        return menu
    elif numero == 0: 
        return opcion0
    elif numero == 1: 
        return opcion1
    elif numero == 2: 
        return opcion2
    elif numero == 3: 
        return opcion3
    elif numero == 4: 
        return opcion4



def Impirmir_texto_centrado(texto : str):

    espacios = round(os.get_terminal_size().columns/2.7)
    texto = texto.splitlines()
    for i in range (len(texto)):
        print(" " * espacios, texto[i])


def Crear_registros(opcion):
    
    while True:
        base_de_datos = manejo_de_archivos.Leer_json()
        llave = ''   
        activo = ''
        alumnos = manejo_de_archivos.Leer_json()

        while llave.isdigit() == False :
            llave = input(f'Numero de registro (0 = regresar): ')

            if llave.isdigit() == False:
                print(f'EL numero de registro debe ser un Numero Entero.')

        if llave == '0': 
            break

        elif llave in alumnos:
            print(f'\n Este numero de registro ya existe.')
            pass

        else:

            nombre = (input(f'Nombre(s) y Apellido(s): ')).upper()
            materias = []

            while True: 

                materia = input(f'Materia <Enter = Salir> :').upper()

                if materia == "":
                    break
                else: 
                    materias.append(materia)

            while activo != True and activo != False:
                activo = input('El estidiante es activo (S/N): ').upper().strip()
                if activo == 'S':
                    activo = True
                elif activo == 'N':
                    activo = False

            base_de_datos[llave] = {}
            base_de_datos[llave]['Nombre']= nombre
            base_de_datos[llave]['Materia(s)']= sorted(set(materias))
            base_de_datos[llave]['Activo']= activo
            print(f'\nAlumno guardado exitosamente.')
            manejo_de_archivos.Escribir_json(base_de_datos, opcion)
    
def modificar_registro(opcion):

    while True:
        base_de_datos = manejo_de_archivos.Leer_json()

        llave = input(f'De el numero de registro del registro que desea modificar: ').upper().strip()
        
        if llave == '0':
            break
        
        elif llave in base_de_datos:
            
            print(f'''
            -------------------------------------------------------------------------------
                                NOMBRE:     {base_de_datos[llave]['Nombre']}                    
            Código:   {llave})      MATERIAS:   {base_de_datos[llave]['Materia(s)']}
                                ACTIVO:     {base_de_datos[llave]['Activo']}
            -------------------------------------------------------------------------------
                ''')

            while opcion != 'T' and opcion != 'N' and opcion != 'M' and opcion != 'A':
                opcion= input(f'Modificar todo (T), modificar nombre (N), mopdificar materias (M), o modificar actividad (A): ').upper().strip()
            
            if opcion == 'T':

                nombre = (input(f'Nombre(s) y Apellido(s): ')).upper()
                base_de_datos[llave]['Nombre']= nombre

                materias = []
                while True: 

                    materia = input(f'Materia <Enter = Salir> :').upper()

                    if materia == "":
                        break
                    else: 
                        materias.append(materia)

                base_de_datos[llave]['Materia(s)']= sorted(set(materias))

                activo = ''

                while activo != True and activo != False:
                    activo = input('El estidiante es activo (S/N): ').upper().strip()
                    if activo == 'S':
                        activo = True
                    elif activo == 'N':
                        activo = False

                base_de_datos[llave]['Activo']= activo

            elif opcion == 'N': 

                nombre = (input(f'Nombre(s) y Apellido(s): ')).upper()
                base_de_datos[llave]['Nombre']= nombre

            elif opcion == 'M':
                materias = []
                while True: 

                    materia = input(f'Materia <Enter = Salir> :').upper()

                    if materia == "":
                        break
                    else: 
                        materias.append(materia)

                base_de_datos[llave]['Materia(s)']= sorted(set(materias))

            elif opcion == 'A':
                
                activo = ''

                while activo != True and activo != False:
                    activo = input('El estidiante es activo (S/N): ').upper().strip()
                    if activo == 'S':
                        activo = True
                    elif activo == 'N':
                        activo = False

                base_de_datos[llave]['Activo']= activo

            print(f'Modificación guardada exitosamente.') 
            manejo_de_archivos.Escribir_json(base_de_datos, opcion)
            
                
        else: 
            print(f'\nEse registro no esta en la base de datos.')
            break

        

def Consultar_todos_registros():

    alumnos = manejo_de_archivos.Leer_json()

    for i in alumnos:
        print(f'''
    -------------------------------------------------------------------------------
                        NOMBRE:     {alumnos[i]['Nombre']}                    
    Código:   {i})      MATERIAS:   {alumnos[i]['Materia(s)']}
                        ACTIVO:     {alumnos[i]['Activo']}
    -------------------------------------------------------------------------------''')

    print(f'\nBase de datos abierta exitosamente.')
        

def Consultar_unico_registro():

    while True:
        
        i = input(f'De el numero del registro a consultar (0 para devolverse): ').upper().strip()
        alumnos = manejo_de_archivos.Leer_json()

        if i == '0': 
            break
        
        elif i in alumnos:
        
            print(f'''
            -------------------------------------------------------------------------------
                                NOMBRE:     {alumnos[i]['Nombre']}                    
            Código:   {i})      MATERIAS:   {alumnos[i]['Materia(s)']}
                                ACTIVO:     {alumnos[i]['Activo']}
            -------------------------------------------------------------------------------
                ''')
            print(f'\nRegistro unico abierto exitosamente.')
        else: 
            print(f'\nEse numero de registro no se esncuentra en la base de datos.')

def Consultar_registro(opcion = ''):
    while opcion != 'T' and opcion != 'U':
        opcion= input(f'Conslutar todos (T) o solo uno (U): ').upper().strip()
    if opcion == 'T':
        Consultar_todos_registros()
    else: 
        Consultar_unico_registro()
    

def Borrar_unico_registro(opcion): 
    
    while True:
        
        alumnos = manejo_de_archivos.Leer_json()
        llave = input(f'De el numero de registro del registro que desea borrar (0 para volver): ').upper().strip()
        if llave == '0':
            break
        elif llave in alumnos:
            del alumnos[llave]
            manejo_de_archivos.Escribir_json(alumnos, opcion)
            print(f'\nAlumno borrado exitosamente.')
        else: 
            print(f'\nEse registro no esta en la base de datos.')
            

def Borrar_todos_registros(opcion):
    while True:
        seguro = input('El estidiante es activo (S/N): ').upper().strip()
        if seguro == 'S':
            base_de_datos = {}
            manejo_de_archivos.Escribir_json(base_de_datos ,opcion)
            
        elif seguro == 'N':
            break
        
def Borrar_registro(opcion = ''):
    while opcion != 'T' and opcion != 'U':
        opcion= input(f'Borrar todos (T) o solo uno (U): ').upper().strip()
    if opcion == 'U':
        Borrar_unico_registro(opcion)
    else: 
        Borrar_todos_registros(opcion)

    
def Presione_continuar():
    print(f'\nPresione caulquier tecla para continuar.')
    msvcrt.getch()
