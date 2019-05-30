const arreglo = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
]

let suma = 0;

for(let x = 0; x<arreglo.length; x++){
    for(let y = 0; y< arreglo[x].length;y++){
        suma = suma + arreglo[x][y]
    }
}

console.log("El total es de: " + suma)