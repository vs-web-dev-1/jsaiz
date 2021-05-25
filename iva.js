let precio = 20;

let PrecioZapatos = 40;
let PrecioPan = 0.90;
let PrecioCine = 9;
const ivaTaxes = { ivaGeneral: 21, ivaRed: 10, ivaSuper: 4 };

console.log("Precio del pan : " + (PrecioPan + (PrecioPan * (ivaTaxes.ivaSuper / 100))) + "€");
console.log("Precio del cine : " + (PrecioCine + (PrecioCine * (ivaTaxes.ivaRed / 100))) + "€");
console.log("Precio de los zapatos : " + (PrecioZapatos + (PrecioZapatos * (ivaTaxes.ivaGeneral / 100))) + "€");


console.log(ivaTaxes);