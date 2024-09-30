class Mover {
    constructor(figura, incliacion) {
        console.log(incliacion, this._FloorFunction(incliacion));
        incliacion = this._FloorFunction(incliacion);
        this.figura = figura;
        this.figura.style.transform = `rotate(${incliacion}deg)`;
        this.incliacion = incliacion;
        this.FiguraMoviendose = false;
        this.InicioX = 0;
        this.InicioY = 0;
        this.Grado = incliacion;

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

    cambiarInclinacion(direccion) {
        if (direccion < 0) this._inclinar(-this.incliacion);
        else this._inclinar(this.incliacion);
    }

    _inclinar(inclinar, tipo = 1) {
        if (tipo == 1) {
            this.Grado += inclinar;  
        }else this.Grado = inclinar;

        this.Grado = this.Grado%360;
        this.figura.style.transform = `rotate(${this.Grado}deg)`;
    }

    _FloorFunction(str) {
        str = str.toString();
        str = str.substring(0, str.indexOf('.'));
        str = parseInt(str);

        if (360%str != 0) 
            str = 60;

        return str;
    }

    fijar() {
        let help = this.figura.getBoundingClientRect();
        let Help2;

        for (let i = 0; i < CuadradosImagen1.length; i++) {
            Help2 = CuadradosImagen1[i].getBoundingClientRect();

            if (help.left - 45 <= Help2.left && 
                help.right + 45 >= Help2.right &&
                help.top - 25 <= Help2.top &&
                help.bottom + 25 >= Help2.bottom && 
                this.Grado == 0
            ) {
                this.Final(CuadradosImagen1[i]);
                CuadradosImagen1.splice(i, 1);
                i = CuadradosImagen1.length;
            }
        }

    }

    Final(figura) {
        let back;
        back = window.getComputedStyle(figura).getPropertyValue('background');

        figura.style.background = "red";
        document.body.removeChild(this.figura);
        Jugando = false;
        counter += 1;
        document.getElementById("Rotacion").style.display = "none";
    }
}

class Mover2 extends Mover {
    constructor(figura, incliacion) {
        super(figura, incliacion);
    }

    fijar() {
        let help = this.figura.getBoundingClientRect();
        let Help2;

        for (let i = 0; i < CuadradosImagen2.length; i++) {
            Help2 = CuadradosImagen2[i].getBoundingClientRect();

            if (help.left - 25 <= Help2.left && 
                help.right + 25 >= Help2.right &&
                help.top - 25 <= Help2.top &&
                help.bottom + 25 >= Help2.bottom && 
                this.Grado == 0
            ) {
                this.Final(CuadradosImagen2[i]);
                CuadradosImagen2.splice(i, 1);
                i = CuadradosImagen2.length;
            }
        }

    }

    Final(figura) {
        let back;
        back = window.getComputedStyle(figura).getPropertyValue('background');

        figura.style.background = "blue";
        document.body.removeChild(this.figura);
        Jugando = false;
        counter += 1;
        document.getElementById("Rotacion").style.display = "none";
    }
}