let horaInicial;
let respuestas = ['c', 'b', 'a', 'a', 'b'];

let Veces = [false, false];
let Nota = 0;

function Mostrar(imagen) {
    console.log(Nota);
    if (imagen == "SistemaN" && !Veces[0]) {
        document.getElementById('Sn').style.display = "block";
        Nota += 0.25;
        Veces[0] = true;
    }if (imagen == "sqrt" && !Veces[1]) {
        Veces[1] = true;
        Nota += 0.25;
        document.getElementById('sqrt').style.display = "block";
    }
}