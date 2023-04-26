var bandera = false;
console.log(typeof bandera);

function mifunc(){}
console.log(typeof mifunc);

var simb = Symbol("mi simbolo");
console.log(typeof simb);

class Persona {
    constructor(name, app) {
        this.name = name;
        this.app = app;
    }
}
console.log(typeof Persona);

var x;
console.log(typeof x);

x = undefined
console.log(typeof x);

var y = null;
console.log(typeof y);
