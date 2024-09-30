let NomFigu = -1, grados = 0, contar = 0;  
let Objects = Array.from(document.getElementsByClassName("LM"));
let Objectives = Array.from(document.getElementsByClassName("L"));
let Rotaciones = [90, 90, 0, 0, 270];

function BeginTheGame() {
    for (let i = 0; i < Objects.length;  i++) {
        Objects[i].onclick = function() {
            NomFigu = i;
            console.log(NomFigu);
        };
        Objects[i] = new MoverFigura(Objects[i], i);
    }
}

function otar() {
    Objects[NomFigu].Rotar();
}

function Verificar() {
    if (contar == 5) {
        alert("Juego terminado");
        localStorage.setItem('mensaje','1');
        window.location.href = "../../Tutorial/Tutorial.html";
    }else alert("Aún hay fichas sin acomodar");
}
/* Eventos con teclas */
document.addEventListener('keydown', function(evento) {
    if (evento.key.toLowerCase() == 's') {
        Objects[NomFigu].soltar();
    }else if (evento.key.toLowerCase() == 'v') {
        MoverFigura.Verificar();
    }else if(evento.key == "ArrowRight") {
        Objects[NomFigu].Rotar()
    }
})

BeginTheGame();