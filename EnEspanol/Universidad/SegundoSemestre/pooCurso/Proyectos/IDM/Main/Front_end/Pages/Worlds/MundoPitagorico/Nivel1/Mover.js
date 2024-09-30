class Mover {

    constructor(figura, Grado) {
        this.figura = figura;
        this.FiguraMoviendose = false;
        this.InicioX = 0;
        this.InicioY = 0;

        this.Grado = Grado;
        this.ScaleX = 1;
        this.ScaleY = 1;
        //Eventos
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

    fijar() {
        let Help = this.figura.getBoundingClientRect();

        for (let i = 0; i < FigurasPorAcomodar.length; i++) {
            let Reference = FigurasPorAcomodar[i].getBoundingClientRect();

            if (this.VerifyConditions(FigurasPorAcomodar[i].id) &&
                Help.left - 25 <= Reference.left &&
                Help.right + 25 >= Reference.right &&
                Help.top - 25 <= Reference.top &&
                Help.bottom + 25 >= Reference.bottom) {
                this.Final(FigurasPorAcomodar[i]);
                FigurasPorAcomodar.splice(i, 1);
                console.log(FigurasPorAcomodar);
            }
        }

    }

    AplyTransform() {
        let str = `rotate(${this.Grado}deg)`;
        let strX = `scaleX(${this.ScaleX})`;
        let strY = `scaleY(${this.ScaleY})`;
        this.figura.style.transform = str + strX + strY;
    }

    Rotate(degree) {
        this.Grado += degree;
        if (360 <= this.Grado) this.Grado -= 360;
        if (this.Grado < 0) this.Grado += 360;
        this.AplyTransform();
    }

    Reflex(args) {
        if (args == 'x') this.ScaleX *= -1;
        /* Verificando condiciones */
        if (args == 'y') this.ScaleY *= -1;
        this.AplyTransform();
    }

    VerifyConditions(DivNombre) {
        let ListaRotaciones = Valores[DivNombre];
        let ConditionVerifaed = false;

        for (let i = 0; i < 2; i++) {
            if (ListaRotaciones[i][0] == this.Grado &&
                ListaRotaciones[i][1] == this.ScaleX &&
                ListaRotaciones[i][2] == this.ScaleY) {
                ConditionVerifaed = true;
            }
        }
        return ConditionVerifaed;
    }

    Final(figura) {
        let back;
        back = window.getComputedStyle(figura).getPropertyValue('background');

        figura.style.background = Pintar(back);
        document.body.removeChild(this.figura);
        Playing = false;
        counter += 1;

        function Pintar(background) {
            let info = background.substring(4, background.indexOf(')'));
            info = info.split(',');

            for (let i = 0; i < 3; i++) {
                info[i] = parseInt(info[i]) - 50;
            }

            return `rgb(${info[0]}, ${info[1]}, ${info[2]})`;
        }
    }
}