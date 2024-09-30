var leer = localStorage.getItem('mensaje');
let listOfNotes = [], listOfNotesChallenge = [];

addEventListener('load', function () {
    if (leer == "1") {
        localStorage.setItem('mensaje', '0');
    } else if (leer == "0") {
        window.location.href = direction;
    }
})

//Funciones para viajar entre archivos
function Viajar(direccion) {
    if (direccion == 'P') {
        localStorage.setItem('mensaje', '1');
        window.location.href = "../EscogerMundo.html";
    } else if (direccion == 'Tutorial') {
        localStorage.setItem('mensaje', '1')
        window.location.href = '../Tutorial/Menu.html'
    } else if (direccion == 'Historia') {
        localStorage.setItem('mensaje', '1')
        window.location.href = '../MundoHistoria/Menu.html'
    } else if (direccion == 'Pitagorico') {
        localStorage.setItem('mensaje', '1')
        window.location.href = '../MundoPitagorico/Menu.html'
    } else if (direccion == 'Leccion 1') {
        localStorage.setItem('mensaje', '1');
        window.location.href = "Nivel1/Leccion.html";
    } else if (direccion == 'Examen 1') {
        comporbarNivelHecho(0);
    } else if (direccion == 'Nivel 1') {
        localStorage.setItem('mensaje', '1');
        comporbarRetoHecho(0);
    } else if (direccion == 'Leccion 2') {
        localStorage.setItem('mensaje', '1');
        window.location.href = "Nivel2/Leccion.html";
    } else if (direccion == 'Examen 2') {
        comporbarNivelHecho(1);
    } else if (direccion == 'Nivel 2') {
        comporbarRetoHecho(1);
    } else if (direccion == 'Leccion 3') {
        localStorage.setItem('mensaje', '1');
        window.location.href = "Nivel3/Leccion.html";
    } else if (direccion == 'Examen 3') {
        comporbarNivelHecho(2);
    } else if (direccion == 'Nivel 3') {
        comporbarRetoHecho(2);
    } else if (direccion == 'Leccion 4') {
        localStorage.setItem('mensaje', '1');
        window.location.href = "Nivel4/Leccion.html";
    } else if (direccion == 'Examen 4') {
        comporbarNivelHecho(3);
    } else if (direccion == 'Nivel 4') {
        localStorage.setItem('mensaje', '1');
        window.location.href = "Nivel4/Nivel.html";
    } else if (direccion == 1) {
        localStorage.setItem('mensaje', '1');
        window.location.href = '../Worlds/Tutorial/Menu.html';
    } else if (direccion == 2) {
        localStorage.setItem('mensaje', '1');
        window.location.href = '../Worlds/MundoHistoria/Menu.html';
    } else if (direccion == 3) {
        localStorage.setItem('mensaje', '1');
        window.location.href = '../Worlds/MundoPitagorico/Menu.html';
    } else if (direccion == 4) {
        localStorage.setItem('mensaje', '1');
        window.location.href = "AdminAulas/AdminAulas.html";
    }
}
//Fin de funciones para viajar entre archivos

//funciones de comprobación
function ObtenerListasDeNotas(inicio) {
    let rol = localStorage.getItem("Rol");
    if (rol == "Estudiante") {
        listOfNotes = localStorage.getItem("Notas").split(',').splice(inicio, 7);

        for (let i = 0; i < listOfNotes.length; i++) {
            listOfNotes[i] = parseFloat(listOfNotes[i]);
        }

        listOfNotesChallenge = listOfNotes.splice(4, 3);
    } else {
        listOfNotes = ['-1', '-1', '-1', '-1', '-1', '-1', '-1'];
        listOfNotesChallenge = ['-1', '-1', '-1', '-1', '-1', '-1', '-1'];
    }
}

function comporbarNivelHecho(nivel) {
    let nota = listOfNotes[nivel];

    if (nota == -1) {
        localStorage.setItem('mensaje', '1');
        window.location.href = `Nivel${nivel + 1}/Examen.html`;
    } else alert("Usted ya realizó este examen");
}

function comporbarRetoHecho(reto) {
    let nota = listOfNotesChallenge[reto];

    if (nota == -1) {
        localStorage.setItem('mensaje', '1');
        window.location.href = `Nivel${reto + 1}/Nivel.html`;
    } else alert("Usted ya realizó este reto");
}
//Fin de funciones de comprobación