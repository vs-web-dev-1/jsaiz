let radioMedio = 40;
const PI = 3.14;
let rueda = 2 * PI * radioMedio;
console.log("Rueda: " + rueda);

const bici = {
    marca: 'BH',
    precio: 89,
    radio: radioMedio,
};

console.log(bici);

let biciRadioMedio = bici.radio == radioMedio;
let biciRadioMedio2 = bici.radio === "40"; //son de distinto tipo así que esto da false
console.log(biciRadioMedio2);

//comparadores

let uno = 1;
let dos = 2;
let mayor = dos >= uno;
let menor = uno <= dos;
let distinto = uno != dos;
let superDistinto = uno !== dos;
let superIgual = uno === dos;
let cierto = true;
let falso = false;