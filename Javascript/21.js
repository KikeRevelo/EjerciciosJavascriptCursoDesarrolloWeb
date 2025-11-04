//ARROW FUNCTION SON OTRA FORMA DE DECLARAR FUNCIONES
//la declaracion de la funcion no puedes utilziar arrow function, aqui seria un error;

//declaracion dew la funcion 
// sumar();
// function sumar(){
//     console.log(10+10)
// }



//la expresion de la funcion, aqui si con esta sintaxis si
;
const sumar2=(num1,num2)=>
    console.log(num1+num2)

sumar2(10,5)
//otro arrow function
const aprendiendo=(tecnologia)=>{
    console.log(`Aprendiendo Tecnologia : ${tecnologia}`);
}
aprendiendo(`Javascript`);
aprendiendo(`Python`);
aprendiendo(`Angular`);

const meses=['Enero','Febrero','Marzo','Abril','Mayo'];
console.table(meses);   

//CARRITO DE COMPRAS

const carrito=[
    {nombre:'Monitor 20 Pulgadas',precio:500},
    {nombre:'Television 50 Pulgadas',precio:700},       
    {nombre:'Tablet',precio:300},
    {nombre:'Audifonos',precio:200},
    {nombre:'Teclado',precio:50},
    {nombre:'Celular',precio:500},
];  
console.table(carrito);

// queremos ver s existe marzo en el arreglo meses
console.log(meses)

meses.forEach(function(mes){
if(mes=='Marzo'){
    console.log('Marzo si existe');
}else{
    console.log('No existe');
    }
}); 

// usando includes
if(meses.includes('Diciembre')){
       console.log('Si, EXISTE')
}else{
    console.log('No, NO EXISTE')
    }
;
//usando some en meses, sirve para saber si al menos un elmento existe llamandose asi
const existeEnero=meses.some(function(mes){
    return mes==='Enero';;
});
console.log('Usando some en meses:,     ${existeEnero}')

//usando some en carrito de compras con funcion arrow
const existeTablet=carrito.some(producto=>producto.nombre==='Tablet');
console.log('Usando some en carrito de compras ${existeTablet}');

let resultado;
resultado=carrito.some(function(producto){
    return producto.nombre==='Celular';
});
console.log(resultado);
//metodo reduce para sumar los precios del carrito de compras
resultado=carrito.reduce(function(total,producto){
    return total+producto.precio;

},0); // el cero es el valor inicial de total

console.log (`La suma   de los  articulos del carrito es:${resultado}  dolares`);

//ahora usando arrow fuction
resultado=carrito.reduce((total,producto)=>total+producto.precio,0);
console.log (`Usando arrow function La suma   de los  articulos del carrito es:${resultado}  dolares`);


//metodo filter para filtrar elementos de un arreglo
resultado=carrito.filter(function(producto){
    return producto.precio>400;
})
console.table(resultado);

//usando arrow function
resultado=carrito.filter(producto=>producto.precio<400);

console.table(resultado);