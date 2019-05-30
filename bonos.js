const persona ={
    nombre : "John Doe",
    bonos:[100,500,1300]
}

let totbonos = 0;

for(let x = 0;x<persona.bonos.length; x++){
    totbonos= totbonos + persona.bonos[x]
}

console.log("El total de bonos de: " + persona.nombre + " es de: " + totbonos)