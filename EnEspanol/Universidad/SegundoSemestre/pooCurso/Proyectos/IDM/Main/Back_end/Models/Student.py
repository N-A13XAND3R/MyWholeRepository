from DataBase.Du_Crud import DB_DataUsers

Cursor = DB_DataUsers()

class Student():

    def Unirse_Aula_Virtual(Usuario, codigo, mail):
        # Check if the classroom table exists
        if Cursor.FetchOId(f"SELECT name FROM sqlite_master WHERE type='table' AND name = 'Aula_{codigo}'") is not None:
            sql_input = f'''
                        INSERT INTO 'Aula_{codigo}'
                        (Nombre_Estudiante, Correo)
                        VALUES ('{Usuario}','{mail}')
                        '''
            Cursor.Execute(sql_input)
            sql_input = f'''
                        UPDATE Usuarios_Registrados
                        SET Aula = '{codigo}'
                        WHERE Nombre_Usuario = '{Usuario}'
                        '''
            Cursor.Execute(sql_input)
            Student.__InicializarDatos__(Usuario, codigo)
            return f"Se ha unido al  aula {codigo} exitosamente", "true"
        else:
            return f"El aula {codigo} no existe", "false"


    def __InicializarDatos__(nombre, codigo):
        for i in range(1,3):
            sql_cmd = f'''
                        INSERT INTO 'Mundo{i}_{codigo}'
                        (Nombre_Estudiante, '{i}.Nivel_1', '{i}.Nivel_2', '{i}.Nivel_3', '{i}.Nivel_4', '{i}.Reto_1', '{i}.Reto_2', '{i}.Reto_3')
                        VALUES ('{nombre}', -1, -1, -1, -1, -1, -1, -1)
                    '''
            Cursor.Execute(sql_cmd)