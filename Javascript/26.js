// this 
 // creamos un objeto
//  const reservacion={
//     nombre:'Juan',
//     apellido:'Sanchez',
//     total:5000,
//     pagado:false,
//     informacion: function(){
//         console.log(`El cliente ${reservacion.nombre} ha pagado y su total es: ${reservacion.total}`)
//     }
//  }

// reservacion.informacion()
 //THIS hace alusion a la reservacion y no sonar repetitivo
const reservacion={
    nombre:'Juan',
    apellido:'Sanchez',
    total:5000,
    pagado:false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} ha pagado y su total es: ${this.total}`)
    }
 }



const reservacion2={
    nombre:'Pedro',
    apellido:'Sanchez',
    total:5500,
    pagado:false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} ha pagado y su total es: ${this.total}`)
    }
 }
reservacion.informacion()
reservacion2.informacion()