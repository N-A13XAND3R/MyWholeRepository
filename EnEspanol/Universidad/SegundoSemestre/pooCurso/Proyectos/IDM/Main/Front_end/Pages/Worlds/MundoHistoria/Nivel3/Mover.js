class Mover {
    constructor(figura, referencia) {
        console.log(referencia);
        this.figura = figura;
        this.FiguraMoviendose = false;
        this.InicioX = 0;
        this.InicioY = 0;
        this.referencia = referencia;
        this.Rotacion = false;

        this.figura.addEventListener('mousedown', this.iniciarArrastre.bind(this));
        this.figura.addEventListener('mousemove', this.arrastrar.bind(this));
        this.figura.addEventListener('mouseup', this.soltar.bind(this));
    }

    iniciarArrastre(evento) {
        this.FiguraMoviendose = true;
        this.inicioX = evento.clientX - this.figura.getBoundingClientRect().left;
        this.inicioY = evento.clientY - this.figura.getBoundingClientRect().top;
        this.fijar();
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

    rotar(rotacion) {
        this.figura.style.transform = `rotate(${rotacion + 307}deg)`
        this.Rotacion = true;
    }

    fijar() {
        let ayuda = this.figura.getBoundingClientRect();
        let referencia = this.referencia.getBoundingClientRect();

        if (ayuda.left - 25 <= referencia.left &&
            ayuda.right + 25 >= referencia.right &&
            ayuda.top - 25 <= referencia.top &&
            ayuda.bottom + 25 >= referencia.bottom && this.Rotacion) {
            this.finalizar();
        }
    }

    finalizar() {
        contador += 1;
        let divMovible = document.getElementById('Mover');
        let divReferencia = this.referencia;

        console.log(divReferencia.background);


        document.body.removeChild(divMovible);
        jugando = false;
        function DarColor() {

        }
    }
}