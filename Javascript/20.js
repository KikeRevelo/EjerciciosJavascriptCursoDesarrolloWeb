//medotodos de Propiedad al fiunal son funciones

// un reproductor debe ser un obejeto

const reproductor={
    reproducir :function(id){
        console.log('Reproduciendo Canción con ID: ${id}')
    },
    // hacemos la funcion de pausar
    pausar:function(){
        console.log('Pausando...')
    },
    crearPlayList:function(nombre){
        console.log(`Creando Playlist: ${nombre}`)
    },
    reproducirPlayList:function(nombre){
        console.log(`Reproduciendo la PlayList: ${nombre}`)
    }

}
//ahora bien , se puede crear afuera del Objeto la funcion.
// usamos el igual por lo anterior

reproductor.borrarCancion= function(){
    console.log('Borrando Canción con Id: ${id}}')
}
reproductor.reproducir(3840)
reproductor.pausar();
reproductor.borrarCancion();
reproductor.crearPlayList('Heavy Metal');
reproductor.reproducirPlayList('Heavy Metal');