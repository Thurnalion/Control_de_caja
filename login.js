function inicio(){

let user = document.getElementById("usuario").value;
let pass = document.getElementById("contraseña").value;

    if(user == "nico" && pass == "nicolas"){
    window.location = "presentismo.html";

    } else if(user != "nico"){
        document.getElementById('alerta').innerHTML = "Usuario incorrecto";

    }else{
        document.getElementById('alerta').innerHTML = "Contraseña incorrecta";
    }
    
}
boton2.addEventListener("click",inicio);


