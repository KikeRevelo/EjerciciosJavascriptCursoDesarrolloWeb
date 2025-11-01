
//UNIR DOS OBJETOS CON EL OPERADOR SPREAD
const producto={
    nombrepdoducto:"Monitor 20 pulgadas",
    precio:300,
    disponible:true     
}

const medidas={
    peso:'1kg',
    medida:'1m' ,//un metro
};

const nuevoProducto={...producto,...medidas,imagen:'imagen.jpg'};
//acaba de unirse los objetos, solo dees añadir tres puntos, el nombre dle objeto y listo
console.log(nuevoProducto);
// orro ejemplo
const carro={
    modelo:'2020',
    motor:'V8'
}
const nuevoCarro={...carro, color:'rojo',precio:50000};
console.log(nuevoCarro);
//paciente

const paciente={
    nombre:'Juan',
    edad:30, }
console.log(paciente);
    const actualizarPaciente={...paciente,telefono:'555-555-5555',direccion:'Calle falsa 123'}; 
    console.log(actualizarPaciente);
    //alumno

    const alumno={
        nombre:'Ana',
        curso:'Matematicas', 
        edad:20    
    }

    const actualizarAlumno={...alumno,universidad:'Universidad Carlos III',beca:true};
    console.log(actualizarAlumno);       
