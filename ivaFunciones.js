// 

function calcularConIva(precio, ivaNormal = 21) {
    let importe = precio + (precio * ivaNormal / 100);
    return importe;
}

let precioConIva = calcularConIva(20);
console.log(precioConIva);