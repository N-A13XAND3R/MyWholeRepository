let ListaValoresTriangulos = [false, false, false, false, false, false, false, false];
let ListaValoresCasa = [false, false];
let ListaSemiTrig = [false, false, false, false];
let ListaCuad = [false, false];
let ListaValoresParalelepidos = [false, false, false, false, false, false, false, false, false, false, false, false];
let ListaValoresTMyor = [false, false];

class MoverTriangulos {
    constructor(figura, referencia) {
        this.figura = figura;
        this.FiguraMoviendose = false;
        this.InicioX = 0;
        this.InicioY = 0;
        this.Fijado = false;
        this.referencia = referencia;
        //En transformaciones obtengo la matriz de giro de cada div
        this.Transformaciones = this.ObtenerMatrizDeRotacion(referencia);
        this.ModificadoRefX = false;
        this.ModificadoRefY = false;
        this.ModificarEscala = 0;
        this.Grado = 0;
        //Eventos
        this.figura.addEventListener('mousedown', this.iniciarArrastre.bind(this));
        this.figura.addEventListener('mousemove', this.arrastrar.bind(this));
        this.figura.addEventListener('mouseup', this.soltar.bind(this));
    }

    iniciarArrastre(evento) {
        if (!this.Fijado) {
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

    CompararRotacion(objeto, transform) {
        let Rotacion = window.getComputedStyle(objeto).getPropertyValue('transform');
        let Igual = true;

        if (Rotacion == "none") {
            Rotacion = ['1', ' 0', ' 0', ' 1', ' 0', ' 0'];
        } else {
            Rotacion = Rotacion.substring(7, Rotacion.length - 1).split(',')
        }

        for (var i = 0; i < Rotacion.length; i++) {
            if (Rotacion[i] != transform[i]) {
                Igual = false;
            }
        }
        return Igual;
    }

    fijar() {
        //Declaración de variables
        let AyudaFijar = this.figura.getBoundingClientRect();
        let Fijar, Rotacion;

        for (let i = 0; i < this.referencia.length; i++) {
            Fijar = this.referencia[i].getBoundingClientRect();
            Rotacion = this.CompararRotacion(this.figura, this.Transformaciones[i]);

            // Condición
            if (AyudaFijar.left - 25 <= Fijar.left &&
                AyudaFijar.right + 25 >= Fijar.right &&
                AyudaFijar.top - 25 <= Fijar.top &&
                AyudaFijar.bottom + 25 >= Fijar.bottom
                && Rotacion && !ListaValoresTriangulos[i]) {
                this.Fijado = true;
                ListaValoresTriangulos[i] = true;
                let background = window.getComputedStyle(this.referencia[i]).getPropertyValue('background');
                this.CrearDiv(background.substring(0, background.indexOf(')') + 1), this.referencia[i]);
                this.soltar();
                i = this.referencia.length;
            }
        }
    }

    ModificarReflexion(sentido) {
        if (sentido == 'x') {
            if (!this.ModificadoRefX) {
                this.figura.style.transform = "scaleX(-1)";
                this.ModificadoRefX = true;
            } else {
                this.figura.style.transform = "scaleX(1)";
                this.ModificadoRefX = false;
            }
        } else {
            if (!this.ModificadoRefY) {
                this.figura.style.transform = "scaleY(-1)";
                this.ModificadoRefY = true;
            } else {
                this.figura.style.transform = "scaleY(1)";
                this.ModificadoRefY = false;
            }
        }
    }

    ModificarRotacion() {
        this.Grado += 180;
        this.figura.style.transform = `rotate(${this.Grado}deg)`;
    }

    ObtenerMatrizDeRotacion(ObjetoPorRevisar) {
        let Lista = [];
        for (var i = 0; i < ObjetoPorRevisar.length; i++) {
            let Ayuda = window.getComputedStyle(ObjetoPorRevisar[i]).getPropertyValue('transform');
            if (Ayuda == "none") {
                Lista.push(['1', ' 0', ' 0', ' 1', ' 0', ' 0']);
            } else Lista.push(Ayuda.substring(7, Ayuda.length - 1).split(','));
        }
        return Lista;
    }

    CrearDiv(background, referencia) {
        let Div = referencia;
        let DivOriginal = document.getElementById('Mover');
        Div.style.background = `${ListaBackground(background)}`;
        let body = document.body;
        //borro el div que ya estaba
        body.removeChild(DivOriginal);
        jugando = false;

        function ListaBackground(background) {
            let lista = [], ayuda, i = 0;
            let recorte = background.substring(4, background.length - 1) + ',';

            while (i < 3) {
                ayuda = recorte.substring(0, recorte.indexOf(','));
                recorte = recorte.substring(recorte.indexOf(',') + 2);
                lista.push(parseFloat(ayuda) - 50)
                i++;
            }
            return `rgb(${lista[0]}, ${lista[1]}, ${lista[2]})`;
        }
    }
}

class MoverCasas extends MoverTriangulos {
    constructor(figura, referencias) {
        super(figura, referencias)
    }

    fijar() {
        //Declaración de variables
        let AyudaFijar = this.figura.getBoundingClientRect();
        let Fijar, Rotacion;

        for (let i = 0; i < this.referencia.length; i++) {
            Fijar = this.referencia[i].getBoundingClientRect();
            Rotacion = this.CompararRotacion(this.figura, this.Transformaciones[i]);

            // Condición
            if (AyudaFijar.left - 25 <= Fijar.left &&
                AyudaFijar.right + 25 >= Fijar.right &&
                AyudaFijar.top - 25 <= Fijar.top &&
                AyudaFijar.bottom + 25 >= Fijar.bottom
                && Rotacion && !ListaValoresCasa[i]) {
                this.Fijado = true;
                ListaValoresCasa[i] = true;
                this.soltar();
                let background = window.getComputedStyle(this.referencia[i]).getPropertyValue('background');
                this.CrearDiv(background.substring(0, background.indexOf(')') + 1), this.referencia[i]);
                i = this.referencia.length;
            }
        }
    }
    ModificarRotacion() {
        alert("Este objeto no se puede rotar");
    }
    ModificarReflexion(sentido) {
        alert("Este objeto no se puede reflejar");
    }
}

class MoverTrig extends MoverTriangulos {
    constructor(figura, referencias) {
        super(figura, referencias)
    }

    fijar() {
        //Declaración de variables
        let AyudaFijar = this.figura.getBoundingClientRect();
        let Fijar, Rotacion;

        for (let i = 0; i < this.referencia.length; i++) {
            Fijar = this.referencia[i].getBoundingClientRect();
            Rotacion = this.CompararRotacion(this.figura, this.Transformaciones[i]);

            // Condición
            if (AyudaFijar.left - 25 <= Fijar.left &&
                AyudaFijar.right + 25 >= Fijar.right &&
                AyudaFijar.top - 25 <= Fijar.top &&
                AyudaFijar.bottom + 25 >= Fijar.bottom
                && Rotacion && !ListaSemiTrig[i]) {
                this.Fijado = true;
                ListaSemiTrig[i] = true;
                this.soltar();
                let background = window.getComputedStyle(this.referencia[i]).getPropertyValue('background');
                this.CrearDiv(background.substring(0, background.indexOf(')') + 1), this.referencia[i]);
                i = this.referencia.length;
            }
        }
    }
}

class MoverCuad extends MoverTriangulos {
    constructor(figura, referencias) {
        super(figura, referencias)
    }

    fijar() {
        //Declaración de variables
        let AyudaFijar = this.figura.getBoundingClientRect();
        let Fijar, Rotacion;

        for (let i = 0; i < this.referencia.length; i++) {
            Fijar = this.referencia[i].getBoundingClientRect();
            Rotacion = this.CompararRotacion(this.figura, this.Transformaciones[i]);

            // Condición
            if (AyudaFijar.left - 25 <= Fijar.left &&
                AyudaFijar.right + 25 >= Fijar.right &&
                AyudaFijar.top - 25 <= Fijar.top &&
                AyudaFijar.bottom + 25 >= Fijar.bottom
                && Rotacion && !ListaCuad[i]) {
                this.Fijado = true;
                ListaCuad[i] = true;
                this.soltar();
                let background = window.getComputedStyle(this.referencia[i]).getPropertyValue('background');
                this.CrearDiv(background.substring(0, background.indexOf(')') + 1), this.referencia[i]);
                i = this.referencia.length;
            }
        }
    }
}

class MoverParalelepipedos extends MoverTriangulos {
    constructor(figura, referencias) {
        super(figura, referencias)
    }

    fijar() {
        //Declaración de variables
        let AyudaFijar = this.figura.getBoundingClientRect();
        let Fijar, Rotacion;

        for (let i = 0; i < this.referencia.length; i++) {
            Fijar = this.referencia[i].getBoundingClientRect();
            Rotacion = this.CompararRotacion(this.figura, this.Transformaciones[i]);

            // Condición
            if (AyudaFijar.left - 25 <= Fijar.left &&
                AyudaFijar.right + 25 >= Fijar.right &&
                AyudaFijar.top - 25 <= Fijar.top &&
                AyudaFijar.bottom + 25 >= Fijar.bottom
                && Rotacion && !ListaValoresParalelepidos[i]) {
                this.Fijado = true;
                ListaValoresParalelepidos[i] = true;
                this.soltar();
                let background = window.getComputedStyle(this.referencia[i]).getPropertyValue('background');
                this.CrearDiv(background.substring(0, background.indexOf(')') + 1), this.referencia[i]);
                i = this.referencia.length;
            }
        }
    }
    ModificarRotacion() {
        alert("Este objeto no se puede rotar");
    }
    ModificarReflexion(para) {
        if (para == 'x') {
            if (!this.ModificadoRefX) {
                this.figura.style.transform = "scaleX(-1)";
                this.ModificadoRefX = true;
            } else {
                this.figura.style.transform = "scaleX(1)";
                this.ModificadoRefX = false;
            }
        } else alert("Esteobjeto no se puede reflejar con respecto a y");
    }
}

class MoverTMayor extends MoverTriangulos {
    constructor(figura, referencia) {
        super(figura, referencia);
    }
    fijar() {
        //Declaración de variables
        let AyudaFijar = this.figura.getBoundingClientRect();
        let Fijar, Rotacion;

        for (let i = 0; i < this.referencia.length; i++) {
            Fijar = this.referencia[i].getBoundingClientRect();
            Rotacion = this.CompararRotacion(this.figura, this.Transformaciones[i]);

            // Condición
            if (AyudaFijar.left - 25 <= Fijar.left &&
                AyudaFijar.right + 25 >= Fijar.right &&
                AyudaFijar.top - 25 <= Fijar.top &&
                AyudaFijar.bottom + 25 >= Fijar.bottom
                && Rotacion && !ListaValoresTMyor[i]) {
                this.Fijado = true;
                ListaValoresTMyor[i] = true;
                this.soltar();
                let background = window.getComputedStyle(this.referencia[i]).getPropertyValue('background');
                this.CrearDiv(background.substring(0, background.indexOf(')') + 1), this.referencia[i]);
                i = this.referencia.length;
            }
        }
    }

    ModificarReflexion(para) {
        if (para != 'x') {
            if (!this.ModificadoRefY) {
                this.figura.style.transform = "scaleY(-1)";
                this.ModificadoRefY = true;
            } else {
                this.figura.style.transform = "scaleY(1)";
                this.ModificadoRefY = false;
            }
        }
    }
}