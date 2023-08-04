

const formulario = document.getElementById("formulario")


function validar(usuario, contraseña){
    if(usuario === "mali" && contraseña === "123"){
        window.location.href = "inicioSesion/inicioMali.html";
    }else if (usuario === "gera" && contraseña === "234"){
        window.location.href = "inicioSesion/inicioGera.html";
    }else if (usuario === "maui" && contraseña === "345"){
        window.location.href = "inicioSesion/inicioMaui.html";
    }else{
        mensaje.innerHTML = "Favor de verificar los datos ingresados";
        setTimeout(() => {
            mensaje.innerHTML = ""
        }, 5000);
    }
}

formulario.addEventListener ("submit", (evento)=>{
    evento.preventDefault()

    let usuario = document.getElementById("username").value;
    let contraseña = document.getElementById("password").value;
    let mensaje = document.getElementById("mensaje");

    validar(usuario, contraseña)
})

