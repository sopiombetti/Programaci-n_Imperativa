const prompt = require ("prompt-sync")({sigint:true});

// EJERCICIO PRÁCTICA METODOS DE ARRAYS Y DE STRINGS

// Si el correo es corecto (si tiene @), se agrega a admitidos, sino a descartados.

let arrayCorreosPendientes = [
    'iroman@digitalhouse.com', 
    'loki%digitalhouse.com', 
    'loki@digitalhouse.com', 
    'thanosdigitalhouse.com', 
    'thanos@digitalhouse.com'
];

/* array de correos admitidos */
let arrayCorreosAdmitidos = [
    'thor@digitalhouse.com',
    'tucuMan@digitalhouse.com',
    'wanda@digitalhouse.com'
];

let arrayCorreosDescartados = [];
 
function verificarCorreos(correos) {
    for (let i = 0; i < correos.length; i++) {
        const correo = correos[i];
        // console.log(correo);
        if (correo.indexOf('@') != -1) {
            arrayCorreosAdmitidos.push(correo)
        }else{
            arrayCorreosDescartados.push(correo)
        }
    }
}
verificarCorreos(arrayCorreosPendientes);

console.log(arrayCorreosAdmitidos);
console.log(arrayCorreosDescartados);

// Le pide al usuario ingresar un correo

/* let correoUsuario = prompt('ingrese un correo: ');
// console.log(correoUsuario);

const verificarCorreo = (correo)=>{
    if (correo.indexOf('@') != -1) {
        arrayCorreosAdmitidos.push(correo)
        return 'agregado con exito'
    }
    else{
        return 'incorrecto'
    }
}
let returnFuncion = verificarCorreo(correoUsuario);
while(returnFuncion == 'incorrecto'){
    correoUsuario = prompt('ingrese un correo valido: ');
    returnFuncion = verificarCorreo(correoUsuario)
    
}
console.log(arrayCorreosAdmitidos); */



// EJERCICIO PELICULAS (clase 6/6)

let peliculas = ['stars wars', 'totoro', 'rocky', 'pulp fiction', 'la vida es bella'];

// Convierte una por una las peliculas del array a mayusculas

function mayusculas(peliculas){
    let peliculasMayuscula;
    for(let i = 0; i < peliculas.length; i++){
        peliculasMayuscula = peliculas[i].toUpperCase()
        peliculas[i] = peliculasMayuscula;
    } 
    return peliculas;
}

console.log(mayusculas(peliculas));


// array peliculas animadas

let infantiles = ['toy story', 'finding nemo', 'kung-fu panda', 'wally', 'fornite'];

let peliEliminada = infantiles.pop();


function juntarArrays (peliculas, infantiles){
    for(let i = 0; i < infantiles.length; i++){
    peliculas.push(infantiles[i]);
    }
    return peliculas;
}

console.log(juntarArrays(peliculas, infantiles));

// Comparar calificaciones

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function calificaciones (pelis, infant){
    let respuesta;
    for (i = 0; i< pelis.lenght; i++){
        if (pelis[i] === infant[i]){
            respuesta = true;
        }
        else{
            respuesta = false;
        }
    }
    if (respuesta == true){
        console.log('Son iguales');
    }
    else{
        console.log('Son distintas');
    }
}

calificaciones(asiaScores, euroScores);

