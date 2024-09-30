let cargando = false;
let dta, notes, counter = 1;
const SendMail = ['<img src="../../../Imagenes/Controler/OpenMail.png" class="fix" alt="return" id="img-show">', 
                  '<img src="../../../Imagenes/Controler/CloseMail.png" class="fix" alt="return" id="img-show">'];

class AdminAulas {
    #Aula = ""; #UserName = ""; #List; #Select = 0;
    #classrooms = []; #MailsStudents = "";
    constructor() {
        this.#UserName = localStorage.getItem("Nombre");
        this.#List = ["../../../Imagenes/Controler/Mostrar.png", 
                     "../../../Imagenes/Controler/Cerrar.png"];

        this.ShowName();
        this.AskForCurs();
    }

    ShowName() {
        const titulo = document.getElementById("Titulo");

        titulo.innerHTML = `Bienvenido profesor ${this.#UserName}`;
        titulo.style.fontSize = "3vw";
        titulo.style.color = "white";
    }

    ShowCur() {
        const cur = document.getElementById("Cur");

        if (!cargando) {
            this.#Select += 1;
        } else alert("Está cargando otro proceso.");


        if (this.#Select % 2 == 1 && !cargando) {
            cargando = true;
            this.AskForCurs();
            new BuildProgressVar(document.getElementById("BODY"), "la información de sus aulas");
        } else if (this.#Select % 2 == 0) {
            document.getElementById("BODY").innerHTML = "";
            document.getElementById("Notes").innerHTML = "";
            document.getElementsByClassName("context")[0].value = "";

            let x = document.getElementById("mailSender");
            if (x != null) document.getElementById("ContenedorBotones").removeChild(x);
            document.getElementById("InputSender").style.display = "none";

        }
        document.getElementById("img-show").setAttribute("src", this.#List[this.#Select % 2]);
    }

    BuildTable() {
        const table = document.createElement("Table");

        table.setAttribute("class", "table-styleCourses");
        let result = "";
        if (this.#classrooms.length == 0) {
            table.innerHTML = "<thead><tr><th>Usted no tiene aulas</th></thead>"
        } else {
            for (let i = 0; i < this.#classrooms.length; i++) {
                result += `<tr>
                            <td>${this.#classrooms[i]}</td>
                            <td><img class='showcur' src='../../../Imagenes/Controler/aula.png'
                            onclick='adminAulas.AskForInfoOfClassroom("${this.#classrooms[i]}")'></td>
                            </tr>`;

            }

            table.innerHTML = `<thead><tr><th>Códigos aulas</th><th>Info Aula</th></tr></thead><tbody>${result}</tbody>`;
        }

        table.id = "tableClassrooms";

        document.getElementById("BODY").appendChild(table);
    }

    buildTableStudents(infoSalon) {
        this.#MailsStudents = "";
        const table = document.createElement("table");
        table.setAttribute("class", "table-styleCourses");
        let result = "";
        let lengthInfo = Object.keys(infoSalon).length;
        // las llaves son los nombres de los estudiantes
        // los valores son los correos
        if (lengthInfo == 0) {
            table.innerHTML = "<thead><tr><th>No hay estudiantes en esta aula</th></tr></thead>";
        } else {
            let keys = Object.keys(infoSalon);
            let values = Object.values(infoSalon);

            for (let i = 0; i < lengthInfo; i++) {
                i < lengthInfo - 1 ? this.#MailsStudents += `${values[i]},` : this.#MailsStudents += `${values[i]}`;
                result += `<tr><td>${keys[i]}</td><td>${values[i]}</td>
                            <td><img class='showcur' onclick='adminAulas.AskForStudents("${this.#Aula}", "${keys[i]}")'
                            src='../../../Imagenes/Controler/notasind.png'>
                             </td></tr>`;
            }

            table.innerHTML = `<thead><tr>
                                <th>Nombre del estudiante</th>
                                <th>Correo</th>
                                <th><img class='showcur'
                                onclick="adminAulas.AskForStudents('${this.#Aula}', 'Aula')"
                                src='../../../Imagenes/Controler/aulatod.png'></th>
                                </tr></thead>
                                <tbody>${result}</tbody>`;

            const button = document.createElement("div");
            button.setAttribute("id", "Menu");
            button.id = "mailSender";
            button.innerHTML = '<img src="../../../Imagenes/Controler/OpenMail.png" class="fix" alt="return" id="img-show">';
            button.addEventListener("click", () => {
                let input = document.getElementById("InputSender");
                if (counter % 2 == 1) {
                    button.innerHTML = SendMail[1];
                    input.style.display = "flex";
                    input.style.flexDirection = "column";
                    input.style.justifyContent = "space-around";
                    input.style.alignItems = "center";
                } else {
                    document.getElementsByClassName("context")[0].value = "";
                    input.style.display = "none";
                    button.innerHTML = SendMail[0];
                }
                counter++;
            });
            document.getElementById("ContenedorBotones").appendChild(button);
        }

        table.id = "TableStudents";

        document.getElementById("BODY").appendChild(table);
    }


    ClearTableStudent() {

        try {
            document.getElementById("BODY").removeChild(document.getElementById("TableStudents"));
        } catch { }
    }

    CrateTableNotes() {
        const table = document.createElement("table");

        let keys = Array.from(Object.keys(notes));
        let values = Array.from(Object.values(notes));
        let result = "";
        let rW1 = "";
        let rW2 = "";

        for (let i = 0; i < keys.length; i++) {
            for (let j = 0; j < values[i].length; j++) {
                let world2 = Array.from(values[i].split(','));
                let world1 = world2.splice(0, 7);
                rW1 = "";
                rW2 = "";

                for (let k = 0; k < 4; k++) {
                    if (world2[k] == '-1.0') world2[k] = '0';
                    if (world1[k] == '-1.0') world1[k] = '0';
                    try {
                        if (world1[k + 4] == "-1.0") world1[k + 4] = '0';
                        if (world2[k + 4] == "-1.0") world2[k + 4] = '0';
                    } catch { }

                    if (k != 3) {
                        rW1 += `<td>${parseFloat(world1[k]) + parseFloat(world1[k + 4])}</td>`;
                        rW2 += `<td>${parseFloat(world2[k]) + parseFloat(world2[k + 4])}</td>`;
                    } else {
                        rW1 += `<td>${world1[k]}</td>`;
                        rW2 += `<td>${world2[k]}</td>`;
                    }
                }
            }
            result += `<tr>
                       <td>${keys[i]}</td>
                       <td><table>
                       <thead>
                       <tr>
                       <th>Nivel 1</th> 
                       <th>Nivel 2</th>
                       <th>Nivel 3</th>
                       <th>Nivel 4</th></tr>
                       </thead>
                       <tbody>
                       <tr>${rW1}</tr>
                       </tbody>
                       </table></td>
                       <td><table>
                       <thead>
                       <tr>
                       <th>Nivel 1</th> 
                       <th>Nivel 2</th>
                       <th>Nivel 3</th>
                       <th>Nivel 4</th></tr>
                       </thead>
                       <tbody>
                       <tr>${rW2}</tr>
                       </tbody>
                       </table></td>
                       </tr>`
        }

        table.innerHTML = `<thead><tr>
                            <th>Estudiante</th>
                            <th>Mundo Historico</th>
                            <th>Mundo Griego</th></tr></thead>
                            <tbody>
                            ${result}
                            </tbody>`

        table.style.width = "100%";
        table.setAttribute("class", "table-styleCourses");
        document.getElementById("Notes").appendChild(table);
    }

    AskForCurs() {

        fetch('http://localhost:5000/Backend/InfoBasica/Aulas', {
            method: "POST",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "Usuario": this.#UserName })
        })
            .then(response => response.json())
            .then(data => {
                this.#classrooms = data.Aulas;
            })
            .catch(error => console.error('Error:', error));

    }

    CreateClass() {
        document.body.classList.add("disabled");
        fetch("http://localhost:5000/Backend/CrearAula", {
            method: "POST",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "Usuario": this.#UserName })
        })
            .then(response => response.json())
            .then(data => {
                document.body.classList.remove("disabled");
                alert(data.mensaje);
            })
            .catch(error => console.error(error))
    }

    AskForInfoOfClassroom(classroom) {
        if (!cargando) {
            try {
                let x = document.getElementById("mailSender");
                document.getElementById("ContenedorBotones").removeChild(x);
            } catch { }
            document.getElementById("Notes").innerHTML = "";
            document.getElementsByClassName("context")[0].value = "";
            let x = document.getElementById("InputSender");
            x.style.display = "none";
            fetch("http://localhost:5000/Backend/InfoAula", {
                method: "POST",
                mode: "cors",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "Codigo": classroom })
            })
                .then(response => response.json())
                .then(data => {
                    dta = data.InfSalon;
                })
                .catch(error => console.error(error))
            this.ClearTableStudent();
            new BuildProgressVar(document.getElementById("BODY"), "aula " + classroom, 0);
            this.#Aula = classroom;
        } else alert("Está cargando otro proceso.");

    }

    AskForStudents(classroom, estudiante) {
        if (!cargando) {
            document.getElementById("Notes").innerHTML = "";
            fetch("http://localhost:5000/Backend/Calificaciones/PedirNotas", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ "Aula": classroom, "Nombre": estudiante })
            })
                .then(response => response.json())
                .then(data => {
                    notes = data;
                })
                .catch(error => console.error(error))
            new BuildProgressVar(document.getElementById("Notes"), "notas de " + estudiante, 2);
        } else alert("Está cargando otro proceso")
    }

    SendMail() {
        const context = document.getElementsByClassName("context")[0].value;
        if (context != "") {
            document.body.classList.add("disabled");
            fetch("http://localhost:5000/Backend/EnviarCorreos", {
                method: "POST",
                mode: "cors",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "Aula": this.#Aula, "destinatarios": this.#MailsStudents,
                    "contexto": context, "Profesor": this.#UserName
                })
            })
                .then(response => response.json())
                .then(data => {
                    document.getElementsByClassName("context")[0].value = "";
                    document.body.classList.remove("disabled");
                    alert("Se envió el correo al aula " + this.#Aula);
                })
                .catch(error => console.error(error))
        } else alert("El correo no puede estar vacío.");
    }
}