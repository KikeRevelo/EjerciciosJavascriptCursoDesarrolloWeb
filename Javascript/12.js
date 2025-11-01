 const producto = {
       nombreProducto: "Monitor 20 pulgadas",
       precio:300,
       disponible: true
 }

producto.imagen='imagen.jpg';
    console.log(producto); 
       
    console.log(producto.imagen);
    //objet freeze evita que se puedan hacer modificaciones a un objeto
//     object.freeze(producto);
    producto.disponible=false;
    producto.imagen='imagen2.jpg';
    console.log(producto);

    //use strict evita que se puedan crear variables globales de forma accidental
      let edad=30;
     console.log(edad);
     //yambiej esta Objet.Seal evita que se puedan agregar o eliminar propiedades de un objeto ppero si modificar las existentes, freeze no permite ninguna modificacion
     Object.seal(producto);
     producto.precio=400;
     delete producto.disponible;
     console.log(producto);