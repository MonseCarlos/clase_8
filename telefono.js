const stock = [
    {   
        marca: "Huawei", 
        modelo: "P30", 
        precio: 13500 },
	{ 
        marca: "Apple", 
        modelo: "iPhone x", 
        precio: 20000 },
	{ 
        marca: "Motorola",
        modelo: "Moto X", 
        precio: 10000 }
]

let index= 0

for(let x = 0; x < stock.length; x++){

    if(stock[x].precio < stock[index].precio){
        index = x
    }


}

console.log("El telefono mas barato es de la marca: " + stock[index].marca + " el modelo: " + stock[index].modelo+ " con un precio de: " + stock[index].precio)
