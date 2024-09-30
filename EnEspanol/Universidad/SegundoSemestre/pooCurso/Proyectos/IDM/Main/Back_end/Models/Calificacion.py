import sys
# append the path of the parent directory
sys.path.append("src\Back_end")

from DataBase import Du_Crud
from Utils.SqlFormatting import CalificacionFormat

Cursor = Du_Crud.DB_DataUsers()

def constructor(data):
    Estudiante = data.get("Nombre")
    Mundo = data.get("Mundo")
    Codigo = data.get("Aula")
    Nivel = data.get("Nivel")
    Notas = data.get("Nota")
    tipo = data.get("Tipo")

    Nota = Calificacion(Estudiante, Mundo, Codigo, Nivel, Notas, tipo) #Creación del objeto
    return Nota

class Calificacion:
    def __init__(self, Estudiante, Mundo, Codigo, Nivel, Nota, tipo): 
        self.Estudiante = Estudiante
        self.Mundo = Mundo
        self.Codigo = Codigo
        self.Nivel = Nivel
        self.Nota = Nota
        self.Tipo = tipo

    def ActualizarNotas(self):

        if self.Tipo == 1:
            sql_cmd = f'''
                        UPDATE 'Mundo{self.Mundo}_{self.Codigo}'
                        SET
                        '{self.Mundo}.Nivel_{self.Nivel}' = {self.Nota}
                        WHERE
                        Nombre_Estudiante = '{self.Estudiante}'
                    '''
        else:
            sql_cmd = f'''
                        UPDATE 'Mundo{self.Mundo}_{self.Codigo}'
                        SET
                        '{self.Mundo}.Reto_{self.Nivel}' = {self.Nota}
                        WHERE
                        Nombre_Estudiante = '{self.Estudiante}'
                    '''
            
        Cursor.Execute(sql_cmd)

    ## A esta funcion se la llama asi: Calificacion.NotasEstudiante('code') #Necesita almenos el codigo
    def NotasEstudiante(codigo, estudiante = "Aula", mundo = "Todos"): #Devuelve una lista de tuplas [(Estudiante_1), (Estudiante_2),...,(Estudiante_n)]
        if (estudiante == "Aula" and mundo == "Todos"):
            sql_cmd = f'''
                        SELECT M1.*, M2.*
                        FROM 'Mundo1_{codigo}' AS M1
                        INNER JOIN 'Mundo2_{codigo}' AS M2 ON M1.Nombre_Estudiante = M2.Nombre_Estudiante
                    '''
            resultado = Cursor.FetchA(sql_cmd)
        elif (estudiante == "Aula" and mundo != "Todos"): #Aqui hay un posible riesgo a que de error si el mundo no existe
            sql_cmd = f'''
                        SELECT M1.*
                        FROM 'Mundo{mundo}_{codigo}' AS M1
                    '''
            resultado = Cursor.FetchA(sql_cmd)
        elif (estudiante != "Aula" and mundo == "Todos"): #Aqui hay un posible riesgo a que de error si se escribe mal el nombre del estudiante o no existe
            sql_cmd = f'''
                        SELECT M1.*, M2.*
                        FROM 'Mundo1_{codigo}' AS M1
                        INNER JOIN 'Mundo2_{codigo}' AS M2 ON M1.Nombre_Estudiante = M2.Nombre_Estudiante
                        WHERE M1.Nombre_Estudiante = '{estudiante}'
                    '''
            resultado = Cursor.FetchA(sql_cmd)
        elif (estudiante != "Aula" and mundo != "Todos"):
            sql_cmd = f'''
                        SELECT M1.*
                        FROM 'Mundo{mundo}_{codigo}' AS M1 
                        WHERE M1.Nombre_Estudiante = '{estudiante}'
                    '''

            resultado = Cursor.FetchA(sql_cmd)
        return resultado