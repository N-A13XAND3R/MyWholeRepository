class Calificacion {

    #Aunmento = 1;
    constructor(respuestas = [], textoRespuestas = "", Rebaja = 0, bajarReto = 1) {
        this.respuestas = respuestas;
        this.nota = -Rebaja;
        this.#Aunmento = 5 / respuestas.length;
        console.log(this.#Aunmento);


        if (this._RevisarString(textoRespuestas)) {
            if (this._RevisarNota(textoRespuestas.split(','))) {
                this._CorrejirNota();
                this._ReportarError(`Su nota es ${this.nota}`);
                this.nota *= bajarReto;
            }
        }

    }

    _RevisarString(textoRevisar) {
        for (var i = 0; i < this.respuestas.length; i++) {
            if (textoRevisar[i] == ' ' || textoRevisar[i] == 'a' || textoRevisar[i] == 'b'
                || textoRevisar[i] == 'c' || textoRevisar[i] == 'd' || textoRevisar[i] == ',') {
                continue;
            } else {
                this._ReportarError("Carácteres no válidos ingresados.");
                return false;
            }
        }

        return true;
    }

    //En este método verifico que en efecto se hayan puesto cáteres válidos
    //y si algún caracter es verdadero entonces incrementa la variable que cuenta los caracteres verdaderos
    _RevisarNota(ListaTextoRespuestas) {
        if (ListaTextoRespuestas.length != this.respuestas.length) {
            this._ReportarError("No digitó la misma catidad de respuestas que de preguntas.");
            return false;
        }

        for (var i = 0; i < ListaTextoRespuestas.length; i++) {

            for (let j = 0; j < ListaTextoRespuestas[i].length; j++) {
                if (ListaTextoRespuestas[i][j] == ' ') {
                    continue;
                } else if (ListaTextoRespuestas[i][j] == this.respuestas[i]) {
                    this.nota += this.#Aunmento;
                } else if (ListaTextoRespuestas[i][j] == 'a' || ListaTextoRespuestas[i][j] == 'b'
                    || ListaTextoRespuestas[i][j] == 'c' || ListaTextoRespuestas[i][j] == 'd') {
                    continue;
                }
            }
        }

        return true;
    }

    _CorrejirNota() {
        if (5 < this.nota) this.nota = 5;
        if (this.nota < 0) this.nota = 0;
    }

    _ReportarError(Error) {
        alert(Error);
    }

    static TomarTiempo() {
        var fecha = new Date();
        let fechaStr = fecha.toString();
        let horaInicio = fechaStr.split(' ')[4].split(':');

        for (let i = 0; i < 3; i++) {
            horaInicio[i] = (horaInicio[i]) * (Math.pow(60, 2 - i));
        }

        return horaInicio[0] + horaInicio[1] + horaInicio[2];
    }

    static EnviarNota(Mundo, Nivel, Nota, bajar, tipo) {
        let Aula = localStorage.getItem('Aula');
        let Nombre = localStorage.getItem('Nombre');
        Nota = Nota * bajar;
        console.log(Nota);

        fetch("http://localhost:5000/Backend/Calificaciones/Actualizar", {
            method: "POST",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "Nombre": Nombre, "Aula": Aula,
                "Nivel": Nivel, "Mundo": Mundo, 
                "Nota": Nota, "Tipo": tipo
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data.mensaje);
            })
            .catch(error => console.error(error))
    }
}