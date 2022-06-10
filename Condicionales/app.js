// CONDICIONALES

// IF, ELSE

let edad = 30

if (edad < 18) {
    console.log('Menor de edad');
}
else if (18 <= edad && edad < 21){
    console.log('Adulto jóven');
}
else {
    console.log('Adulto');
}

// && --> AND , || --> OR


// IF TERNARIO

let dia = 'lunes';

let resultado = dia == 'lunes'? 'Hoy es lunes' : 'Hoy no es lunes';

console.log(resultado);

// SWITCH

let hora = 16;

switch (hora){
    case 7:
        console.log('Despertarse');
        break;
    case 13:
        console.log('Almorzar');
        break;
    case 21:
        console.log('Cenar');
        break;
    default:
        console.log('Libre');
        break;
}


// EJERCICIO 1

let precioPorLitro = 0;
let total = 0;
function totalAPagar (vehiculo, litros){
    if (vehiculo == 'coche' && litros > 0 && litros < 25) {
        precioPorLitro = 86;
        total = total + 50;
        console.log(total = total + (litros * precioPorLitro));
    }
    else if (vehiculo == 'moto' && litros > 0 && litros < 25) {
        precioPorLitro = 70;
        total = total + 50;
        console.log(total = total + (litros * precioPorLitro));
    }
    else if (vehiculo == 'autobus' && litros > 0 && litros < 25){
        precioPorLitro = 55;
        total = total + 50;
        console.log(total = total + (litros * precioPorLitro));
    }
    
}

totalAPagar('moto', 20);




