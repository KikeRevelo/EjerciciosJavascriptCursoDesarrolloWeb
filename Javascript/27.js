// el OBJECT CONSTRUCTOR Y EL OBJECT LITERAL

//object literal o el obejto literal luce asi:
const producto={
    nombre:'tablet',
    precio:200, 

}

//el Object LITERAL ES ASI: 
//Crear clases en mayuscula

function Producto(nombre, precio, disponibilidad,tamaño){
this.nombre=nombre;
this.precio=precio;
this.disponibilidad=disponibilidad;
this.tamaño=tamaño;
}

const producto2=new Producto('Monitor Curvo',800, true, `26'`);
const producto3=new Producto('laptop',750 ,false,`21'`)
console.log(producto2)
console.log(producto3)

//EL PROTOTYPE ESTA ASOCIADA A UNA FUNCION QUE SOLO PUEDE SER USAD EN ESE TIPO DE OBEJETO, AL FINAL SON FUNCIONES

//CREAR funciones que solo se utilizan en un obejto en especicifico

function formatearProducto(producto){
    return `El producto ${producto.nombre} tiene un precio de : $ $<{producto}`
}