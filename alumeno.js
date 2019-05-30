const alumenos = [
    {
        nombre: "juan",
        edad: 25
    },
    {
        nombre:"maria",
        edad:30
    }

]

indice = 0

for(let x =0; x<alumenos.length;x++){
    if(alumenos[x].edad > alumenos[indice].edad){
        indice = x
    }
}

console.log("El alumeno mas grande es: " + alumenos[indice].nombre + " con " + alumenos[indice].edad + " años")