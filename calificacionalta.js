const alumno = {
    nombre: "John Doe",
    calificaciones:[7,10,9,6]
}

let calificacionalta = 0

for(let x = 0; x <alumno.calificaciones.length; x++){
    if(alumno.calificaciones[x]> calificacionalta){
        calificacionalta = alumno.calificaciones[x]
    }
}

console.log("La calificacion mas alta del alumno: " + alumno.nombre + " es: " + calificacionalta)