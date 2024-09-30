let contador = 0;

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
                this.Fijado = true;
                contador += 1;
                this.soltar();
            }
    }
}
const Triangulo = new MoverUno(document.getElementById('TrianguloMovible'),document.getElementById('Triangulo'));
const Rectangulo = new MoverUno(document.getElementById('RectanguloMovible'),document.getElementById('Rectangulo'));
const Paralelogramo = new MoverUno(document.getElementById('ParalelogramoMovible'),document.getElementById('dibujo'));
const Puerta = new MoverUno(document.getElementById('PM'),document.getElementById('Puerta'))

let C1B = false, C2B = false, C3B= false;
//Circulo n boolean

class MoverCirculo {
    constructor(figura) {
        this.figura = figura;
        this.FiguraMoviendose = false;
        this.InicioX = 0;
        this.InicioY = 0;
        this.Fijado = false;
        //Eventos
        this.figura.addEventListener('mousedown', this.iniciarArrastre.bind(this));
        this.figura.addEventListener('mousemove', this.arrastrar.bind(this));
        this.figura.addEventListener('mouseup', this.soltar.bind(this));
        //Posibles teselaciones
        this.Circulo1 = document.getElementById('C1').getBoundingClientRect();
        this.Circulo2 = document.getElementById('C2').getBoundingClientRect();
        this.Circulo3 = document.getElementById('C3').getBoundingClientRect();
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
        let C1 = this.Circulo1; let C2 = this.Circulo2;
        let C3 = this.Circulo3; let AyudaFijar = this.figura.getBoundingClientRect();
        //Condiciones para fijar
        if (AyudaFijar.left - 25 <= C1.left &&
            AyudaFijar.right + 25 >= C1.right &&
            AyudaFijar.top -25 <= C1.top &&
            AyudaFijar.bottom + 25 >= C1.bottom && !C1B) {
                this.figura.style.left = this.Circulo1.left + 'px';
                this.figura.style.top = this.Circulo1.top + 'px';
                this.InicioX = this.Circulo1.left;
                this.InicioY = this.Circulo1.top;
                this.Fijado = true;
                contador += 1;
                C1B = true;
                this.soltar();
            }
        if (AyudaFijar.left - 25 <= C2.left &&
            AyudaFijar.right + 25 >= C2.right &&
            AyudaFijar.top -25 <= C2.top &&
            AyudaFijar.bottom + 25 >= C2.bottom && !C2B) {
                this.figura.style.left = this.Circulo2.left + 'px';
                this.figura.style.top = this.Circulo2.top + 'px';
                this.InicioX = this.Circulo2.left;
                this.InicioY = this.Circulo2.top;
                this.Fijado = true;
                C2B = true;
                contador += 1;
                this.soltar();
            }
        if (AyudaFijar.left - 25 <= C3.left &&
            AyudaFijar.right + 25 >= C3.right &&
            AyudaFijar.top -25 <= C3.top &&
            AyudaFijar.bottom + 25 >= C3.bottom && !C3B) {
                this.figura.style.left = this.Circulo3.left + 'px';
                this.figura.style.top = this.Circulo3.top + 'px';
                this.InicioX = this.Circulo3.left;
                this.InicioY = this.Circulo3.top;
                this.Fijado = true;
                C3B = true;
                contador += 1;
                this.soltar();
            }     
    }
}
const C1 = new MoverCirculo(document.getElementById('CM1'));
const C2 = new MoverCirculo(document.getElementById('CM2'));
const C3 = new MoverCirculo(document.getElementById('CM3'));

function VerificarFinal() {
    if(contador == 7) {
        alert("Juego terminado");
        Viajar('Menu')
    }else alert("Aun hay figuras sin acomodar");
}
