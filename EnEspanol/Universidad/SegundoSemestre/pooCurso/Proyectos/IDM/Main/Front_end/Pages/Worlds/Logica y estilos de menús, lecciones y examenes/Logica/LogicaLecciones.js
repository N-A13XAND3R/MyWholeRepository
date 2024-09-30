var leer = localStorage.getItem('mensaje');

addEventListener('load', function () {
    if (leer == "1") {
        localStorage.setItem('mensaje', '0');
    } else if (leer == "0") {
        window.location.href = '../../../Home/Home.html';
    }
})

function Viajar(direccion) {
    localStorage.setItem('mensaje', '1');
    if (direccion == "Leccion") {
        window.location.href = "Leccion.html";
    } if (direccion == "Menu") {
        window.location.href = "../Menu.html";
    } if (direccion == "Reto") {
        window.location.href = "Nivel.html";
    } if (direccion == "Evaluación") {
        window.location.href = "Examen.html";
    }
}

// con esta el usuario decide hacer el exámen o no
function Eleccion(Mundo, Nivel) {
    document.getElementById('Instrucciones').style.display = "none";
    document.getElementById('Mostrar').style.display = "block";
    let rol = localStorage.getItem("Rol");
    if (rol == "Estudiante") {
        horaInicial = Calificacion.TomarTiempo();
        ModifyLocalStorage(7 * (Mundo - 1) + Nivel - 1);
        Calificacion.EnviarNota(Mundo, Nivel, 0, 0, 1)
    }
}

// esta es la función de verificación de los examenes
function Revision(respuestas, Nota, Mundo, Nivel, bajar = 0.5) {
    let Minutos = 0;

    let Tiempo = Calificacion.TomarTiempo()
    let ResiduoMinutos = (Tiempo - horaInicial) % 60
    Minutos = (Tiempo - horaInicial - ResiduoMinutos) / 60;


    const calificacion = new Calificacion(respuestas, document.getElementById('IngresoRespuestas').value,
        Nota + 0.4 * Minutos);
    let rol = localStorage.getItem("Rol");
    if (rol == "Estudiante") {
        Calificacion.EnviarNota(Mundo, Nivel, calificacion.nota, bajar, 1);
        ModifyLocalStorage(7 * (Mundo - 1) + Nivel - 1, calificacion.nota * bajar);
    } setTimeout(function () { Viajar("Menu") }, 1000);
}

function ModifyLocalStorage(index, nota = 0) {
    let rol = localStorage.getItem("Rol");
    if (rol == "Estudiante") {
        let notas = localStorage.getItem("Notas").split(',');

        notas[index] = `${nota}`;

        localStorage.setItem("Notas", notas);
    }
}

// esta es la función de verificación de los retos
function Verificar(objetos, Acomodados = 0, m, n, r, tipo = 1, respuestas = []) {
    // m means world and n means level
    if (tipo != 1) {
        const calificacion = new Calificacion(respuestas, document.getElementById('IngresoRespuestas').value, 0, 0.5);
        console.log(calificacion.nota);
        Calificacion.EnviarNota(m, r, calificacion.nota, 1, 2);
        ModifyLocalStorage(7 * (m - 1) + 3 + n, calificacion.nota);
        setTimeout(function () { Viajar("Menu") }, 1000);
    } else {
        let nota = 0;
        if (objetos == Acomodados) {
            nota = 2.5;
            Calificacion.EnviarNota(m, r, nota, 1, 2);
            ModifyLocalStorage(7 * (m - 1) + 3 + n, nota);

            alert("Juego terminado, bien hecho");
            Viajar("Menu");
            setTimeout(() => { Viajar("Menu") }, 1000);
        } else alert(`Aún quedan ${objetos - Acomodados} figuras por acomodar`);
    }
}