/* FOR EACH   Y Map*/

const carrito=[
    {nombre:'Monitor 20 Pulgadas',precio:500},
    {nombre:'Television 50 Pulgadas',precio:700},       
    {nombre:'Tablet',precio:300},
    {nombre:'Audifonos',precio:200},
    {nombre:'Teclado',precio:50},
    {nombre:'Celular',precio:500},
];  
/* 
carrito.forEach(function(producto){
    console.log(producto);
}) */

// con arrow function
carrito.forEach(producto=>console.log(producto.nombre))

//map crea un nuevo arreglo
carrito.map(producto=>console.log(producto.nombre))