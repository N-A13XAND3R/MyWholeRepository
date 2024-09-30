from Models.User import InputUser, Cursor, rand
from Models.Registro import VerificarRegistro
from Utils.Encrypter import Encrypter

def constructor(data: dict):
    Nombre = data.get('Nombre')
    Contraseña = data.get('Contraseña')
    Email = data.get('Correo')
    Rol = data.get('Rol')
    # the user-login object
    User = Login(Nombre, Contraseña, Rol, Email)

    x = User.VerificarLogin()
    if x != "Usuario o Contraseña Incorrectos":
        check = Cursor.getCheckMail(Nombre)
        code = "0"
        User.Email = Cursor.getMail(Nombre)
        if str(check) == "-1":
            code = User.ConfirmarCorreoRegistro()
        #verifico que haya confirmado su email, si no lo hace, no puede ingresar a la página
        return User.VerificarLogin(), Cursor.getRol(Nombre), Cursor.getAula(Nombre), code, check
        
    else: 
        return "Usuario o Contraseña Incorrectos"

def construnctorObject(data: dict, x = 1):
    #con el 1 es un mail normal, con el 2 es cambio de contraseña
    Nombre = data.get('Nombre')
    Contraseña = "" if x == 1 else data.get("Contraseña")
    try:
        Email = Cursor.getMail(Nombre)
    except:
        return "El usuario no existe"

    Rol = ""
    User = Login(Nombre, Contraseña, Rol, Email)
    return User

class Login(InputUser):

    def __init__(self, Usuario: str, Contraseña: str, Rol: str, Email: str):
        # calling the super-constructor
        super().__init__(Usuario, Contraseña, Rol, Email)

    def VerificarLogin(self):
        # Aqui supongo que la contraseña no esta encriptada
        en = Encrypter(self.Contraseña)
        name = self.Usuario 
        password = en.RSA_Encrypt()

        store_info = Cursor.FetchA(f"SELECT * FROM Usuarios_Registrados WHERE Contraseña = '{password}' AND Nombre_Usuario = '{name}'")
        if (store_info == []): 
            return "Usuario o Contraseña Incorrectos"
        else: 
            return "Usuario recibido"
        
    def RecuperarContraseña(self):
        if VerificarRegistro(self.Usuario) == "Usuario o Correo en uso":
            name = self.Usuario
            mail_receiver = self.Email

            code = rand.Generar_Codigo()
            titulo = f'Recuperación de la contraseña de la cuenta de {name}'
            contexto = f'El código de recuperación de la cuenta de {name} es {code}'

            InputUser.SendMail(titulo,contexto,mail_receiver)

            return code
        return "El usuario no existe"
        
    def UpdatePassWord(self):
        en = Encrypter(self.Contraseña)
        #es mejor crear un objeto y usar sus métodos
        sql_query = f"UPDATE Usuarios_Registrados SET Contraseña = '{en.RSA_Encrypt()}' WHERE Nombre_Usuario = '{self.Usuario}'"
        
        Cursor.Execute(sql_query)