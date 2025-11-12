// classes

class Producto {
    constructor(nombre,precio){
        this.nombre=nombre;
        this.precio=precio;
    }
    //OTRO METODO
    formatearProducto(){
        return `El Producto ${this.nombre} tiene un precio de: ${this.precio}`
    }
    //AQUI SE PONDRIA OTRO METODO
}
//video 137 sobre HERENCIA POO
//CREAMOS UNA CLASE LLAMADA LIBROS

class Libro extends Producto{
    constructor(nombre, precio, isbn){
       super(nombre,precio)
        this.isbn=isbn;
    }
    formatearProducto(){
        return `${super.formatearProducto()} y su ISBN es: ${this.isbn}`
    }   
}
//instanciamos el Libro

const libro=new Libro('Javascript, la Gran Revolucion', 45,9966666666)

const producto2=new Producto('Monitor Curvo de 49"',800);
const producto3=new Producto('Laptop',500);

console.log(producto2)
console.log(producto3)
console.log(libro.formatearProducto())
console.log(producto2.formatearProducto())

