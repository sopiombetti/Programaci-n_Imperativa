// FOR 

// EJERCICIO 1

const loro = texto => {
    for (let i= 1; i <= 5; i++){
        console.log(texto);
    }
}

loro('hola');

// EJERCICIO 2

function noParesDeContarImparesHasta(numero){
    let contador = 0;
    for (i = 0; i <= numero; i++){
        if (i % 2 !== 0){
            contador = contador + 1;
        }
    }
    return contador;
}

console.log(noParesDeContarImparesHasta(10));

// EJERCICIO 1

function contar (a) {
    let fin = a + 10;
    for (let i = a; i < fin; i++) {
        let sig = i + 1;
        console.log(sig);
    }
    
}

console.log(contar(5));

// EJERCICIO 2

function TresEnTres () {
    for (i = 5; i < 20; i + 3) {
        let num = i + 3;
        console.log(num);
    }
}

TresEnTres();

// WHILE

// EJERCICIO 1

function tablaDeMultiplicar(numero) {
    let i = 1;
   while (i <= 10) {
       resultado = numero * i;
       console.log(numero+' '+'*'+' '+i+' '+'='+' '+resultado);
       i++;
   }  
}

console.log(tablaDeMultiplicar(4));