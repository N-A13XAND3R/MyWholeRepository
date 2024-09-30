let mensaje = localStorage.getItem("mensaje");

addEventListener("load", function () {
    if (mensaje == "1") localStorage.setItem("mensaje" , "0");
    else {
        window.location.href = "../../Home/Home.html";
    }
})

// necesario para que no hayan interferencias
function Viajar(direccion) {
    localStorage.setItem("mensaje" , "1");
    if (direccion == "P") {
        window.location.href = "../EscogerMundo.html";
    } else if (direccion == 'Historia') {
        localStorage.setItem('mensaje', '1')
        window.location.href = '../MundoHistoria/Menu.html'
    } else if (direccion == "Nivel 1") {
        window.location.href = "Nivel1/Nivel.html";
    } else if (direccion == "Nivel 2") {
        window.location.href = "Nivel2/Nivel.html";
    } else if (direccion == "Nivel 3") {
        window.location.href = "Nivel3/Nivel.html";
    } else if (direccion == "Nivel 4") {
        window.location.href = "Nivel4/Nivel.html";
    }
}