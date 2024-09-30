import sys
# append the path of the parent directory
sys.path.append("src\\Back_end")

from flask import request, jsonify
from flask import Blueprint
from Models.Calificacion import constructor, Calificacion

calificacion_bp = Blueprint("Calificaciones", __name__)

@calificacion_bp.route(r"/Backend/Calificaciones/Actualizar", methods = ['POST'])
def recibir_dato():
    respuesta = constructor(data = request.json)
    try:
        respuesta.ActualizarNotas()
    except:
        return jsonify({"mensaje" : "Error al Actualizar"})
    return jsonify({"mensaje" : "Notas Actualizadas"})

@calificacion_bp.route(r"/Backend/Calificaciones/PedirNotas", methods = ["POST"])
def PedirNotas():
    data = request.json
    respuesta = constructor(data)
    lista = []

    if (respuesta.Estudiante == ""):
        lista = respuesta.NotasEstudiante(respuesta.Codigo)
    else:
        lista = Calificacion.NotasEstudiante(respuesta.Codigo, respuesta.Estudiante)

    lista = separarLista(lista)
    return jsonify(lista)

def separarLista(lista):
    dict = {}
    
    for i in range(len(lista)):
        result = ""
        for j in range(len(lista[i])):
            if j == 0:
                name = lista[i][j]
            else:
                if lista[i][j] == name:
                    continue
                else:
                    result += f"{lista[i][j]}," if j != len(lista[i]) - 1 else f"{lista[i][j]}"

            dict[name] = result
    
    return dict
