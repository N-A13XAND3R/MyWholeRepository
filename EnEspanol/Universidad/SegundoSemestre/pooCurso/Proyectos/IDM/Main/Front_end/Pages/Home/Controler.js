class Controler {

    #CartIsOpen = false;
    #ListShowPassword = ["text", "password"];
    #Counter = 0;
    constructor() {
        this.Mover = true;
        this.i = 0;
    }

    // funciones para cambio entre cartas
    CloseCart(y = 0) {
        const x = document.getElementById("x");

        x.style.animation = "CloseCart 1s ease forwards";
        x.style.animationIterationCount = "1";

        if (y != 0) {
            // este condicional verifia si se le dió a la x
            setTimeout(() => {
                document.body.removeChild(x);
            }, 1000);
        }
    }

    OpenCart() {
        if (this.#CartIsOpen) {
            this.CloseCart();
        }

        const x = document.getElementById("x");

        x.style.animation = "OpenCart 1s ease forwards";
        x.style.animationIterationCount = "1";

        setTimeout(() => {
            x.style.animation = "";
            x.style.animationIterationCount = "";
            x.style.opacity = "1";
            this.#CartIsOpen = true;
        }, 1000);


    }

    // aqui relleno una carta con todos los input del login
    // así mismo con todos los eventos necesarios para poder
    // seguir con el proyecto
    FillCartLogIn() {
        Controler.CrearCarta();
        const Cart = document.getElementById("x");

        Cart.style.height = "60dvh";
        Cart.innerHTML = `
            <div class="wrapper LogIn">

                <span class="iconClose" onclick="controler.CloseCart(1)">
                    <i class="fa-solid fa-xmark"></i> 
                </span>

                <div class="formLogin">

                    <h2>Log In</h2>
                    <div class="inputB">
                        <span class="icon"> <i class="fa-solid fa-user"></i> </span>
                        <input type="text" id="InputUser" class="input" placeholder="">
                        <span class="label"> Ingrese su Usuario </span>
                    </div>
                    <div class="inputB">
                        <span class="icon"> <i class="fa-solid fa-lock" onclick="controler.showPassword('InputPassword')"></i> </span>
                        <input type="password" id="InputPassword" class="input" placeholder="">
                        <span class="label"> Ingrese su Contraseña </span>
                    </div>
                    <button id="SendToBackEnd" class="input" onclick="user.SaveUser()">Log In</button>
                    <div class="forgot LogIn">
                        <span> Don't have an account? <div class="link" onclick="controler.FillCartSingUp()"> Sign Up </div> </span>
                        <span> <div class="link" onclick="controler.VerifyUser()"> Forgot password? </div> </span>
                    </div>

                </div>

            </div>

            `;
        this.OpenCart();
    }

    showPassword(id) {
        const x = document.getElementById(id);

        x.type = this.#ListShowPassword[this.#Counter];

        this.#Counter = (this.#Counter + 1) % 2;
    }
    /* Muy parecido al anterior con la exepción de que ahora trae todo lo necesario para hacer el registro, a partir de acá todas las funciones
       son para el proceso del registro */
    FillCartSingUp() {
        Controler.CrearCarta();
        const Cart = document.getElementById("x");

        Cart.style.height = "75dvh";
        Cart.innerHTML = `
            <div class="wrapper Register">

                <span class="iconClose" onclick="controler.CloseCart(1)">
                    <i class="fa-solid fa-xmark"></i>
                </span>

                <div class="formRegister">

                    <h2>Sign Up</h2>
                    <div class="inputB">
                        <span class="icon"> <i class="fa-solid fa-user"></i> </span>
                        <input type="text" id="UserName" class="input" placeholder="">
                        <span class="label"> Enter your full name </span>
                    </div>
                    <div class="inputB">
                        <span class="icon"> <i class="fa-solid fa-lock" onclick="controler.showPassword('PassWord')"></i> </span>
                        <input type="password" id="PassWord" class="input" placeholder="">
                        <span class="label"> Enter password </span>
                    </div>
                    <div class="inputB">
                        <span class="icon"> <i class="fa-solid fa-check" onclick="controler.showPassword('confirmPassWord')"></i> </span>
                        <input type="password" id="confirmPassWord" class="input" placeholder="">
                        <span class="label"> Confirm password </span>
                    </div>
                    <div class="inputB">
                        <span class="icon"> <i class="fa-solid fa-envelope"></i> </span>
                        <input type="text" id="Email" class="input" placeholder="">
                        <span class="label"> Enter your email </span>
                    </div>
                    <div class="selectB">
                        <span class="icon"> <i class="fa-solid fa-school"></i> </span>
                        <select id="Selector" class="input">
                            <option value="Estudiante"> Student</option>
                            <option value="Profesor">Professor</option>
                        </select>
                    </div>
                    <button id="SendToBackEnd" class="input" onclick="regis.SaveUser()">Create User</button>
                    <div class="forgot Register">
                        <span> Already have an account? <div class="link" onclick="controler.FillCartLogIn()"> Sign In </div> </span>
                    </div>
                </div>

            </div>
            `;
        this.OpenCart();
    }

    FillCartCodeVerify() {
        Controler.CrearCarta();
        const Cart = document.getElementById("x");
        Cart.style.width = "30dvw";
        Cart.style.height = "50dvh";
        Cart.innerHTML = `
            <h2 class="verify">Verificando el correo</h2>
            <span class="iconClose" onclick="controler.CloseCart(1)">
                <i class="fa-solid fa-xmark"></i> 
            </span>
            <h3 class="verify">En la siguiente linea ingrese el código enviado
            al correo digitado</h3>
            <div class="inputB">
                <span class="icon"> <i class="fa-solid fa-check"></i> </span>
                <input type="text" id="code" class="input" placeholder="">
                <span class="label"> Ingrese el código </span>
            </div>
            <button class="Boton" onclick="regis.VerifyCode()">Verificar cuenta</button>
            `;
        this.OpenCart();
    }


    /* Reviso el primer input del login para poder obtener el nombre del usuario y así poder enviar correo, lo siguiente es solo para
       recuperar contraseña */
    VerifyUser() {
        if (document.getElementById("InputUser").value.length != 0) {
            const Cart = document.body;
            Cart.classList.add("disabled");
            user.Name(document.getElementById("InputUser").value);
            user.RecoverMail();
        } else alert("Se necesita por lo menos el nombre del usuario.")
    }

    /* En caso de enviar el correo creo esta carta para 
       los inputs de confirmar el código enviado a correo */
    FillCartRecover() {
        Controler.CrearCarta();
        const Cart = document.getElementById("x");
        Cart.style.width = "30dvw";
        Cart.style.height = "50dvh";
        Cart.innerHTML = `
                <h2 class="verify">Recuperando la cuenta de ${user.GetName}</h2>
                <span class="iconClose" onclick="controler.CloseCart(1)">
                    <i class="fa-solid fa-xmark"></i> 
                </span>
                <h3 class="verify">Ingrese el código enviado al correo 
                registrado cuando usted se unió a IMD en la siguiente linea</h3>
                <div class="inputB">
                    <span class="icon"> <i class="fa-solid fa-check"></i> </span>
                    <input type="text" id="code" class="input" placeholder="">
                    <span class="label"> Ingrese el código </span>
                </div>
                <button class="Boton" onclick="user.VerifyCode()">Verificar cuenta</button>
            `;
        this.OpenCart();
    }

    /* Por último, crea una nueva contraseña */
    FillCartPassWordNew() {
        Controler.CrearCarta();
        const Cart = document.getElementById("x");
        Cart.style.height = "45dvh";
        Cart.innerHTML = `
                <h2 class="verify Pass">Ingrese su nueva contraseña</h2>
                <div class="inputB  Pass">
                    <span class="icon"> <i class="fa-solid fa-check" onclick="controler.showPassword('NewPass')"></i> </span>
                    <input type="password" id="NewPass" class="input" placeholder="">
                    <span class="label"> Ingrese la nueva contraseña </span>
                </div>
                <div class="inputB  Pass">
                    <span class="icon"> <i class="fa-solid fa-check" onclick="controler.showPassword('NewPassConfirm')"></i> </span>
                    <input type="password" id="NewPassConfirm" class="input" placeholder="">
                    <span class="label"> Confirme la contraseña </span>
                </div>
                <button class="Boton" onclick="user.VerifyPassWord()">Cambiar contraseña</button>
            `;
        this.OpenCart();
    }


    /* Esta función estatica "limpia" la carta existente para que no
       se acumulen en el documento */
    static CrearCarta() {
        let x = document.getElementById("x");
        if (x == null) {
            const Carta = document.createElement("div");
            Carta.id = "x";
            Carta.style.opacity = "0";
            document.body.appendChild(Carta);
        }
    }
}