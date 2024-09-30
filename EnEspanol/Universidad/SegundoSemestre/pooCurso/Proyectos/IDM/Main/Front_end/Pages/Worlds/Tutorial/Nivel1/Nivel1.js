let name, empe = false, Contar = 0, ApuntadorFigura = -1;
let ArrayOfObjectsToMove = Array.from(document.getElementsByClassName("rectangulo"));
let ArrayOfObjects = [];
let ArrayOfObjectsNotDOM = []

function CrearDivs(x, y) {
    let nuevoDiv = document.createElement('div');
    //estilos básicos
    nuevoDiv.className = "rectangulo";
    nuevoDiv.style.position = 'absolute';
    nuevoDiv.style.background = `rgb(${Math.floor(Math.random() * 256)}, 
                                    ${Math.floor(Math.random() * 256)}, 
                                    ${Math.floor(Math.random() * 256)})`;
    nuevoDiv.style.top = (y) + '%';
    nuevoDiv.style.left = (x + 15) + '%';

    document.body.appendChild(nuevoDiv);
    ArrayOfObjects.push(nuevoDiv);
}
function Pointers() {

    for (let i = 0; i < ArrayOfObjects.length; i++) {
        ArrayOfObjectsNotDOM[i] = new MoverFigura(ArrayOfObjects[i], i);
        //Lista en la que guardo los objetos
    }
}
//función en la que creamos divs y luego los objetos
function empezar() {
    if (!empe) {
        for (var i = 0; i < 8; i++) {
            CrearDivs(10 * i, 12, i);
        }
        Pointers();
        empe = true;

    } else alert("Ya hay un juego en progreso");

}

// Eventos para la manipulación con el teclado

document.addEventListener('keydown', function Evet(evento) {
    if (evento.key.toLowerCase() == 'v') {
        MoverFigura.Verificar();
    } else if (evento.key.toLowerCase() == 's' &&
        ApuntadorFigura != -1) {
        ArrayOfObjectsNotDOM[ApuntadorFigura].soltar()
    }
})