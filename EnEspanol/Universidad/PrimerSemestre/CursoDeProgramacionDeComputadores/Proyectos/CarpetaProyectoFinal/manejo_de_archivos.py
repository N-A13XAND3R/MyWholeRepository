
# MODULO DE OPERACIONE DE MANEJO DE ARCHIVOS
import os
import json

def Leer_json(): 

    x = os.path.dirname(os.path.abspath(__file__)) + r"\alumnos.json"
    with open(f"{x}", "r") as info:
        return json.load(info)


def Escribir_json(nueva_informacion, option): 

    if option == 1: 
        alumnos = Leer_json()
        alumnos.update(nueva_informacion)
    else: 
        alumnos = nueva_informacion
    alumnos = dict(sorted(alumnos.items()))
    with open('alumnos.json', 'w') as archivo: 
        json.dump(alumnos, archivo, sort_keys=True)