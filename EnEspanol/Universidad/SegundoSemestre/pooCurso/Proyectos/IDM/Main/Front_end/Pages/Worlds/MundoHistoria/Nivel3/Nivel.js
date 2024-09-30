let lista = [], mover, jugando = false, nombreId = "", contador = 0;
let rotaciones = {
    "TrianguloRecortado": -129,
    "TrianguloCompleto": -40,
    "TrianguloGrande": 140,
    "PuntaTriangulo": -129,
    "ParalelepidedoQueNoEsparalelepidedo": 50
}


document.addEventListener('keydown', function (evento) {

    if(evento.key == 'v' && !mover.FiguraMoviendose) {
        mover.rotar(rotaciones[nombreId]);
    }if (evento.key == 's') {
        mover.soltar();
    }if (evento.key.toLowerCase() == 'z') {
        contador = 5;
    }
})

function Revisar() {
    if (contador == 5) {
        alert("Juego terminado, felicidades");
    }else alert(`Aún quedan ${5 - contador} figuras sin acomodar`);
}

function CrearObjeto(objeto) {
    if (!jugando) {
        nombreId = objeto;
        console.log(document.getElementById(objeto + 'h'));
        let div = document.createElement('div');
        let divPadre = document.getElementById(objeto);
        let propiedades = divPadre.getBoundingClientRect();
        console.log(divPadre.getBoundingClientRect());

        div = divPadre.cloneNode(true);
        div.className = objeto;
        div.id = 'Mover';

        divPadre.style.background = "rgb(127, 127, 164)";
        div.style.background = "rgb(230, 230, 134)";
        div.style.border = "none";
        div.style.position = "absolute";
        div.style.top = (propiedades.top) + "px";
        div.style.left = propiedades.left + "px";
        div.style.right = propiedades.right + "px";
        div.style.bottom = propiedades.bottom + "px";

        //remover atributos
        div.removeAttribute('onclick');
        divPadre.removeAttribute('onclick');
        console.log(div);
        document.body.appendChild(div);
        mover = new Mover(document.getElementById('Mover'), document.getElementById(objeto + 'h'));
        jugando = true;
    } else alert("Ya hay un elemento en movimiento");

}