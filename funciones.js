const PI = 3.14;

function saludar() {
    console.log("Hola Mundo");

}

function saludarPorNombre(nombre) {
    console.log("hola" + nombre);
}

function calcularCircunferencia(r) {
    const c = 2 * PI * r;
    return c;
}
saludar();
saludarPorNombre("Juan");

let radio = 5;
let circunferencia = calcularCircunferencia(6);
console.log(circunferencia);