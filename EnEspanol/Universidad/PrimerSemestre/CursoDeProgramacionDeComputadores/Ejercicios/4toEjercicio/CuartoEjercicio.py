# Suma de una lista dada.
def Suma(*numeros):
    total = 0

    for i in range(len(*numeros)):
        total = listaDeNumeros[i] + total
    return total

# Multiplica todos los números de una lista dada.
def Multiplicacion(*numeros):
    total = 1

    for i in range(len(*numeros)):
        total = listaDeNumeros[i] * total
    return total

listaDeNumeros = [34, -324, 23, -243]
print(Suma(listaDeNumeros))
print(Multiplicacion(listaDeNumeros))
