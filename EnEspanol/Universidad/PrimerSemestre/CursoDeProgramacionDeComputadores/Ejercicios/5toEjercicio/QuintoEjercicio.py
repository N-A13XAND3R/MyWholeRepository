#Calcular factorial usando recursion.
def Factorial(numero): 
    if numero == 0:
        return 1
    else: 
        return numero * Factorial (numero-1)

print(Factorial(5))
