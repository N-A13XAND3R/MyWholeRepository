let horaInicial;
let respuestas = ['b', 'c', 'd', 'd', 'd'];
let Veces = false;
let Nota = 0;

function Mostrar(imagen) {
    console.log(Nota);
    if (imagen == "Tablillas" && !Veces) {
        document.getElementById('Tablillas').style.display = "block";
        Nota += 0.25;
        Veces = true;
    }
}