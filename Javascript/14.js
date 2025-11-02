//Arreglos

const numeros=[10,20,30,40,50];

console.log(numeros[0]);
console.log(numeros[3]);
console.table(numeros);
const meses=new Array('Enero','Febrero','Marzo','Abril','Mayo');
console.table(meses);

const arregloMixto=[10,'Hola',true,null,{nombre:'Juan',edad:30},[1,2,3]];
console.table(arregloMixto);
console.log(arregloMixto[400]);// te da undefined si no existe el indice

//lenth
// console.log(arregloMixto.length);
// console.log(arregloMixto[4])
//  console.log(arregloMixto[0])
//  console.log(arregloMixto[1])
//   console.log(arregloMixto[5])

// Recorrer un arreglo
// numeros.forEach(function(numero,index){
//     console.log(`${index} : ${numero}`);
// });
//lOS METODOS DE LOS ARREGLOS

numeros[5]=60;//agregar un elemento al final del arreglo
// usamos push
numeros.push(70);
console.log(numeros)
console.table(numeros);
//unshift agrega elementos al inicio del arreglo
numeros.unshift(25);
console.table(numeros);

//Eliminar elementos
//pop elimina el ultimo elemento del arreglo
numeros.pop(5);
console.table(numeros);

//eñl uso de shift es para eliminar el primer elemento del arreglo
numeros.shift();
console.table(numeros);


console.log(meses);
meses.splice(2,1);//elimina a partir del indice 2 un elemento
console.table(meses);