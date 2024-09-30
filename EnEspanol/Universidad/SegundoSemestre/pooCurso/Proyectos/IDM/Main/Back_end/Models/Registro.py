from Models.User import InputUser, Cursor, rand
from Utils.Encrypter import Encrypter

def constructor(data: dict):
    Nombre = data.get('Nombre')
    Contraseña = data.get('Contraseña')
    Email = data.get('Correo')
    Rol = data.get('Rol')
    # the user-login object
    User = Registro(Nombre, Contraseña, Rol, Email)

    code = User.ConfirmarCorreoRegistro()
    return User.GuardarEnDataUsers(), Cursor.getRol(Nombre), Cursor.getAula(Nombre), code

def construnctorObject(data: dict, x = 1):
    #con el 1 es un mail normal, con el 2 es cambio de contraseña
    Nombre = data.get('Nombre')
    Contraseña = "" if x == 1 else data.get("Contraseña")
    try:
        Email = Cursor.getMail(Nombre)
    except:
        return "El usuario no existe"

    Rol = ""
    User = Registro(Nombre, Contraseña, Rol, Email)
    return User


class Registro(InputUser):

    def __init__(self, Usuario: str, Contraseña: str, Rol: str, Email: str):
        super().__init__(Usuario, Contraseña, Rol, Email)

    def VerificarRegistro(self):
        #El mismo código que en VerificarLogin con algunas modificaciones
        name = self.Usuario
        lista = Cursor.FetchA(f"SELECT * FROM Usuarios_Registrados WHERE Nombre_Usuario = '{name}' or Email = '{self.Email}'")
        if (len(lista) == 0):
            return "Usuario Correcto"
        else:
            return "Usuario o Correo en uso" 

    def GuardarEnDataUsers(self):
        Registro = self.VerificarRegistro()
        x = -1 if self.Rol == 1 else 0
        chekMail = -1
        self.x = x
        if (Registro == "Usuario Correcto"):
            en = Encrypter(self.Contraseña) #llamado a la encriptación
            try:
                num = Cursor.FetchOId('Usuarios_Registrados', 'Id')
                insert = f'''
                        INSERT INTO Usuarios_Registrados 
                        (Id, Nombre_Usuario, Contraseña, Aula, Rol, Email, CheckMail) VALUES 
                        ('{num}', '{self.Usuario}', '{en.RSA_Encrypt()}','{x}' ,'{self.Rol}', '{self.Email}', '{chekMail}')
                        '''
                Cursor.Execute(insert)
            finally:
                return Registro ##Se puede mejorar
        return Registro

    def ConfirmarCorreoRegistro(self):
        name = self.Usuario
        mail = self.Email

        code = rand.Generar_Codigo()
        titulo = f'Confirmación de la cuenta de {name}'
        contexto = f'Bienveni@ a IMD {name}, para poder continuar con la experiencias de IMD debe ingresar el siguiente código {code}.'
        
        InputUser.SendMail(titulo, contexto, mail)

        return code
    
    def UpdateCheckMail(self):
        x = 0
        sql_query = f'''UPDATE Usuarios_Registrados
                    SET CheckMail = '{x}'
                    WHERE Nombre_Usuario = '{self.Usuario}'
                    '''
        
        Cursor.Execute(sql_query)


def VerificarRegistro(Name):
        #El mismo código que en VerificarLogin con algunas modificaciones
        mail = Cursor.getMail(Name)
        lista = Cursor.FetchA(f"SELECT * FROM Usuarios_Registrados WHERE Nombre_Usuario = '{Name}' or Email = '{mail}'")
        if (len(lista) == 0):
            return "Usuario Correcto"
        else:
            return "Usuario o Correo en uso"