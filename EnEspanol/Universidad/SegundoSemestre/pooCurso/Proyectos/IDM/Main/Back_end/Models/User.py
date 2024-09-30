import sys
# append the path of the parent directory
sys.path.append("src\Back_end")

from DataBase import Du_Crud
from email.message import EmailMessage
from ssl import create_default_context
from smtplib import SMTP_SSL
from Utils.Random import Randomizer

Cursor = Du_Crud.DB_DataUsers()
rand = Randomizer()


class InputUser:
    def __init__(self, Usuario: str, Contraseña: str, Rol: str, Email: str):#constructor
        self.Usuario = str(Usuario)
        self.Contraseña = str(Contraseña)
        self.Rol = 1 if(str(Rol) == "Estudiante") else 2
        self.Email = str(Email)
        self.modulus = 3233
        self.publicExponent = 65537
        self.privateExponent = 2753  
        self.x = '-1'

        @property
        def Usuario(self):
            return self.Usuario
        
        @property
        def Contraseña(self):
            return self.Contraseña
        
        @Contraseña.setter
        def Contraseña(self, Contraseña):
            self.Contraseña = Contraseña

        @property
        def Rol(self):
            return self.Rol
        
        @property
        def Email(self):
            return self.Email
        
        Cursor.InicializarTablas()

    def SendMail(titulo, context, destinators = []):
        mail_sender = 'interactivemathematicaldemons@gmail.com'
        password = 'jvjn shlv nzdf qpiy'
        em = EmailMessage()

        em['From'] = mail_sender
        em['To'] = destinators
        em['Subject'] = titulo
        em.set_content(context)

        contextMail = create_default_context()

        with SMTP_SSL('smtp.gmail.com', 465, context = contextMail) as smtp: 
            smtp.login(mail_sender, password)
            smtp.sendmail(mail_sender,destinators, em.as_string())
