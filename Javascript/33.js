//FECTH API

    async function obtenerEmpleados(){

    const archivo='/Javascript/empleados.json';

    // fetch(archivo)
    //     .then(resultado=>{
    //         // console.log(resultado)// con resultado vemos  si el servidor esta en 404 o 200  y es un promise
    //         return resultado.json();
    //     })
    //     .then(datos=>{
    //         console.log(datos)
         
    //     })
    const resultado=await fetch(archivo);
    const datos=await resultado.json()
    console.log(datos)
}
obtenerEmpleados()