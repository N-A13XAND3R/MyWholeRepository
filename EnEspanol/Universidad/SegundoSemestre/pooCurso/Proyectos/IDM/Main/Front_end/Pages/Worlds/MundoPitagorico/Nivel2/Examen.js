let horaInicial;
let respuestas = ['d', 'b', 'c', 'a', 'c'];

let Veces = [false, false];
let Nota = 0;

function Mostrar(imagen) {
    console.log(Nota);
    if (imagen == "CT1" && !Veces[0]) {
        document.getElementById('ContendorTexto1').style.display = "block";
        Nota += 0.25;
        Veces[0] = true;
    } if (imagen == "CT2" && !Veces[1]) {
        Veces[1] = true;
        Nota += 0.25;
        document.getElementById('ContendorTexto2').style.display = "block";
    }
}