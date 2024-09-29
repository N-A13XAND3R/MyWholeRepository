
# PROGRAMA PRINCIPAL (EJECUTABLE).

import funciones

if __name__=='__main__':

    base_de_datos_estudiantes = {}

    while True: 

        while True: 

            funciones.Impirmir_texto_centrado(funciones.Imprimir_opciones(5))

            try:
                
                opcion = int(input(f'Digite una opción: '))
                
                if 0<= opcion <= 4:

                    break

                else: 

                    print(f' Opcion invalida.')


            except: 

                print(f'Solo se admiten inputs tipo int.')
                pass
        
        funciones.Borrar_pantalla()

        if opcion == 0: 

            funciones.Impirmir_texto_centrado(funciones.Imprimir_opciones(0))
            break
            
            
        if opcion == 1: 
                
            funciones.Impirmir_texto_centrado(funciones.Imprimir_opciones(1))
            funciones.Crear_registros(opcion)
                    
                    
        elif opcion == 2: 

            funciones.Impirmir_texto_centrado(funciones.Imprimir_opciones(2))
            funciones.modificar_registro(opcion)

        elif opcion == 3: 

            funciones.Impirmir_texto_centrado(funciones.Imprimir_opciones(3))
            funciones.Consultar_registro

        else: 

            funciones.Impirmir_texto_centrado(funciones.Imprimir_opciones(4))
            funciones.Borrar_registro
                    
                    
        funciones.Presione_continuar()
        funciones.Borrar_pantalla()