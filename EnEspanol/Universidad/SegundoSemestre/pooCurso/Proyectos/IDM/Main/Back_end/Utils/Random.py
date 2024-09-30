from random import choice, shuffle
class Randomizer():

    def __init__(self) -> None:
        pass

    def function(self, lamda, x):
        return lamda * x * (1 - x)


    def Randomizer(self):
        r = 0
        x = []

        while r < 4:
            pop = 0.5
            for _ in range(1000):
                pop = self.function(r, pop)
            for _ in range(64):
                x.append(r)
                pop = self.function(r, pop)
            r += 0.0001
            if len(x) > 5000:
                break
        
        return choice(x)*1000000//10

    def Generar_Numeros(self):
        n = int(self.Randomizer())
        if (n < 10):
            n = "00" + str(n)
        elif (n < 100):
            n = "0" + str(n)
        return str(n)
    
    def Generar_Codigo(self):
        alfabeto = list("abcdefghijklmnopqrstuvwxyz")
        shuffle(alfabeto)
        caracteres_r = "".join(alfabeto[:3])
        numeros = self.Generar_Numeros()
        return f"{caracteres_r}{numeros}"
