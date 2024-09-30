class Login {
    //Variables
    #Username; #UserPassword;
    #CodeVerify;//bool es true si y solo si se digitó bien el usuario y contraseña
    //Inicio de funciones set,get y constructor
    constructor() {
        this.#Username = "";
        this.#UserPassword = "";
        this.#CodeVerify = "";
        this.ListToSavePass = ["a", "b"];
    }

    get GetName() {
        return this.#Username;
    }

    Name(UserName) {
        this.#Username = UserName;
    }
    //fin de funciones set, get y constructor

    //Guardar usuario
    SaveUser() {
        let NameHelp = document.getElementById("InputUser").value;
        let PassHelp = document.getElementById("InputPassword").value;

        if (NameHelp != "" && PassHelp != "") {
            this.#UserPassword = PassHelp;
            this.#Username = NameHelp;
            document.body.classList.add("disabled");
            this.SendData();
        } else this.AlertUser(NameHelp, PassHelp);

    }

    //Método para alertar que se está insertando algo mal
    AlertUser(Name, Pass) {
        let Help = "", bool = false;
        if (Name == "") {
            Help += "Usuario incorrecto. ";
        } if (Pass == "") {
            bool = true;
            Help += "Contraseña vacía. ";
        } if (Pass.length < 8 && bool == false) {
            Help += "Contraseña invalida.";
        }
        alert(Help);
    }

    //Función con la única condición para poder recuperar la cuenta
    CompareCodes() {
        let code = document.getElementById("InputCode").value;
        if (this.#CodeVerify == code) {
            const Recover = document.getElementsByClassName("Recover")[0];
            Recover.innerHTML = "";
            Recover.innerHTML = `<h2>Elija una nueva contraseña</h2>
                                <input type="password" 
                                id = "Pass1"
                                class="Plantilla" 
                                onblur="user.ListToSavePass[0] = document.getElementById('Pass1').value">
                                <input type="password" 
                                id = "Pass2"
                                class="Plantilla" 
                                onblur="user.ListToSavePass[1] = document.getElementById('Pass2').value;
                                user.ComparePass()">`;
        }
        else alert("No es el código correcto");
    }

    VerifyCode() {
        let code = document.getElementById("code").value;
        if (this.#CodeVerify == code) controler.FillCartPassWordNew();
        else alert("Los códigos no coinciden");
    }

    VerifyPassWord() {
        const Pass1 = document.getElementById("NewPass").value;
        const Pass2 = document.getElementById("NewPassConfirm").value;
        if (Pass1 == Pass2) this.ChangePassword(Pass1);
        else alert("Las contraseñas no coinciden.");
    }
    //Enviar información al back-end
    SendData() {
        fetch('http://localhost:5000/Backend/Login_Usuario', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'Nombre': this.#Username,
                'Contraseña': this.#UserPassword,
                'Correo': ""
            })
        }
        )
            .then(response => response.json())
            .then(data => {
                if (data.mensaje != "Usuario o Contraseña Incorrectos") {
                    localStorage.setItem('Rol', data.Rol)
                    localStorage.setItem('mensaje', '1');
                    localStorage.setItem('Nombre', this.#Username);
                    localStorage.setItem('Aula', data.Aula);
                    localStorage.setItem('Notas', data.Notas);
                    this.ChangeNotas();
                    if (data.Check == "0")
                        window.location.href = '../Worlds/EscogerMundo.html';
                    else {
                        regis.Name(this.#Username);
                        regis.Code(data.code);
                        controler.FillCartCodeVerify();
                    }
                } else alert(data.mensaje);
                document.body.classList.remove("disabled");
            })
            .catch(error => console.error('Error:', error));
    }

    RecoverMail() {
        fetch("http://localhost:5000/Backend/RecoverCount", {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'Nombre': this.#Username })
        })
            .then(response => response.json())
            .then(data => {
                let Cart = document.body;
                Cart.classList.remove("disabled");
                if (data.mensaje != "El usuario no existe") {
                    controler.FillCartRecover();
                    this.#CodeVerify = data.mensaje;

                } else alert(data.mensaje);
            })
            .catch(error => console.error("Error: ", error));
    }
    //cambiar la contraseña en el back-end
    ChangePassword(pass) {
        fetch("http://localhost:5000/Backend/ChangePassword", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ "Nombre": this.#Username, "Contraseña": pass })
        })
            .then(response => response.json())
            .then(data => {
                controler.FillCartLogIn();
                data.mensaje;
            })
            .catch(error => console.error("Error: ", error));
    }

    ChangeNotas() {
        let notas = localStorage.getItem('Notas');

        notas = notas.split(',');

        for (let i = 0; i < notas.length; i++) {
            if (isNaN(parseInt(notas[i]))) {
                notas.splice(i, 1);
            } else notas[i] = parseInt(notas[i]);
        }

        localStorage.setItem("Notas", notas)
    }
}
//objeto para la creación de usuario y contraseña
const user = new Login();