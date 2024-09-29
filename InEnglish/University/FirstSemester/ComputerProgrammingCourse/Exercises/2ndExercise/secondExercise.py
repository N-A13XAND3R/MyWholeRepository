def ordenamiento_insercion_binaria(arr):

    print(f'Lista inicial: {arr}')

    for i in range(1, len(arr)):
        j = i
        while arr[j - 1] > arr[j] and j > 0:
            arr[j - 1], arr[j], j = arr[j], arr[j - 1], j-1

    print(f'Lista ordenada: {arr}')

lista = [23, 232, -2432,0, 2, 23, 3, 1,34235]

ordenamiento_insercion_binaria(lista)
