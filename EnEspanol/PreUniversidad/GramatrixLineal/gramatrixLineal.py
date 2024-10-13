
import numpy as np 
import sympy as sym
import math 
import re

print ("BIENVENIDO A GRAMATRIX-LINAL.")
print ("\n")

while True:
    
    try:

        eleccion = int(input(f'¿QUE CALCULADORA NECESISTAS? \n1) ARITMETICA. \n2) DE MATRICES.\n3) MI IA ARITMETICA.\n'))

        if eleccion == 1: 

            print(f'SELECCIONA LA OPERACIÓN: \n 1) ADICION. \n 2) RESTA. \n 3) MULTIPLICACIÓN . \n 4) DIVISIÓN \n 5) POTENCIA \n 6) RAIZ \n 7) LOGARITMACIÓN')
            eleccion = int(input("¿CUAL OPRERACION LLEVAREMOS A CABO? (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13.): \n"))

            def suma(X,Y): 
                print(X+Y)
            def rest(X,Y): 
                print(X-Y)
            def mult(X,Y): 
                print(X*Y)
            def div(X,Y): 
                print(X/Y)
            def expo(X,Y): 
                print(X**Y)
            def raiz(X,Y): 
                print(X**(1/Y))
            def log(X,Y): 
                print(math.log(X,Y))

            if eleccion  == 1:
                texto = str("Da El sumando 1")
                texto_2 = str("Da El sumando 2")
                contador = 1
            if eleccion  == 2:
                texto = str("Da El minuendo")
                texto_2 = str("Da El sustraendo")
                contador = None 
            if eleccion  == 3:
                texto = str("Da El factor 1")
                texto_2 = str("Da El factor 2")
                contador = 1
            if eleccion  == 4:
                texto = str("Da El dividendo")
                texto_2 = str("Da El divisor")
                contador = None 
            if eleccion  == 5:
                texto = str("Da La base")
                texto_2 = str("Da El exponente")
                contador = None 
            if eleccion  == 6:
                texto = str("Da La base")
                texto_2 = str("Da La raiz")
                contador = None 
            if eleccion  == 7:
                texto = str("Da El arguemnto")
                texto_2 = str("Da La base")
                contador = None 

            text1 = texto.replace('Da ','')
            text2 = texto_2.replace('Da ','')

            loop = 0

            for i in range(2):

                loop +=1 

                if loop == 2:
                    texto = texto_2

                Numero = float(input(f'{texto}:\n'))

                if loop == 1:
                    Numero_1 = Numero 
                
                elif loop == 2:
                    Numero_2 = Numero  
                
            print('')

            print(F'{text1}:\n{Numero_1}')
            print(F'{text2}:\n{Numero_2}')

            print('')

            print("RESULTADO:")
            if eleccion  == 1:
                print(f'.\n Errores: {suma(Numero_1,Numero_2)}')
            if eleccion  == 2:
                print(f'.\n Errores: {rest(Numero_1,Numero_2)}')
            if eleccion  == 3:
                print(f'\n Errores: {mult(Numero_1,Numero_2)}')
            if eleccion  == 4:
                print(f'\n Errores: {div(Numero_1,Numero_2)}')
            if eleccion  == 5:
                print(f'\n Errores: {expo(Numero_1,Numero_2)}')
            if eleccion  == 6:
                print(f'\n Errores: {raiz(Numero_1,Numero_2)}')
            if eleccion  == 7:
                print(f'\n Errores: {log(Numero_1,Numero_2)}')  

        elif eleccion == 2: 
            print(f'SELECCIONA LA OPERACIÓN: \n 1) ADICIÓN DE MATRICES. \n 2) RESTA DE MATRICES. \n 3) MULTIPLICACIÓN DE MATRICES. \n 4) MULTIPLICACIÓN DE MATRIZ POR ESCALAR. \n 5) DIVISIÓN DE MATRIZ POR ESCALAR. \n 6) POTENCIACIÓN DE MATRIZ \n 7) TRANSPUESTA DE UNA MATRIZ. \n 8) REDUCCIÓN DE MATRIZ. \n 9) INVERSA DE MATRIZ. \n 10) SOLUCION SISTEMA DE ECUACIONES. \n 11) SUMATORIA. \n 12) MAXIMO. \n 13) MINIMO.')
            eleccion = int(input("¿CUAL OPRERACION LLEVAREMOS A CABO? (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13.): \n"))

            if 0 > eleccion < 13:
                print ("ELECCIÓN INVALIDA")
            elif 0 < eleccion < 3:
                p, t = 2, 0
            elif eleccion == 3 or eleccion == 10:
                p, t = 1, 1
            elif 3 < eleccion < 14:
                p, t = 1, 0

            matrix, A, B, columnas, fila, columna, numero, matriz  = [], [], [], [], 1, 1, 0, 1

            if 0 < eleccion < 3 :
                N = int(input(f'Da el numero de filas de estas matrices:  \n'))  
                M = int(input(f'Da el numero de columnas de estas matrices:  \n'))

            elif eleccion == 3: 
                N = int(input(f'Da el numero de filas de la primera matriz:  \n'))  
                M = int(input(f'Da el numero de columnas de la primera matriz y filas de la segunda:  \n'))
                E = int(input(f'Da el numero de columnas de la segunda matriz:  \n'))

            elif eleccion == 9: 
                N = int(input(f'Da el numero de filas y columnas de la matriz:  \n'))
                M = N  

            elif eleccion == 10: 
                N = int(input(f'Da el numero de ecuaciones:  \n'))  
                M = int(input(f'Da el numero de incognitas:  \n'))
                print ("Ten en cuenta: \n1) La primera matriz corresponde a los coheficientes de la incognita.")
                print ("2) La segunda matriz corresponde a sus equivalentes.")
                print ("3) Cada columna corresponde a una variable.")
                print ("4) Si una variable no existe en una ecuacion, su coeficiente es 0.")
                E = 1

            elif 3 < eleccion < 14:
                N = int(input(f'Da el numero de filas de esta matriz:  \n'))  
                M = int(input(f'Da el numero de columnas de esta matriz:  \n'))


            for g in range (p):
                print(F'matriz {matriz}: ')

                fila, columna, columnas, matrix =  1, 1, [], []
                
                for i in range (N):
                    columnas = [] 
                    for j in range (M):
                        numero = float(input(f'Da el numero de la fila {fila} columna  {columna}:  \n'  ))
                        columnas.append(numero)
                        columna = columna + 1 
                    fila = fila + 1 
                    columna = 1
                    matrix.append(columnas)
                    
                    if matriz == 1: 
                        A = matrix
                    elif matriz == 2: 
                        B = matrix
                matriz = matriz + 1

            for g in range (t):
                print(F'matriz 2: ')

                fila, columna, columnas, matrix =  1, 1, [], []
                
                for i in range (M):
                    columnas = [] 
                    for j in range (E):
                        numero = float(input(f'Da el numero de la fila {fila} columna  {columna}:  \n'  ))
                        columnas.append(numero)
                        columna = columna + 1 
                    fila = fila + 1 
                    columna = 1
                    matrix.append(columnas) 
                    B = matrix

            resultado = A
            O = sym.Matrix(A)
            L = np.identity(N)

            if eleccion == 4 or eleccion == 5:
                escalar = int(input("DA EL ESCALAR: "))

            if eleccion == 6:
                potencia = int(input("DA lA POTENCIA: "))

            def imprimir (X):
                try:
                    print (int(X))
                except:
                    print (X)


            def suma_de_matrices (X,Y):
                for i in range(len(X)):
                    for j in range(len(X[0])):
                        resultado[i][j] = X[i][j] + Y[i][j]
                for R in resultado:
                    imprimir (R)

            def resta_de_matrices (X,Y):
                for i in range(len(X)):
                    for j in range(len(X[0])):
                        resultado[i][j] = X[i][j] - Y[i][j]
                for R in resultado:
                    imprimir (R)

            def multiplicacion_matrices (X,Y):
                R = np.dot(X,Y)
                imprimir (R)


            def multiplicacion_escalar (X,Y):
                for i in range(len(X)):
                    for j in range(len(X[0])):
                        resultado[i][j] = X[i][j] * Y
                for R in resultado:
                    imprimir (R)
                

            def division_escalar (X,Y):
                for i in range(len(X)):
                    for j in range(len(X[0])):
                        resultado[i][j] = X[i][j] / Y
                for R in resultado:
                    imprimir (R)

            def potencia_de_matriz (X, Y):
                R = np.linalg.matrix_power(X, Y)
                imprimir (R)

            def transpuesta (X):
                R = X.transpose()
                imprimir (R)

            def reduccion_Gauss (X):
                R = X.rref(pivots = False)
                R = np.array(R)
                imprimir (R)

            def Inversa (X, Y):
                X = np.concatenate((X, Y), axis=1)
                X = sym.Matrix(X)
                R = X.rref(pivots = False)
                R = np.array(R)
                imprimir (R)

            def solucion (X, Y):
                R = np.linalg.solve(X, Y)
                imprimir (R)

            def sumatoria (X):
                R = X.sum()
                imprimir (R)

            def maximo (X):
                R = X.max()
                imprimir (R)

            def minimo (X):
                R = X.min()
                imprimir (R)

            A= np.array(A)
            B= np.array(B)
            print(" ")

            print ("A ="), imprimir (A)
            print (" ")

            if eleccion < 4 or eleccion == 10:
                print ("B ="), imprimir (B)
            elif eleccion == 4 or eleccion == 5: 
                print ('escalar= ',escalar)
            elif eleccion == 6: 
                print ('potencia= ',potencia)
            elif eleccion == 9: 
                X = np.concatenate((A, L), axis=1)
                print ('matriz nueva= \n', X)
            print (" ")

            print ("Respuesta= ")

            if eleccion == 1:
                print (f'suma de matrices. \n Errores: {suma_de_matrices(A,B)}')
            elif eleccion == 2:
                print (f'resta de matrices. \n Errores: {resta_de_matrices(A,B)}')
            elif eleccion == 3:
                print (f'multiplicacion de matrices. \n Errores: {multiplicacion_matrices(A,B)}')
            elif eleccion == 4:
                print (f'multiplicacion matriz-escalar.\n Errores: {multiplicacion_escalar(A,escalar)}')
            elif eleccion == 5:
                print (f'división matriz-escalar.\n Errores: {division_escalar(A,escalar)}')
            elif eleccion == 6:
                print (f'potencia de matriz.\n Errores: {potencia_de_matriz(A,potencia)}')
            elif eleccion == 7:
                print (f'transpuesta de la matriz.\n Errores: {transpuesta(A)}')
            elif eleccion == 8:
                print (f'reducción de la matriz.\n Errores:  {reduccion_Gauss(O)}')
            elif eleccion == 9:
                print (f'inversa de la matriz.\n Errores:  {Inversa(A, L)}')
            elif eleccion == 10:
                print (f'soluciones al sistema de ecuaciones.\n Errores:  {solucion(A, B)}')
            elif eleccion == 11:
                print (f'sumatoria de la matriz.\n Errores: {sumatoria(A)}')
            elif eleccion == 12:
                print (f'maximo de la matriz.\n Errores: {maximo(A)}')
            elif eleccion == 13:
                print (f'minimo de la matriz.\n Errores: {minimo(A)}')
            elif 0 > eleccion > 14:
                print ("ERROR")

        elif eleccion == 3:
                
            eleccion = input(int("¿QUE TIPO DE OPERACION ES? \n1) ARITMETICA. \n2) ALGEBRAICA."))

            if eleccion == 1:
            
                user_input = input("Da la expresión matematica: \n")
                try:
                    result = eval(user_input)
                    print("Resultado:", result)
                except (SyntaxError, TypeError):
                    print("Input invalido")
                except ZeroDivisionError:
                    print("Indefinido")

            elif eleccion == 2:
                print ("g")
        
        else: 
            print ('Error')
    
    except:
        print("Solo se admiten numeros. \n")