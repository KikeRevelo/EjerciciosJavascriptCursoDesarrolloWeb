//Funciones en Javascript
//declaracion de la funcion

function sumar(){
    console.log(10+25)
}
//debemos llamar la funcion
sumar();

//Expresion de la funcion 
const sumar2=function(){
    console.log(50+125)

}
//llamar la funcion
sumar2()

// AHROA EL HOISTING, es cuando eleva la funcion, es decir primero la llama y luego la crea asi.
 sumar()
 function sumar(){
    console.log(50+225)
 } // y aqui no da error

 // en la segunda forma de hacer funciones, si da error, pues la toma mas como una declaracion de const y no como funicion,veamos
  sumar4();
  const sumar4=function(){
    console.log(3+3);
  }