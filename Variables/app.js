const prompt = require("prompt-sync")({sigint: true});

// VARIABLES

let nombre = 'Sofia';

// Una vez que la variable fue definida, se puede usar o renombrar

nombre = 'Paula';

const apellido = 'Gomez';

// La const una vez definida, se puede usar pero no se puede renombrar

apellido = 'Lopez';  // Esto no se puede

// Las variables let y const solo pueden ser usadas o llamadas dentro del bloque de código en el que fueron definidas

// TIPOS DE DATOS

let string = 'Hola buen dia';
let number = 22;
let boolean = true;
let undefined;  // No tiene valor
let vacio = null   // Valor vacio o desconocido
let array = ['Hola', 21];

// OPERACIONES

// Aritméticas (devuelven resultado numérico)

10 + 5  // suma
10 - 5  // resta
10 * 5  // muktiplicación
10 / 5  //división
10++  // incrementa 1
10--  // decrementa 1
15 % 2  // el resto de dividir 15 por 2

// Concatenación

let Nombre = 'Sofía';
let Apellido = 'Gomez';
let nombreCompleto = 'Me llamo ' + nombre + ' ' + apellido;

// Comparación (devuelven true o false)

10 == 10  // igualdad
10 != 15  // desigualdad

10 === '10'  // desigualdad estricta (es el mismo valor, pero el tipo de dato es distinto. Uno es número, y el otro es string)

10 > 5 // mayor que
10 >= 5  // mayor o igual que 
10 < 15  // menor que
10 <= 15  // menor o igual que

