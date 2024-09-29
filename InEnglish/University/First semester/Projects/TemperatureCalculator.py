import os

#  1
def celsius_a_kelvin(numero):
    numero = numero + 273.15
    return round(numero, 2)

#  2
def celsius_a_fahrenheit(numero):
    numero = numero * 9 / 5 + 32
    return round(numero, 2)

# 3 Esta función tambien sirve para kilometros/h a millas/h.
def kilometros_a_millas(numero):
    numero = numero / 1.60934
    return round(numero, 2)

# 4 Esta función tambien sirve para millas/h a kilometros/h.
def millas_a_kilometros(numero):
    numero = numero * 1.60934
    return round(numero, 2)

#  5
def centimetros_a_pulgadas(numero):
    numero = numero / 2.54
    return round(numero, 2)

#  6
def pulgadas_a_centimetros(numero):
    numero = numero * 2.54
    return round(numero, 2)

#  7
def pies_a_metros(numero):
    numero = numero / 3.28084
    return round(numero, 2)

#  8
def metros_a_pies(numero):
    numero = numero * 3.28084
    return round(numero, 2)

print(''' 
                BIENVENIDO AL PROGRAMA. ¿QUÉ VAMOS A HACER? 
                
                         ▒▒▒▒▒▒▐███████▌▒▒▒▒▒▒▒
                         ▒▒▒▒▒▒▐░▀░▀░▀░▌▒▒▒▒▒▒▒
                         ▒▒▒▒▒▒▐▄▄▄▄▄▄▄▌▒▒▒▒▒▒▒
                         ▄▀▀▀█▒▐░▀▀▄▀▀░▌▒█▀▀▀▄▒
                         ▌▌▌▌▐▒▄▌░▄▄▄░▐▄▒▌▐▐▐▐▒
                         ▒▒▓▓▒▒▓▓▒▒▓▓▒▒▓▓▒▒▓▓▒▒                
    ''')

# Hace que el programa siga hasta que se precione 0.
while True:
    # Solo permite valores de 0 a 10, si no es valido repite. 
    while True:

        try:
            opcion = int(input(''' 
                    
                        1. convertir grados celsius a kelvin.
                        2. convertir grados celsius a fahrenheit.
                        3. Convertir kilometros a millas. 
                        4. Convertir millas a kilometros.
                        5. Convertir centimetros a pulgadas.
                        6. Convertir pulgadas a centimetros.
                        7. Convertir pies a metros.
                        8. Convertir metros a pies.
                        9. Convertir kilometros/hora a millas/hora.
                       10. Convertir millas/hora a kilometros/hora.
                    
                        0. Salir del programa.
                                                         
                '''))
            
            if 0 <= opcion <= 10: 
                break
            else: 
                print(f'\n{opcion} No es una opcion valida.')

        except: 
            print('\nSolo se admite input de tipo entero.')
            pass
        
# Llama la funcion, imprime y revisa si el numero que se va a transformar es valido. 

    if opcion == 1:

        while True:
            try:
                valor = entrada = float(input(f'\n {opcion}. Por favor da el numero que se quiere convertir de grados celsius a kelvin: '))
                print(f' {entrada} grados celsius equivale a {celsius_a_kelvin(valor)} kelvin.')
                break
            except:
                print('Solo se admiten numeros.')
            pass

    elif opcion == 2:

        while True:
            try:
                valor = entrada = float(input(f'\n {opcion}. Por favor da el numero que se quiere convertir de grados celsius a fahrenheit: '))
                print(f' {entrada} grados celsius equivale a {celsius_a_fahrenheit(valor)} fahrenheit.')
                break
            except:
                print('Solo se admiten numeros.')
            pass

    elif opcion == 3:
        
        while True:
            try:
                valor = entrada = float(input(f'\n {opcion}. Por favor da el numero que se quiere convertir de kilometros a millas: '))
                print(f' {entrada} kilometros equivale a {kilometros_a_millas(valor)} millas.')
                break
            except:
                print('Solo se admiten numeros.')
            pass

    elif opcion == 4:

        while True:
            try:
                valor = entrada = float(input(f'\n {opcion}. Por favor da el numero que se quiere convertir de millas a kilometros: '))
                print(f' {entrada} millas equivale a {millas_a_kilometros(valor)} kilometros.')
                break
            except:
                print('Solo se admiten numeros.')
            pass

    elif opcion == 5:

        while True:
            try:
                valor = entrada = float(input(f'\n {opcion}. Por favor da el numero que se quiere convertir de centimetros a pulgadas: '))
                print(f' {entrada} centimetros equivale a {centimetros_a_pulgadas(valor)} pulgadas.')
                break
            except:
                print('Solo se admiten numeros.')
                pass

    elif opcion == 6:

        while True:
            try:
                valor = entrada = float(input(f'\n {opcion}. Por favor da el numero que se quiere convertir de pulgadas a centimetros: '))
                print(f' {entrada} pulgadas equivale a {pulgadas_a_centimetros(valor)} centimetros.')
                break
            except:
                print('Solo se admiten numeros.')
            pass

    elif opcion == 7:

        while True:
            try:
                valor = entrada = float(input(f'\n {opcion}. Por favor da el numero que se quiere convertir de pies a metros: '))
                print(f' {entrada} pies equivale a {pies_a_metros(valor)} metros.')
                break

            except:
                print('Solo se admiten numeros.')
            pass

    elif opcion == 8:

        while True:
            try:
                valor = entrada = float(input(f'\n {opcion}. Por favor da el numero que se quiere convertir de metros a pies: '))
                print(f' {entrada} metros equivale a {metros_a_pies(valor)} pies.)') 
                break

            except:
                print('Solo se admiten numeros.')
            pass

    elif opcion == 9:

        while True:
            try:
                valor = entrada = float(input(f'\n {opcion}. Por favor da el numero que se quiere convertir de kilometros/hora a millas/hora: '))
                print(f'{entrada} kilometros/hora equivale a {kilometros_a_millas(valor)} millas/hora.)')
                break

            except:
                print('Solo se admiten numeros.')
            pass
        
    elif opcion == 10:

        while True:
            try:
                valor = entrada = float(input(f'\n {opcion}. Por favor da el numero que se quiere convertir de millas/hora a kilometros/hora: '))
                print(f' {entrada} millas/hora equivale a {millas_a_kilometros(valor)} kilometros/hora.)')
                break

            except:
                print('Solo se admiten numeros.')
            pass

    else:

        print('''

                    GRACIAS POR UTILIZAR EL RPOGRAMA. 
                        Esperamos volver a verte.

                         ░░░░░░░░░░░░░░░░░░░░░░
                         ░░░▄█████▄░░▄█████▄░░░
                         ░░░▀██▄██▀░░▀██▄██▀░░░
                         ░░░░░░░░░░░░░░░░░░░░░░
                         ░░░▄░░░░░░░░░░░░░░▄░░░
                         ░░░░▀▄▄▄▄▄▄▄▄▄▄▄▄▀░░░░


        ''')
        break

    #  Preciona para continuar

    input("\nPresione enter para continuar...")

    #  Limpieza de terminal

    os.system('cls' if os.name == 'nt' else 'clear')
