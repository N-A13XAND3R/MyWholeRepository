import json, sqlite3 as sql
from pandas import read_sql_query
import sys
# append the path of the parent directory
sys.path.append("src\Back_end")

with open(r'src\Back_end\Utils\config.json') as jj:
    DB_Direction = json.load(jj)

from Utils.SqlFormatting import CalificacionFormat

class DB_DataUsers:
    def __init__(self):
        self.DB_Direction = DB_Direction['Base_Direction']
    
    def Execute(self, sql_cmd): # Solo para ejecutar una sentencia, no sirve para almacenar el resultado y luego trabajar sobre el
        C = sql.connect(self.DB_Direction)
        C.execute(sql_cmd)
        C.commit()
        C.close()
    
    def ShowTable(self, codigo):
        C = sql.connect(self.DB_Direction)
        c = C.cursor()

        df = read_sql_query(f"SELECT name FROM sqlite_master WHERE type='table' AND name = 'Aula_{codigo}'", c)

        df
        C.close()

    def FetchOId(self, query_tabla, *IdF): # Puede recibir una sentencia o el nombre de una tabla con el nombre de su columna de identificacion
        Cursor = sql.connect(self.DB_Direction)
        if (len(IdF) != 0):
            result = Cursor.execute(f"SELECT MAX({IdF[0]}) FROM '{query_tabla}'")
            result = result.fetchone()[0]
            i = int(result)+1 if (result is not None) else 1
            Cursor.commit()
            Cursor.close()
            return i
        result = Cursor.execute(query_tabla)
        result = result.fetchone()
        result = result[0] if (result != None) else result
        Cursor.commit()
        Cursor.close()
        return result
    
    def FetchA(self, sql_cmd):
        Cursor = sql.connect(self.DB_Direction)
        result = Cursor.execute(sql_cmd)
        result = result.fetchall()
        Cursor.commit()
        Cursor.close()
        return result
    
    def InicializarTablas(self):
        self.CrearTabla_TablaRoles()
        self.CrearTabla_UsuariosR()
        self.CrearTabla_Aulas()

    def CrearTabla_TablaRoles(self):
        sql_cmd = '''
                    CREATE TABLE IF NOT EXISTS 'Roles' (
                        'Id_Rol' INT PRIMARY KEY,
                        'Rol' TEXT NOT NULL UNIQUE,
                        CHECK(Rol IN("Estudiante", "Profesor")),
                        FOREIGN KEY(Id_Rol) REFERENCES Usuarios_Registrados(Rol)
                        )
                '''
        self.Execute(sql_cmd)
        if (self.FetchOId('''SELECT Id_Rol=1 FROM Roles''') == None):
            self.Execute('''INSERT INTO Roles (Id_Rol, Rol) VALUES (1, 'Estudiante')''')
            self.Execute('''INSERT INTO Roles (Id_Rol, Rol) VALUES (2, 'Profesor')''')
        
    def CrearTabla_UsuariosR(self):
        sql_cmd = '''
                    CREATE TABLE IF NOT EXISTS 'Usuarios_Registrados' (
                        'Id' INT AUTO_INCREMENT,
                        'Nombre_Usuario' TEXT PRIMARY KEY NOT NULL,
                        'Contraseña' TEXT NOT NULL,
                        'Aula' TEXT NOT NULL,
                        'Rol' INT NOT NULL,
                        'Email' TEXT NOT NULL UNIQUE,
                        'CheckMail' NOT NULL,
                        CHECK(Rol IN(1,2))
                        )
                '''
        self.Execute(sql_cmd)
    
    def CrearTabla_Aulas(self):
        sql_cmd1 = '''
                    CREATE TABLE IF NOT EXISTS 'Aulas' (
                    'Id_Aula' INT PRIMARY KEY,
                    'Aula' TEXT UNIQUE
                    )
                '''
        sql_cmd2 = '''
                    CREATE TABLE IF NOT EXISTS 'User_Aulas' (
                    'Id_User_Aulas' INT PRIMARY KEY,
                    'Id_User' INT,
                    'Id_Aula' INT,
                    FOREIGN KEY(Id_User) REFERENCES Usuarios_Registrados(Id),
                    FOREIGN KEY(Id_Aula) REFERENCES Aulas(Id_Aula),
                    UNIQUE (Id_User, Id_Aula)
                    )
                '''
        self.Execute(sql_cmd1)
        self.Execute(sql_cmd2)

    def getRol(self, user):
        result = self.FetchA(f"SELECT Rol FROM Usuarios_Registrados WHERE Nombre_Usuario = '{user}'")
        if (result == []):
            return "Null"
        return "Estudiante" if (result[0][0] == 1) else "Profesor"
    
    def getAula(self, user):
        x = sql.connect(self.DB_Direction)

        Pointer = x.cursor()
        result =  Pointer.execute(f"SELECT Aula FROM Usuarios_Registrados WHERE Nombre_Usuario = '{user}'")

        result = Pointer.fetchone()
        try:
            return result[0]
        except:
            return "No registro"
    
    def getMail(self, user):
        x = sql.connect(self.DB_Direction)

        Pointer = x.cursor()
        result =  Pointer.execute(f"SELECT Email FROM Usuarios_Registrados WHERE Nombre_Usuario = '{user}'")

        result = Pointer.fetchone()

        return result[0]
    
    def getCheckMail(self, user: str):
        x = sql.connect(self.DB_Direction)

        Pointer = x.cursor()
        result =  Pointer.execute(f"SELECT CheckMail FROM Usuarios_Registrados WHERE Nombre_Usuario = '{user}'")

        result = Pointer.fetchone()

        return result[0]
    
    def Aulas(self, usuario):
        Aulas = []
        sql_cmd = f'''
                    SELECT 
                    Aulas.Aula
                    FROM User_Aulas
                    JOIN Usuarios_Registrados ON User_Aulas.Id_User = Usuarios_Registrados.Id
                    JOIN Aulas ON User_Aulas.Id_Aula = Aulas.Id_Aula
                    WHERE Usuarios_Registrados.Nombre_Usuario = '{usuario}'
                '''
        result = self.FetchA(sql_cmd)
        for i in range(len(result)):
            a = result[i][0]
            a = a[5:len(a)]
            Aulas.append(a)
        return Aulas