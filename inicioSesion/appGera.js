var saldoGera = 290

let montoGera = document.getElementById("consultaGera")

function consultaSaldoGera(){
    avisoGera.innerHTML = "Tu saldo es de: " + saldoGera + " pesos"
    setTimeout(() => {
        avisoGera.innerHTML = ""
    }, 7000);
}

function depositarSaldo(){
    let montoAIngresar = parseFloat(document.getElementById("montoGera").value);
    saldoGera += montoAIngresar;

    if (saldoGera <= 990){
        avisoGera.innerHTML = "Se abonaron con éxito: " + montoAIngresar + " pesos. " + "Tu saldo actual es de: " + saldoGera + " pesos";
        setTimeout(() => {
            avisoGera.innerHTML = ""
        }, 7000)
    }else {
        avisoNoPermitidoGera.innerHTML = "No puedes tener en tu cuenta más de $990 pesos";
        saldoGera -=montoAIngresar
        setTimeout(() => {
            avisoNoPermitidoGera.innerHTML = ""
        }, 7000)
    }
    }

function retirarSaldo(){
    let montoARetirar = parseFloat(document.getElementById("montoGera").value);
    saldoGera -=montoARetirar

    if (saldoGera >= 10){
        avisoGera.innerHTML = "Se retiró con éxito: " + montoARetirar + " pesos. " + "Tu saldo actual es de: " + saldoGera + " pesos";
        setTimeout(() => {
            avisoGera.innerHTML = ""
        }, 7000)
    }else {
        avisoNoPermitidoGera.innerHTML = "No puedes tener en tu cuenta menos de $10 pesos";
        saldoGera +=montoARetirar
        setTimeout(() => {
            avisoNoPermitidoGera.innerHTML = ""
        }, 7000)
    }
}

function regresarAInicio(){
    window.location.pathname = "Banco/index.html";
}