var cambios = {
    dolar_sol: 3.77,
    dolar_euro: 0.90,
    sol_dolar: 1 / 3.77,
    sol_euro: 1 / 4.17,
    euro_sol: 4.17,
    euro_dolar: 1 / 0.9
}
function cotizar() {
    let monto = document.getElementById("monto").value;
    let tipoMoneda = getMoneda();
    let tipoCambio = getMonedCambio();
    let result;
    if(tipoCambio == tipoMoneda) {
        alert("Seleccione distintos tipos de monedas");
    }else {
        let combinacion = Number(tipoMoneda + tipoCambio);
        switch(combinacion) {
            case 12:
                result = monto * cambios.dolar_euro;
                break;
            case 13:
                result = monto * cambios.dolar_sol;
                break;
            case 21:
                result = monto * cambios.euro_dolar;
                break;
            case 23:
                result = monto * cambios.euro_sol;
                break;
            case 31:
                result = monto * cambios.sol_dolar;
                break;
            default:
                result = monto * cambios.sol_euro;
        }
        alert("Cambio total: " + result);
    }
}
function getMoneda() {
    let form1 = document.getElementsByName("form1")[0].childNodes;
    for(let i = 0; i < form1.length; i++) {
        let child = form1[i];
        if(i%2 != 0) {
            if(child.checked) {
                return child.value;
            }
        }
    }
    return null;
}
function getMonedCambio() {
    let form1 = document.getElementsByName("form2")[0].childNodes;
    for(let i = 0; i < form1.length; i++) {
        let child = form1[i];
        if(i%2 != 0) {
            if(child.checked) {
                return child.value;
            }
        }
    }
    return null;
}