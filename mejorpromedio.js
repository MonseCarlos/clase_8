const alumnos =[
    {
        nombre: "Juan",
        materias: [{
            nombre:"Ciencias",
            calificacion:80
        },
        {   
            nombre:"matematicas",
            calificacion:90

        }             
        ]
    },
    {
        nombre: "Maria",
        materias:[{
            nombre:"Ciencias",
            calificacion:75
        },
        {
            nombre:"matematicas",
            calificacion:80
        }

        ]
    }
]

let index =0;
let promedio = 0;
let promedio2 = 0;

for(let x = 0; x < alumnos.length; x++){

    promedio2 = 0
    for(let y = 0; y < alumnos[x].materias.length; y ++){
        promedio2 = promedio2 + alumnos[x].materias[y].calificacion
        //console.log("suMA "+ promedio2)
    }
        
    promedio2 = promedio2/alumnos[x].materias.length
    console.log(promedio2)
    
    if(promedio2 > promedio){
        promedio = promedio2
        index = x
    }
}

console.log("El alumeno: " + alumnos[index].nombre + " tiene el promedio mas alto con: " + promedio)