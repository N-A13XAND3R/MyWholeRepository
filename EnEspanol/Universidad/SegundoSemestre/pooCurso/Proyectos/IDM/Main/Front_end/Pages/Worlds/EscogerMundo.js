class EscogerMundo {
    #Rol = "";
    #Username = "";
    #Classroom;

    constructor() {
        this.#Username = localStorage.getItem('Nombre');
        this.#Rol = localStorage.getItem('Rol');
        this.#Classroom = localStorage.getItem('Aula');

        this.ShowName();
        this._ShowButton();
    }

    ShowName() {
        document.getElementById("Nombre").innerHTML = this.#Username;
    }

    _ShowButton() {

        const button = document.getElementById("Span");

        if (this.#Rol == "Estudiante") {

            if (this.#Classroom == "-1") {
                this.mostrarCarta();
            } else {
                button.style.display = "block";
                button.textContent = `su aula es ${this.#Classroom}`;
                let clas = this.#Classroom;
                button.addEventListener('click', function () {
                    alert(`Usted está en el aula ${clas}`)
                });
                this.mostrar();
                try {
                    document.body.removeChild(document.getElementById("Carta"));
                } catch (error) { }
            }

        } else {
            button.textContent = "Revisar mis aulas";

            button.addEventListener('click', () => Viajar(4));
            button.style.display = "block";
            this.mostrar();
        }
    }

    mostrar() {
        mostrar.style.display = "flex";
    }

    mostrarCarta() {
        const body = document.body;

        let div = document.createElement("div");
        let titulo = document.createElement("div");
        let Contenedor = document.createElement("div");
        let button = document.createElement("button");
        let Input = document.createElement("input");

        div.style.position = "absolute";
        div.style.top = "50%";
        div.style.left = "50%";
        div.style.transform = "translate(-50%, -50%)";
        div.style.width = "45vw";
        div.style.height = "45vh";
        div.style.background = "#856767";
        div.style.display = "flex";
        div.style.flexDirection = "column";
        div.style.justifyContent = "space-around"; // Corrected property name
        div.style.alignItems = "center";
        div.id = "Carta";

        titulo.style.width = "40%";
        titulo.style.height = "20%";
        titulo.style.textAlign = "center";
        titulo.style.fontSize = "1.5vw";
        titulo.textContent = `${this.#Username}, usted debe entrar en un aula
                                para poder hacer los niveles de IMD, ingrese el
                                código de un aula en la siguiente opción.`;

        div.appendChild(titulo);

        Contenedor.style.width = "50%";
        Contenedor.style.height = "30%";
        Contenedor.style.display = "flex";
        Contenedor.style.flexDirection = "row";
        Contenedor.style.justifyContent = "space-around"; // Corrected property name
        Contenedor.style.alignItems = "center";

        div.appendChild(Contenedor);

        Input.setAttribute("class", "Input");
        Input.placeholder = "ingrese el código del aula";
        Input.id = "input";
        Input.type = "text";
        Contenedor.appendChild(Input);

        button.setAttribute("class", "Boton");
        button.textContent = "Ingresar al aula";
        button.addEventListener("click", this.EntrarAlAula.bind(this));
        Contenedor.appendChild(button);

        body.appendChild(div);
    }

    EntrarAlAula() {
        let code = this.formatoCode(document.getElementById("input").value);
        if (code != '0') {
            fetch("http://localhost:5000/Backend/JoinClass", {
                method: "POST",
                mode: "cors",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "Usuario": this.#Username, "Codigo": code })
            })
                .then(response => response.json())
                .then(data => {
                    if (data.pass == "true") {
                        this.#Classroom = code;
                        localStorage.setItem("Aula", code);
                        this._ShowButton();
                        let x = "";

                        for (let i = 0; i < 14; i++) {
                            if (i < 13) x += '-1,';
                            else x += '-1';
                        }
                        localStorage.setItem("Notas", x);
                    }
                    alert(data.mensaje);
                })
                .catch(error => console.error(error))
        }

    }

    formatoCode(code) {
        let guion = code.indexOf('-');

        if (guion != -1 && guion == 3 && code.length == 7) {
            code = code.substring(0, guion) + code.substring(guion + 1)
        } else if (code.length == 6 && guion == -1) {

        } else if (code.length < 6 || 7 < code.length) {
            alert("Cantidad de caracteres invalida");
            return '0';
        } else if (guion != -1 && guion != 3) {
            alert("Mal uso del caracter '-'");
            return '0';
        }
        console.log(code);
        return code;
    }
}

const mostrar = document.getElementById("Mostrar");
const escogerMundo = new EscogerMundo();
