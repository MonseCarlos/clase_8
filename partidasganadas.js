const jugador = {
    nombre : "John Doo",
    partidas:[true,false,true,true]
}

let totpartidas = 0

for(let x=0; x < jugador.partidas.length ;x++){

    if(jugador.partidas[x]){
            totpartidas = totpartidas + 1
        
    }
}

console.log("El jugador: " + jugador.nombre + " gano: " + totpartidas + " partidas")