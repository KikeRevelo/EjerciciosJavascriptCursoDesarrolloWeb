//estrcutura de control For loop

// for (let i=0; i<10; i++){
//     console.log(i)
// }

// decir si es impar o par un numero

// for (let i=1;i<=100; i++){
// if(i%2==0){
//         console.log(`el numero ${i} es par`)
// }else{
//        console.log(`el numero ${i} es impar`)
// }
//         }


const carrito=[
    {nombre:'Monitor 20 Pulgadas',precio:500},
    {nombre:'Television 50 Pulgadas',precio:700},       
    {nombre:'Tablet',precio:300},
    {nombre:'Audifonos',precio:200},
    {nombre:'Teclado',precio:50},
    {nombre:'Celular',precio:500},
];  



for(let i=0; i< carrito.length; i++){
    console.log(carrito[i].nombre)
    }
 