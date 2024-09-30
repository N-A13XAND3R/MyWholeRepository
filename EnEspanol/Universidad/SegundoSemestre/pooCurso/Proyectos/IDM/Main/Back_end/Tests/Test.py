#archivo de prueba para envio de correos
from verify_email import verify_email
from email.message import EmailMessage
from ssl import create_default_context
from smtplib import SMTP_SSL

mail_sender = 'interactivemathematicaldemons@gmail.com'
password = 'jvjn shlv nzdf qpiy'
mail_receiver = ['salomon152343@gmail.com', 'sa4476002@gmail.com']

subject = 'RECUPERACION DE LA CONTRASEÑA'
body = f'''
    Tu contraseña de Interactive Mathematical demonstration es: {123}
    '''

em = EmailMessage()
em['From'] = mail_sender
em['To'] = ['sa4476002@gmail.com']
em['Subject'] = subject
em.set_content(body)

context = create_default_context()

with SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp: 
    smtp.login(mail_sender, password)
    smtp.sendmail(mail_sender, mail_receiver, em.as_string())