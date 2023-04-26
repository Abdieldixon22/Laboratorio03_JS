let miNum = "17";
let edad = Number(miNum);

console.log(edad);

if (isNaN(edad)) {
    console.log("No es un número");
}else {
    if(edad >= 18) {
        console.log("Puede votar");
    }else {
        console.log("Muy joven para votar");
    }
}


if(isNaN(edad)) {
    console.log("No es un número");
}else {
    let res = (edad >= 18) ? "Puede votar" : "Muy joven para votar";
    console.log(res);
}