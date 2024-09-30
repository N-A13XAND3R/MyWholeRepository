import sys
# append the path of the parent directory
sys.path.append("src\Back_end")

from DataBase.Du_Crud import DB_DataUsers

Cursor = DB_DataUsers()

class Encrypter: 

    def __init__(self, password): 
        self.modulus = 3233
        self.publicExponent = 65537
        self.privateExponent = 2753  
        self.password = password

    def RSA_Encrypt(self): 
        listOfNum=[]
        for letter in self.password: 
            letter = int.from_bytes(letter.encode(), 'big')
            listOfNum.append(letter)

        final_Password = ''
        for Nums in listOfNum: 
            final_Num = (Nums**self.publicExponent) % self.modulus
            final_Password += str(hex(final_Num))+' '
        return final_Password.rstrip()
    
    def RSA_Decrypt(self, name): 
        encrypted_nums = Cursor.Execute(f"SELECT Contraseña FROM Usuarios_Registrados WHERE Nombre_Usuario = '{name}'")
        encrypted_nums = encrypted_nums.split(' ')

        decrypted_message = ''
        for encrypted_num_str in encrypted_nums:
            encrypted_num = int(encrypted_num_str, 16)
            decrypted_num = (encrypted_num ** self.privateExponent) % self.modulus
            decrypted_message += chr(decrypted_num)

        return decrypted_message
