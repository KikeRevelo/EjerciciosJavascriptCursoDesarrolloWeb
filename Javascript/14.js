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
console.log(arregloMixto.length);
console.log(arregloMixto[4])
 console.log(arregloMixto[0])
 console.log(arregloMixto[1])
  console.log(arregloMixto[5])

//Recorrer un arreglo
numeros.forEach(function(numero,index){
    console.log(`${index} : ${numero}`);
});