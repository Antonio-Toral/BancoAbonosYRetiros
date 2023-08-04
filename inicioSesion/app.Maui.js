var saldoMaui = 67

let montoMaui = document.getElementById("consultaMaui")

function consultaSaldoMaui(){
    avisoMaui.innerHTML = "Tu saldo es de: " + saldoMaui + " pesos"
    setTimeout(() => {
        avisoMaui.innerHTML = ""
    }, 7000);
}

function depositarSaldo(){
    let montoAIngresar = parseFloat(document.getElementById("montoMaui").value);
    saldoMaui += montoAIngresar;

    if (saldoMaui <= 990){
        avisoMaui.innerHTML = "Se abonaron con éxito: " + montoAIngresar + " pesos. " + "Tu saldo actual es de: " + saldoMaui + " pesos";
        setTimeout(() => {
            avisoMaui.innerHTML = ""
        }, 7000)
    }else {
        avisoNoPermitidoMaui.innerHTML = "No puedes tener en tu cuenta más de $990 pesos";
        saldoMaui -=montoAIngresar
        setTimeout(() => {
            avisoNoPermitidoMaui.innerHTML = ""
        }, 7000)
    }
    }

function retirarSaldo(){
    let montoARetirar = parseFloat(document.getElementById("montoMaui").value);
    saldoMaui -=montoARetirar

    if (saldoMaui >= 10){
        avisoMaui.innerHTML = "Se retiró con éxito: " + montoARetirar + " pesos. " + "Tu saldo actual es de: " + saldoMaui + " pesos";
        setTimeout(() => {
            avisoMaui.innerHTML = ""
        }, 7000)
    }else {
        avisoNoPermitidoMaui.innerHTML = "No puedes tener en tu cuenta menos de $10 pesos";
        saldoMaui +=montoARetirar
        setTimeout(() => {
            avisoNoPermitidoMaui.innerHTML = ""
        }, 7000)
    }
}

function regresarAInicio(){
    window.location.pathname = "Banco/index.html";
}
