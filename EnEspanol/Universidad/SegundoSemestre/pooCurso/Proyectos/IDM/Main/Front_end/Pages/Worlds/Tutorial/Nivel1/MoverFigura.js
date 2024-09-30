class MoverFigura {
    constructor(figura, pos) {
        this.figura = figura;
        this.PositionOnList = pos;
        this.FiguraMoviendose = false;
        this.InicioX = 0;
        this.InicioY = 0;
        //Eventos
        this.figura.addEventListener('mousedown', this.iniciarArrastre.bind(this));
        this.figura.addEventListener('mousemove', this.arrastrar.bind(this));
        this.figura.addEventListener('mouseup', this.soltar.bind(this));
    }

    iniciarArrastre(evento) {
        this.FiguraMoviendose = true;
        this.inicioX = evento.clientX - this.figura.getBoundingClientRect().left;
        this.inicioY = evento.clientY - this.figura.getBoundingClientRect().top;
        ApuntadorFigura = this.PositionOnList;
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
        const rectanguloFigura = this.figura.getBoundingClientRect();
        //verificaciones para fijar figuras

        for (let i = 0; i < ArrayOfObjectsToMove.length; i++) {
            let Help = ArrayOfObjectsToMove[i].getBoundingClientRect();
            if (rectanguloFigura.left - 25 <= Help.left &&
                rectanguloFigura.right + 25 >= Help.right &&
                rectanguloFigura.top - 25 <= Help.top &&
                rectanguloFigura.bottom + 25 >= Help.bottom) {
                Contar += 1;    
                MoverFigura.Terminar(i, this.figura, this.PositionOnList);
            }
        }

    }

    static Terminar(Referencia, figura, pos) {
        let background = window.getComputedStyle(figura);
        background = background.getPropertyValue('background');
        background = background.substring(4, background.indexOf(')')).split(',');

        for (let i = 0; i < background.length; i++) {
            background[i] = parseInt(background[i]);
        }
        ArrayOfObjectsToMove[Referencia].style.background = `rgb(${background[0]}, 
                                                    ${background[1]}, 
                                                    ${background[2]})`

        document.body.removeChild(ArrayOfObjects[pos])
        ArrayOfObjects.splice(pos, 1);
        ArrayOfObjectsNotDOM.splice(pos, 1);
        ArrayOfObjectsToMove.splice(Referencia, 1);
        MoverFigura.CorregirPosicion();

        let escribir = document.getElementById("TextoContador");
        escribir.innerHTML = `Figuras acomodadas ${Contar}`;
    }

    static CorregirPosicion() {
        for (let i = 0; i < ArrayOfObjectsToMove.length; i++) {
            ArrayOfObjectsNotDOM[i].PositionOnList = i;
        }
    }

    static Verificar() {
        if (Contar == 8) {
            alert("Juego terminado");
            window.location.href = "../Menu.html";
            localStorage.setItem('mensaje', '1');
        }else alert("Aún quedan " + (8 - Contar) + " Figuras por acomodar");
    }
}