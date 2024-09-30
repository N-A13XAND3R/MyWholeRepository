import sys
# append the path of the parent directory
sys.path.append("src\\Back_end")

from flask import request, jsonify
from flask import Blueprint
from DataBase.Du_Crud import DB_DataUsers
from Models.Professor import Teacher
from Models.Student import Student
from Routes.Login import askForNotes
Admin = DB_DataUsers()

informacion_bp = Blueprint("informacion", __name__)

@informacion_bp.route(r"/Backend/InfoBasica/Aulas", methods = ['POST']) # Recibe el nombre del usuario
def recibir_dato_A():
    respuesta = request.json
    n_usuario = respuesta.get("Usuario")
    try:
        Aulas = Admin.Aulas(n_usuario)
    except:
        return jsonify({"mensaje" : "Error Peticion", "Aulas" : []})
    return jsonify({"mensaje" : "Peticion Procesada", "Aulas" : Aulas})

@informacion_bp.route(r"/Backend/InfoAula", methods = ['POST'])
def recibir_dato_IA(): #Each endpoint function must be unique
    respuesta = request.json
    code = respuesta.get("Codigo") # El formato del codigo debe ser "xyz-123"
    try:
        Salon = Teacher.EstAula(code) # Contiene nombre, correo, mundo en el que se encuentra, progreso total, nota final
    except:
        return jsonify({"mensaje" : "Error Peticion", "InfSalon" : []})
    return jsonify({"mensaje" : "Peticion Procesada", "InfSalon" : Salon}) 

@informacion_bp.route(r"/Backend/CrearAula", methods = ['POST'])
def recibir_dato_IAE():
    respuesta = request.json
    return jsonify({"mensaje": Teacher.CrearAulaVirtual(respuesta.get("Usuario"))})

@informacion_bp.route(r"/Backend/JoinClass", methods = ["POST"])
def recibir_dato_IAEO():
    respuesta = request.json
    mail = Admin.getMail(respuesta.get("Usuario"))
    res = Student.Unirse_Aula_Virtual(respuesta.get("Usuario"), respuesta.get("Codigo"), mail)
    
    toReturn = {"mensaje": res[0], "pass": res[1]}

    if res[1] == "true":
        toReturn["Notas"] = askForNotes(respuesta.get("Usuario"), respuesta.get("Codigo"))
    
    return jsonify(toReturn)

