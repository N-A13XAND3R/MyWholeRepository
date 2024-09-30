var homeLinks = document.getElementById("homeLinks");

    function showMenu(){
        homeLinks.style.right = "0";
    }

    function hideMenu(){
        homeLinks.style.right = "-300px";
    }


    function GoToRecover() {
        let NameHelp = document.getElementById("InputUser").value;

        if (NameHelp.length != 0) {
            user.Name(NameHelp);
            user.RecoverMail();
        }
        else alert("Para recuperar su cuenta se necesita por lo menos el nombre del usuario");
    }