const stores = [{
    name: "Amazon",
    stock: [
            { marca: "Huawei", modelo: "P30", precio: 11999 },
            { marca: "Apple", modelo: "iPhone x", precio: 18000 },
            { marca: "Motorola", modelo: "Moto X", precio: 9000 }
            ]
    },
    {
    name: "Liverpool",
    stock: [
            { marca: "Huawei", modelo: "P30", precio: 13500 },
            { marca: "Apple", modelo: "iPhone x", precio: 20000 },
            { marca: "Motorola", modelo: "Moto X", precio: 10000 }
        ]
    }
    ]

let indicetienda = 0
let indicetelefono = 0

for(let x = 0; x <stores.length;x++){
    for(let y = 0; y< stores[x].stock.length;y++){

        if(stores[x].stock[y].precio < stores[indicetienda].stock[indicetelefono].precio){
            indicetienda = x
            indicetelefono = y
        }
    } 
}
    
console.log("El telefono mas barato esta en: " + stores[indicetienda].name + " es el telefono: " + stores[indicetienda].stock[indicetelefono].modelo + " de la marca: " +  stores[indicetienda].stock[indicetelefono].marca + " con un precio de: " +  stores[indicetienda].stock[indicetelefono].precio)