// FUNCIONES

// Funciones declaradas

function saludar(nombre) {
    return 'Hola ' + nombre;
}

// La función se llama "saludar", "nombre" es la variable, con return le decimos qué queremos que nos devuelva usando la variable

saludar('Sofía');  // Asi se la invoca a la función, y le damos un valor a la variable

console.log(saludar('Sofia'));  // Con el console log nos lo muestra en la terminal 


function sumar(numeroA, numeroB) {
    return numeroA + numeroB;
}

console.log(sumar(15,22));


// Funciones expresadas

let triple = function (a) {
    return a * 3;
}

console.log(triple(20));


let saludo = function (nombre = 'Sofia', apellido = 'Gomez') {
    return 'Hola ' + nombre + ' ' + apellido;
}

// Se le puede poner valores por defecto

saludo();   // Si aca le ponemos algun otro valor, lo reemplaza


// Si definimos una variable dentro de una función, solo podrá ser llamada dentro de ella (scope local). 
// Si definimos una variable fuera de una función, puede ser llamada en cualquier lado (scope global).


// Funciones arrow

let suma = (a, b) => a + b;

console.log(suma(3, 4));


// EJERCICIOS (clase 25/5)

function url (string) {
    return 'www.' + string + '.com.ar';
}

console.log(url('google'));


let sueldo = (valor) => valor / 40;

console.log(sueldo(80000));