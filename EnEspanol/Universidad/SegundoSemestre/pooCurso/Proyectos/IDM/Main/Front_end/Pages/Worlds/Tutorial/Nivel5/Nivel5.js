var contador = 0;

var Mensaje = localStorage.getItem('mensaje');
//Funciones necesarias
addEventListener('load', function() {
    if (Mensaje == "1") {
        this.localStorage.setItem('Nombre','');
        localStorage.setItem('mensaje','0');
    }else if(Mensaje == "0") {
        window.location.href = '../../../Log-in/Login.html';
    }  
})

class MoverUno {
    constructor(figura, referencia) {
        this.figura = figura;
        this.FiguraMoviendose = false;
        this.InicioX = 0;
        this.InicioY = 0;
        this.Fijado = false;
        this.referencia = referencia.getBoundingClientRect();
        //Eventos
        this.figura.addEventListener('mousedown', this.iniciarArrastre.bind(this));
        this.figura.addEventListener('mousemove', this.arrastrar.bind(this));
        this.figura.addEventListener('mouseup', this.soltar.bind(this));
        //figuras
    }
    iniciarArrastre(evento) {
        if(!this.Fijado) {
            this.FiguraMoviendose = true;
            this.inicioX = evento.clientX - this.figura.getBoundingClientRect().left;
            this.inicioY = evento.clientY - this.figura.getBoundingClientRect().top;
            this.fijar();
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

    fijar() {
       
        let AyudaFijar = this.figura.getBoundingClientRect();
        let Fijar = this.referencia;
        console.log(Fijar);
        console.log(AyudaFijar);
        //condición
        if (AyudaFijar.left - 25 <= Fijar.left &&
            AyudaFijar.right + 25 >= Fijar.right &&
            AyudaFijar.top - 25 <= Fijar.top && 
            AyudaFijar.bottom + 25 >= Fijar.bottom) {
                this.figura.style.left = this.referencia.left + 'px';
                this.figura.style.top = this.referencia.top + 'px';
                this.InicioX = this.referencia.left;
                this.InicioY = this.referencia.top;
                contador += 1;
                this.Fijado = true;
                this.soltar();
            }
    }
}

const Cabeza = new MoverUno(document.getElementById('CabezaMovible'), document.getElementById('Cabeza'));
const Cuerpo = new MoverUno(document.getElementById('CuerpoMov'),document.getElementById('Cuerpo'));
const ojo1 = new MoverUno(document.getElementById('ojo1Mov'),document.getElementById('ojo1'));
const ojo2 = new MoverUno(document.getElementById('ojo2Mov'),document.getElementById('ojo2'));
const Boca = new MoverUno(document.getElementById('BocaMov'),document.getElementById('boca'));
const Boton1 = new MoverUno(document.getElementById('Boton1Mov'),document.getElementById('Boton1'));
const Boton2 = new MoverUno(document.getElementById('Boton2Mov'),document.getElementById('Boton2'));
const Boton3 = new MoverUno(document.getElementById('Boton3Mov'),document.getElementById('Boton3'));

function VerificarFinal() {
    if(contador == 8) {
        alert("Juego terminado, felicitaciones");
        localStorage.setItem('mensaje','1');
        window.location.href = "../../Tutorial/Tutorial.html"; 
    }else alert("Aun hay figuras sin acomodar");
}
function Irse() {
    localStorage.setItem('mensaje','1');
    window.location.href = "../../Tutorial/Tutorial.html"; 
}