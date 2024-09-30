class CalificacionFormat:
    def __init__(self) -> None:
        pass

    def toList (lista, i = 0):
        l = len(lista)
        if i < l and type(lista[i]) == tuple:
            lista[i] = list(lista[i])
            return CalificacionFormat.toList(lista ,i+1)
        return lista

    def cleanList (lista, i = 0, j = 0):
        li, lj = len(lista), len(lista[0])
        if i >= li:
            return lista
        if i < li and j < lj:
            k = True if (j+1 != lj) else False
            if k and type(lista[i][j+1]) == str:
                lista[i].pop(j)
            return CalificacionFormat.cleanList(lista, i, j+1)
        if j >= lj:
            return CalificacionFormat.cleanList(lista, i = i+1, j = 0)

    def separeList1(lista: list, i, newL: list = [], j = 0):
        if (j >= len(lista[i])) or (j != 0 and type(lista[i][j]) == str):
            del lista[i][:j]
            return lista, newL
        newL.append(lista[i][j])
        return CalificacionFormat.separeList1(lista, i, newL, j+1)

    def separeList2(lista: list):
        newL: list = []
        for i in range(len(lista)):
            j = 0
            newL.append([])
            copy = lista
            while len(copy[i]) > 0:
                copy, a = CalificacionFormat.separeList1(copy, i, newL=[])
                newL[i].append(a)
                del copy[i][i:j]
        return newL

    def SepareList(lista):
        lista = CalificacionFormat.toList(lista)
        lista = CalificacionFormat.cleanList(lista)
        lista = CalificacionFormat.separeList2(lista)
        return lista