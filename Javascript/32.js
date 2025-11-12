//ASYNC-AWAIT

function descargarNuevosClientes(){
    return new Promise( resolve=>
    {
        console.log('Descargando clientes....')
        setTimeout(()=>{
            resolve('Los clientes fueron Descargados')
        },5000);
    });
}

function descargarUltimosPedidos(){
    return new Promise( resolve=>
    {
        console.log('Descargando pedidos....espere')
        setTimeout(()=>{
            resolve('Los pedidos fueron Descargados')
        },3000);
    });
}
async function app(){
    try{
  /*       const resultado=await descargarNuevosClientes();
        console.log(resultado); */
        const resultado = await Promise.all(  [descargarNuevosClientes(),descargarUltimosPedidos()])
        console.log(resultado[0]);
        console.log(resultado[1]);
    }catch(error){
        console.log(error) 
    }
    
}
app();
console.log('Este codigo no se bloquea')
/* setInterval(function(){
    console.log('set timeout...')
}3000)
 */
