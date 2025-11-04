function sumar(n1,n2){
    return n1+n2
}
const resultado= sumar(2,5)
console.log(resultado)

let total= 0;
function agregarCarrito(precio){
    return total +=precio;
}
//creamos una segunda funcion para calcualr impuesto
function  calcularImpuesto(total){
    return 1.15*total;
}

total=agregarCarrito(200);
total=agregarCarrito(800);
total =agregarCarrito(450);

console.log(total)

//creamos una segunda variab le
const totalApagar=calcularImpuesto(total)
console.log(`El total a pagar con Impuestos es ${totalApagar.toFixed(2)} euros`)
    // use toDFixed para redondear a dos digitos