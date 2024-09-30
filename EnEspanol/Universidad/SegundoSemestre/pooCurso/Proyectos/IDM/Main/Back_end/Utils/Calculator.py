from math import sqrt

class Calculator:

    def __init__(self, rawData):

        self.rawData = rawData
        self.allGrades = []
        self.fullList = []

        # Aqui creo una lista con todas las notas de todos los estudiantes, ejemplo: [3.3, 4.4, 5.6, 7.6, 4.0, 9.0, 7.9, 9.8, 4.0, 9.0, 5.9, 9.8]
        for i in range (len(rawData)): 
            for j in  range (len(rawData[i])):
                for k in range(len(rawData[i][j])):
                    if (isinstance(rawData[i][j][k], int) or isinstance(rawData[i][j][k], float)):
                        self.fullList.append(rawData[i][j][k])
                        if rawData[i][j][k] != -1:
                            self.allGrades.append(rawData[i][j][k])

    def nivelesCompletados(self):
        
        return f'{len(self.fullList) - self.fullList.count(-1)}/{len(self.fullList)}'
    
    def progresoPorcentual(self):

        return (len(self.fullList) - self.fullList.count(-1))/len(self.fullList) * 100
    
    def sumatoria(self):

        summation = sum(list(self.allGrades))
        return summation

    def valorMedio(self):

        summation = self.sumatoria()
        quantity = len(list(self.allGrades))
        averageValue = 1 / quantity * summation

        return averageValue

    def desviacionEstandard(self):

        quantity = len(list(self.allGrades))
        averageValue = self.valorMedio()
        summationOfDeviation = sum((x - averageValue) ** 2 for x in list(self.allGrades))
        standardDeviationToThePowerOfTwo = summationOfDeviation / (quantity - 1)
        standardDeviation = sqrt(standardDeviationToThePowerOfTwo)

        return standardDeviation

    def desviacionEstandardMedia(self):

        quantity = len(list(self.allGrades))
        standardDeviation = self.desviacionEstandard()
        rootOfQuantity = sqrt(quantity)
        averageStandardDeviation = standardDeviation / rootOfQuantity

        return averageStandardDeviation

    def porcentajeDeDesviacion(self):

        averageValue = self.valorMedio()
        averageStandardDeviation = self.desviacionEstandardMedia()
        percentageError = (averageStandardDeviation / averageValue) * 100

        return percentageError
    
    def valorUnico(self, name = '', world = 1, grade = 1): 

        selectedName = []
        for i in  range (len(self.rawData)):
            for j in range (len(self.rawData[i])):
                if self.rawData[i][j][0] == name:
                    selectedName.append(self.rawData[i][j][1:])

        if len(selectedName) > 0:
            return selectedName[world-1][grade-1]
        
        else: 
            return -1

    def errorAbsoluto(self, name = '', world = 1, grade = 1):

        if self.valorUnico(name, world, grade) >= 0: 
            selectedValue = self.valorUnico(name, world, grade)
        else: 
            selectedValue = self.valorMedio()
        averageValue = self.valorMedio()
        absoluteError = selectedValue - averageValue

        if absoluteError < 0: 
            absoluteError *=-1
        return absoluteError

    def errorRelativo(self, name = '', world = 1, grade = 1):

        if self.valorUnico(name, world, grade) >= 0: 
            selectedValue = self.valorUnico(name, world, grade)
        else: 
            selectedValue = self.valorMedio()
        averageValue = self.valorMedio()
        absoluteError = selectedValue - averageValue
        relativeError = absoluteError / averageValue

        return relativeError

    def porcentajeDeErrorRelativo(self, name = '', world = 1, grade = 1):

        relativeErrorPercentage = self.errorRelativo(name, world, grade) * 100
        return relativeErrorPercentage

''' calculadora1 = Calculator([[['Jorge', 4.5, 4, 5, 3, -1], ['Jorge', 2.5, 5, 6, -1, -1], ['Jorge', 5, -1, -1, -1, -1], ['Jorge', -1, -1, -1, -1, -1]], [['Arielito', 3.4, -1, -1, -1, -1], ['Arielito', -1, -1, -1, -1, -1], ['Arielito', -1, -1, -1, -1, -1], ['Arielito', -1, -1, -1, -1, -1]]])
print(f''' '''

PROGRESO: {calculadora1.nivelesCompletados()}
PROGRESO PORCENTUAL: {calculadora1.progresoPorcentual()}
SUMATORIA: {calculadora1.sumatoria()}
VALOR MEDIO: {calculadora1.valorMedio()}
DESVIACION STANDARD: {calculadora1.desviacionEstandard()}
DESVIACION STANDARD MEDIA:{calculadora1.desviacionEstandardMedia()}
PORCENTAJE DE DESVIACION: {calculadora1.porcentajeDeDesviacion()}
ERROR ABSOLUTO: {calculadora1.errorAbsoluto('Jorge', 1, 1)}
ERROR RELATIVO: {calculadora1.errorRelativo('Jorge', 1, 1)}
PORCENTAJE DE ERROR RELATIVO: {calculadora1.porcentajeDeErrorRelativo('Jorge', 1, 1)}

''' ''') '''
