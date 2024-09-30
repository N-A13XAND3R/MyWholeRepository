/* Variables necesarias */
let Jugando = false, counter = 0;
let Variables = Array.from(document.getElementsByClassName('CuadradoPequeño'));
let LimitesPintar = 70;
/* Listas para el control del fijado */

let CuadradosImagen1 = Array.from(document.getElementsByClassName('CuadradoPequeño1'));
let CuadradosImagen2 = [];

/* Fin de listas para el control del fijado */

let DivOld, DivNew, mover, degree = 0;
/* Fin de variables necesarias */

/* Funciones */
function RenameAndFill(List, numberOfList) {
    for (let i = 0; i < List.length; i++) {
        if (List[i].id == ' ') {
            List[i].id = List[i].id + `${i}`;
        }
    }
}

function Jugar(IndexOfList) {
    if (!Jugando) {
        if (IndexOfList < 9) degree = 36.87;
        else degree = 60;
        DivOld = Variables[IndexOfList];
        let positions = DivOld.getBoundingClientRect();
        DivOld.removeAttribute('onclick');

        /* Configuración del nuevo div */
        DivNew = DivOld.cloneNode(true);
        DivNew.id = 'Mover';
        DivNew.style.position = 'absolute';
        DivNew.style.top = positions.top + "px";
        DivNew.style.left = positions.left + "px";
        DivNew.style.transform = `rotate(${degree}deg)`;
        document.body.appendChild(DivNew);
        /* Fin de configuración del nuevo div */

        DivOld.style.background = "rgb(87, 81, 87)";

        if (IndexOfList < 9) mover = new Mover(document.getElementById('Mover'), degree);
        else mover = new Mover2(document.getElementById('Mover'), degree);

        ShowDegree();
        Jugando = true;
    } else alert("Ya está moviendo una figura")
}

function ShowDegree() {
    let Write = document.getElementById("Rotacion");
    Write.style.display = "block";
    Write.innerHTML = `Grado de rotación ${mover.Grado}° 
                    <input type="text" id="IngresarRotacion" onblur="play()">`;

}

function play() {
    let x = document.getElementById('IngresarRotacion').value;
    let Entero = parseInt(x);

    if (isNaN(Entero)) {
        alert("Ingreso de caráteres invalidos, ingrese solo números enteros");
    } else mover._inclinar(Entero, 0);

    ShowDegree();
}

function Pintar(lista, backgroun) {
    for (let i = 0; i < lista.length; i++) {
        lista[i].style.background = `rgb(${backgroun[0] + LimitesPintar},
            ${backgroun[1] + LimitesPintar}, ${backgroun[2] + LimitesPintar})`;
        LimitesPintar *= -1;
    }
}

/* Incio de eventos */
document.addEventListener('keydown', function (evento) {

    if (evento.key == "ArrowRight" &&
        !mover.FiguraMoviendose) {
        mover.cambiarInclinacion(1);
        ShowDegree();
    } else if (evento.key == "ArrowLeft" &&
        !mover.FiguraMoviendose) {
        mover.cambiarInclinacion(-1);
        ShowDegree();
    } else if (evento.key.toLowerCase() == 's') {
        mover.soltar();
    } else if (evento.key.toLowerCase() == 'v') {
        verificar();
    }if (evento.key.toLowerCase() == 'z') {
        counter = 25;
    }
})
/* Fin de eventos */
/* Fin de las funciones */
let lista = [document.getElementsByClassName('CuadradoPequeño'),
document.getElementsByClassName('CuadradoPequeño1')
];

for (let i = 0; i < 2; i++) {
    RenameAndFill(lista[i], i);
}

CuadradosImagen2 = CuadradosImagen1.splice(9, 16);

Pintar(Variables.slice(0, 9), [161, 15, 15]);
Pintar(CuadradosImagen1, [209, 63, 63]);
Pintar(CuadradosImagen2, [38, 226, 195]);
Pintar(Variables.slice(9), [15, 75, 204]);