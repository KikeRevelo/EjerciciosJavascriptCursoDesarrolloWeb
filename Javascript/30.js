//promises 

const usuarioAutenticado=new Promise((resolve, reject)=>{
    const auth=true;

    if (auth){
        resolve('Usuario Autenticado')
    }else{
        reject('No se puede iniciar sesión')
    }

})
usuarioAutenticado
    .then((resultado)=>console.log(resultado)) 
        
    .catch((error)=>console.log(error))
        
    
// En los Promises existen 3 valores
//Pending : No se han cumplido pero tampoco se han rechazado. Esto es cuando 
// Fulfilled: que ya se cumplio
//Reject : Se ha rechazado o no se pudon cumplir 