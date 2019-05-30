const ingresos=[{
        concepto: "factura",
        total: 120
    },
    {   
        concepto:"factura",
        total:180
    }
]

const gastos=[{
        concepto: "salud",
        total: 150
    },
    {
        concepto:"super",
        total:300
    }
]

let totalingresos=0;
let totalgastos=0;
let ingresoneto=0
let impuestos=0

for(let x = 0; x<ingresos.length;x++){
    totalingresos= totalingresos + ingresos[x].total
}

for(let y=0;y<gastos.length;y++){
    if(gastos[y].concepto === "salud"){
        totalgastos = totalgastos + gastos[y].total
    }
}

ingresoneto = totalingresos-totalgastos
impuestos = ingresoneto *.16

console.log("El total de tus ingresos fue: " + totalingresos + " se dedujo: " + totalgastos + " por concepto de salud, registrando un ingreso neto de: " + ingresoneto + " tendras que pagar de impuestos: " + impuestos)