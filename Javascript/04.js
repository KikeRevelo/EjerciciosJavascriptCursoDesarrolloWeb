
//cadena string
const producto='Monitor de 20p';
const producto1=String('Monitor de 30p');
const producto2= new String('Monitor de 50 pulgadas');
const producto4="Monitor 20'"; //ccon diagonal invertida se peude arreglar la pulgada

console.log(producto)
console.log(producto1)
console.log(producto2)
  console.log( typeof producto2)
      console.log( typeof producto4)
        console.log(producto4)

        // tema de length es una propeidad y no metodo
   console.log(producto2.length);     
   const tweet='Aprendiendo Javascript con un Buen Metodo' 

//    indexof
console.log(tweet.indexOf('Javascript'));
console.log(producto.indexOf('monitor'))// aqui me da -1 porque lo escribi en minuscula, debe dar negativo  si lo escribes mal

console.log(producto.indexOf('Monitor'));

//Tambien el Metodo INCLUDES te da booleno

console.log(tweet.includes('Javascript'));
console.log(producto.includes('monitor'));