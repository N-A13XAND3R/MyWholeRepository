class MoverFigura {
    /* index es el índice dónde aparace el objeto
       en la lista Objects */
    constructor(figura, index = 0) {
        this.figura = figura;
        this.index = index;
        this.FiguraMoviendose = false;
        this.InicioX = 0;
        this.InicioY = 0;
        this.Degree = 0;
        //Eventos
        this.figura.addEventListener('mousedown', this.iniciarArrastre.bind(this));
        this.figura.addEventListener('mousemove', this.arrastrar.bind(this));
        this.figura.addEventListener('mouseup', this.soltar.bind(this));
    }
    iniciarArrastre(evento) {
        NomFigu = this.index;
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

    fijar() {
        const Ele = this.figura.getBoundingClientRect();

        //Condiciones para fijar la figura
        for (let i = 0; i < Objectives.length; i++) {
            let help = Objectives[i].getBoundingClientRect();

            if (Ele.left - 25 <= help.left &&
                Ele.right + 25 >= help.right &&
                Ele.top - 25 <= help.top &&
                Ele.bottom + 25 >= Ele.bottom &&
                this.Degree == Rotaciones[i]) {
                MoverFigura.Terminar(i, this.index);
                MoverFigura.CorregirIndices();
            }
        }

    }

    Rotar() {
        this.Degree += 90;
        this.figura.style.transform = `rotate(${this.Degree}deg)`;
    }

    static Terminar(ReferenciaFijar, ReferenciaFijado) {
        let Fijar = Objectives[ReferenciaFijar];
        let Fijado = Objects[ReferenciaFijado].figura;

        let background = window.getComputedStyle(Fijado);
        background = background.getPropertyValue('background');
        background = background.substring(4, background.indexOf(')')).split(',');

        for (let i = 0; i < background.length; i++) {
            background[i] = parseInt(background[i]);
        }

        Objectives.splice(ReferenciaFijar, 1);
        Rotaciones.splice(ReferenciaFijar, 1);
        Objects.splice(ReferenciaFijado, 1);

        Fijar.style.background = `rgb(${background[0]}, 
                                    ${background[1]}, ${background[2]})`;
        contar += 1;
        document.body.removeChild(Fijado);

    }

    static CorregirIndices() {
        for (let i = 0; i < Objects.length; i++) {
            Objects[i].index = i;
            Objects[i].figura.onclick = function () {
                NomFigu = i;
                console.log(NomFigu);
            };
        }
    }

    static Verificar() {
        if (contar == 5) alert("Juego terminado")
        else alert("Aún quedan " + (5 - contar) + " figuras por acomodar");
    }
}