var saldoMali = 200

let montoMali = document.getElementById("consultaMali")

function consultaSaldoMali(){
    avisoMali.innerHTML = "Tu saldo es de: " + saldoMali + " pesos"
    setTimeout(() => {
        avisoMali.innerHTML = ""
    }, 7000);
}

function depositarSaldo(){
    let montoAIngresar = parseFloat(document.getElementById("montoMali").value);
    saldoMali += montoAIngresar;

    if (saldoMali <= 990){
        avisoMali.innerHTML = "Se abonaron con éxito: " + montoAIngresar + " pesos. " + "Tu saldo actual es de: " + saldoMali + " pesos";
        setTimeout(() => {
            avisoMali.innerHTML = ""
        }, 7000)
    }else {
        avisoNoPermitidoMali.innerHTML = "No puedes tener en tu cuenta más de $990 pesos";
        saldoMali -=montoAIngresar
        setTimeout(() => {
            avisoNoPermitidoMali.innerHTML = ""
        }, 7000)
    }
    }

function retirarSaldo(){
    let montoARetirar = parseFloat(document.getElementById("montoMali").value);
    saldoMali -=montoARetirar

    if (saldoMali >= 10){
        avisoMali.innerHTML = "Se retiró con éxito: " + montoARetirar + " pesos. " + "Tu saldo actual es de: " + saldoMali + " pesos";
        setTimeout(() => {
            avisoMali.innerHTML = ""
        }, 7000)
    }else {
        avisoNoPermitidoMali.innerHTML = "No puedes tener en tu cuenta menos de $10 pesos";
        saldoMali +=montoARetirar
        setTimeout(() => {
            avisoNoPermitidoMali.innerHTML = ""
        }, 7000)
    }
}

function regresarAInicio(){
    window.location.pathname = "Banco/index.html";
}

