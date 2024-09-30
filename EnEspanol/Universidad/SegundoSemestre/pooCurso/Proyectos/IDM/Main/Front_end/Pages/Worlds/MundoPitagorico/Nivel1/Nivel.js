let FigurasPorAcomodar = Array.from(document.getElementsByClassName('TrianguloCuadrado2'));

let FigurasAcomodadas = [false, false, false, false];
let Playing = false, move, counter = 0;

let Valores = {
    "D1": [[90, -1, -1], [270, 1, 1]],
    "D2": [[270, -1, -1], [90, 1, 1]],
    "D3": [[0, 1, -1], [180, -1, 1]],
    "D4": [[0, -1, 1], [180, 1, -1]],
}

function CreateObject(Name, degree) {
    if (!Playing) {
        let DivFather = document.getElementById(Name);
        let DivFatherAtributtes = DivFather.getBoundingClientRect();
        let NewDiv = document.createElement('div');

        DivFather.removeAttribute('onclick');
        DivFather.style.background = "rgb(100, 100, 100)"

        NewDiv = DivFather.cloneNode(true);
        NewDiv.style.transform = `rotate(${degree}deg)`
        NewDiv.id = "Mover";
        NewDiv.style.background = "rgb(148, 132, 132)";
        NewDiv.style.left = DivFatherAtributtes.left + "px";
        NewDiv.style.top = DivFatherAtributtes.top + "px";

        document.body.appendChild(NewDiv);
        move = new Mover(document.getElementById("Mover"), degree);
        Playing = true;
    } else alert("Ya está moviendo una figura")
}

document.addEventListener('keydown', function (event) {
    if ((event.key.toLocaleLowerCase() == 'x' ||
        event.key.toLocaleLowerCase() == 'y')
        && !move.FiguraMoviendose) {
        move.Reflex(event.key.toLocaleLowerCase());
    } if (event.key == 's') {
        move.soltar();
    } if (event.key == 'ArrowRight' &&
        !move.FiguraMoviendose) {
        move.Rotate(90);
    } if (event.key == 'ArrowLeft' &&
        !move.FiguraMoviendose) {
        move.Rotate(-90);
    } if (event.key.toLowerCase() == 'v') {
        Verificar()
    } if (event.key.toLowerCase() == 'z') {
        counter = 4;
    }
})