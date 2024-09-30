import sys
# append the path of the parent directory
sys.path.append("src\\Back_end")

from flask import request, jsonify
from flask import Blueprint
from Models.Registro import constructor, construnctorObject

registro_bp = Blueprint("Registro", __name__)

@registro_bp.route(r"/Backend/Registro_Usuario", methods = ['POST'])
def recibir_dato():
    respuesta = constructor(data = request.json)

    return jsonify({"mensaje" : respuesta[0], "Rol" : respuesta[1], "Aula": respuesta[2], "codigo": respuesta[3]})

@registro_bp.route(r"/Backend/VerifyMail", methods = ["POST"])
def change():
    respuesta = construnctorObject(data = request.json)
    respuesta.UpdateCheckMail()
    return [1,2]