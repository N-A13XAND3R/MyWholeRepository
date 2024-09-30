import sys
from Models.Calificacion import Calificacion
# append the path of the parent directory
sys.path.append("src\\Back_end")

from flask import request, jsonify
from flask import Blueprint
from Models.Login import constructor, construnctorObject, InputUser

login_bp = Blueprint("Login", __name__)

@login_bp.route(r"/Backend/Login_Usuario", methods = ['POST'])
def recibir_dato():
    data = request.json
    respuesta = constructor(data)

    if respuesta != "Usuario o Contraseña Incorrectos":
        if respuesta[0] != "Usuario o Contraseña Incorrectos" and respuesta[1] != "Profesor":
            lista = askForNotes(data.get('Nombre'), respuesta[2])
            return jsonify({"mensaje" : respuesta[0], "Rol" : respuesta[1], 
                            "Aula": respuesta[2], "Notas": lista, "code": respuesta[3], 
                            "Check": respuesta[4]})

        return jsonify({"mensaje" : respuesta[0], "Rol" : respuesta[1], 
                        "Aula": respuesta[2], "code": respuesta[3], 
                        "Check": respuesta[4]})
    else:
        return jsonify({"mensaje": respuesta})

@login_bp.route(r"/Backend/RecoverCount", methods = ["POST"])
def Recover():
    data = request.json
    respuesta = construnctorObject(data)

    return jsonify({"mensaje": respuesta.RecuperarContraseña()}) if respuesta != "El usuario no existe" else jsonify({"mensaje": "El usuario no existe"})

@login_bp.route(r"/Backend/ChangePassword", methods = ["POST"])
def Change():
    data = request.json
    respuesta = construnctorObject(data, 2)
    respuesta.UpdatePassWord()
    return jsonify({"mensaje": "123"})

@login_bp.route(r"/Backend/EnviarCorreos", methods = ["POST"])
def SendMail():
    data = request.json
    titulo = f'Información para el aula {data.get("Aula")} del profesor {data.get("Profesor")}'
    
    destinators = data.get("destinatarios").split(',')
    InputUser.SendMail(titulo, data.get("contexto"), destinators)
    return [1,2,3]

def askForNotes(nombre, aula):
    if aula != '-1':

        toReturn = ""

        for j in range(1, 3):
            notas = Calificacion.NotasEstudiante(aula, nombre, j)
            
            resultado = "" if j == 1 else ","

            for i in range(len(notas[0])):
                resultado += f"{notas[0][i]}," if i != len(notas[0]) - 1 else f"{notas[0][i]}"
            
            toReturn += resultado
        return toReturn
