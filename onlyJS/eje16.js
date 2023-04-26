let num = 1;
let numT = 'Valor desconocido';

switch(num) {
    case 1:
        numT = 'Número uno';
        break;
    case 2:
        numT = 'Número dos';
        break;
    case 3:
        numT = 'Número tres';
        break;
    case 4:
        numT = 'Número cuatro';
        break;
    default:
        numT = 'Caso no encontrado';
}
console.log(numT);