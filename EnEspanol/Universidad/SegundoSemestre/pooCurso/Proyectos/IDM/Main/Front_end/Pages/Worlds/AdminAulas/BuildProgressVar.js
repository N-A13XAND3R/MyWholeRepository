class BuildProgressVar {
    constructor(direction, context, tipo = 1) {
        cargando = true;
        this.tipo = tipo;
        this.direction = direction;
        this.context = context;
        this.buildProgressVar();
        setTimeout(() => this.removeProgressVar(), 2500);

    }

    buildProgressVar() {
        let div = document.createElement("div");
        div.setAttribute("class", "porcentajes");
        div.setAttribute("id", "ProgressVar"); // Assign an ID to the div
        div.setAttribute("style", "--porcentaje: 50; --color: forestgreen")

        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", "15vw");
        svg.setAttribute("height", "15vw");

        let circle1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle1.setAttribute("r", "5vw");
        circle1.setAttribute("cx", "50%");
        circle1.setAttribute("cy", "50%");

        let circle2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle2.setAttribute("r", "4vw");
        circle2.setAttribute("cx", "50%");
        circle2.setAttribute("cy", "50%");

        let span = document.createElement("span");
        span.textContent = `Cargando ${this.context}`;

        svg.appendChild(circle1);
        svg.appendChild(circle2);

        div.appendChild(svg);
        div.appendChild(span);

        this.direction.appendChild(div);
    }

    removeProgressVar() {
        this.direction.removeChild(document.getElementById("ProgressVar"));
        cargando = false;

        if (this.tipo == 0) adminAulas.buildTableStudents(dta);
        if (this.tipo == 1) adminAulas.BuildTable();
        if (this.tipo == 2) adminAulas.CrateTableNotes();
    }
}