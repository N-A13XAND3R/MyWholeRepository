var contador = 0;

var leer = localStorage.getItem('mensaje');
//Evento para controlar que el que entre esté dentro de una cuenta
addEventListener('load', function () {
    if (leer == "1") {
        localStorage.setItem('mensaje', '0');
    } else if (leer == "0") {
        window.location.href = '../../../Log-in/Login.html';
    }
})

class MoverSemi {
    constructor(figura) {
        this.figura = figura;
        this.FiguraMoviendose = false;
        this.InicioX = 0;
        this.InicioY = 0;
        this.DirecionDelBorde = this.ObtenerSemi(this.ReconocerBorde(figura));//Un objeto
        this.Acomodado = false;
        //Eventos
        this.figura.addEventListener('mousedown', this.iniciarArrastre.bind(this));
        this.figura.addEventListener('mousemove', this.arrastrar.bind(this));
        this.figura.addEventListener('mouseup', this.soltar.bind(this));
    }

    iniciarArrastre(evento) {
        if (!this.Acomodado) {
            this.FiguraMoviendose = true;
            this.inicioX = evento.clientX - this.figura.getBoundingClientRect().left;
            this.inicioY = evento.clientY - this.figura.getBoundingClientRect().top;
            this.Acomodar();
        }

    }

    arrastrar(evento) {
        if (this.FiguraMoviendose) {
            const x = evento.clientX - this.inicioX;
            const y = evento.clientY - this.inicioY;
            this.figura.style.left = x + 'px';
            this.figura.style.top = y + 'px';
        }
    }

    soltar() {
        this.FiguraMoviendose = false;
    }

    ReconocerBorde(figura) {
        const Estilos = getComputedStyle(figura);

        let borderRadios = Estilos.borderRadius.split(' ');

        let radioSuperiorIzquierdo = borderRadios[0];
        let radioSuperiorDerecho = borderRadios[1];
        let radioInferiorDerecho = borderRadios[2];
        let radioInferiorIzquierdo = borderRadios[3];


        if (radioSuperiorDerecho == "100%") {
            return "SuperiorDerecho";
        } if (radioInferiorDerecho == "100%") {
            return "InferiorDerecho";
        } if (radioSuperiorIzquierdo == "100%") {
            return "SuperiorIzquierdo";
        } if (radioInferiorIzquierdo == "100%") {
            return "InferiorIzquierdo";
        }
    }

    ObtenerSemi(Borde) {
        //Elección del borde, elección importante para
        if (Borde == "SuperiorDerecho") {
            return document.getElementById('cuarto2').getBoundingClientRect();
        } if (Borde == "InferiorDerecho") {
            return document.getElementById('cuarto4').getBoundingClientRect();
        } if (Borde == "SuperiorIzquierdo") {
            return document.getElementById('cuarto1').getBoundingClientRect();
        } if (Borde == "InferiorIzquierdo") {
            return document.getElementById('cuarto3').getBoundingClientRect();
        }
    }

    VerificarGanador() {
        if (contador == 4 && this.Acomodado) {
            return true;
        }
        return false;
    }

    Acomodar() {
        if (!this.VerificarGanador()) {
            const Direct = this.figura.getBoundingClientRect();
            //condición para fijar el cuarto de circulo
            if (Direct.left - 25 <= this.DirecionDelBorde.left &&
                Direct.right + 25 >= this.DirecionDelBorde.right && !this.Acomodado) {
                this.figura.style.left = this.DirecionDelBorde.left + 'px';
                this.figura.style.top = this.DirecionDelBorde.top + 'px';
                this.InicioX = this.DirecionDelBorde.left;
                this.InicioY = this.DirecionDelBorde.top;
                contador += 1;
                this.Acomodado = true;

                this.soltar();
            }
        }
    }
}

const Semi1 = new MoverSemi(document.getElementById('MovCuarto1'));
const Semi2 = new MoverSemi(document.getElementById('MovCuarto2'));
const Semi3 = new MoverSemi(document.getElementById('MovCuarto3'));
const Semi4 = new MoverSemi(document.getElementById('MovCuarto4'));

function VerificarFin() {
    console.log(contador);
    if (contador == 4) {
        alert("Juego terminado");
        localStorage.setItem('mensaje', '1');
        window.location.href = "../../Tutorial/Tutorial.html";
    } else alert("No ha terminado");
}
function Principal() {
    localStorage.setItem('mensaje', '1');
    window.location.href = '../../Tutorial/Tutorial.html';
}