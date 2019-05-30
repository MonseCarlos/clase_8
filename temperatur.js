const temperaturas = [19,24,25,30,10]

let temperaturaalta = 0

for (let x=0; x<temperaturas.length; x++){
    if(temperaturas[x]>temperaturaalta){
        temperaturaalta = temperaturas[x]
    }
}

console.log("La temperatura mas alta es de: " + temperaturaalta)