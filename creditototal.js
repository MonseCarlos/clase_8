const persona ={
    nombre:"John Doe",
    tarjetas:[
        {
            credito: 19000
        },
        {
            credito:50000
        }
    ]
}

let totalcredito =0;

for(let x = 0; x<persona.tarjetas.length; x++){
    totalcredito = totalcredito + persona.tarjetas[x].credito
}

console.log("El total del credito de: "+ persona.nombre + " es de: " + totalcredito)