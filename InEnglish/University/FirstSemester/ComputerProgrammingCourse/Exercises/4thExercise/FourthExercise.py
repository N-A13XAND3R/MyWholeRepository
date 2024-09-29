#Summation of a given list.
def Summation(*numbers):
    total = 0

    for i in range (len(*numbers)):

        total = listOfNumbers[i] + total
        print(total)
    return total

#Multiplies all numbers of a given list.
def Multiplication(*numbers):
    total = 1

    for i in range (len(*numbers)):

        total = listOfNumbers[i] * total
        print(total)
    return total

listOfNumbers = [34,-324,23,-243]
print(Summation(listOfNumbers))
print(Multiplication(listOfNumbers))
