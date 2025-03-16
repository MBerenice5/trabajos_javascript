//Ejercicio 1 - Declarar dos variables:
let edad1 = 25;
let peso1 = 80;



//Ejercicio 2 – Usando las variables:
let nombre = prompt("Ingrese su nombre");
let edad2 = prompt("Ingrese su edad");
let peso2 = prompt("Ingrese su peso");

console.log(`Su nombre es ${nombre}, tiene ${edad2} años y pesa ${peso2} kilos.`)



//Ejercicio 3 – Constantes / Validación de Edad:
const EDAD_MINIMA = 18;
const EDAD_MAXIMA = 99;

edadUsuario = parseInt(prompt("Por favor, ingrese su edad para verificar si cumple con los requisitos."));

//Utilizando if
if (edadUsuario > EDAD_MINIMA && edadUsuario < EDAD_MAXIMA) {
    console.log("Tiene la edad adecuada para realizar el test.")
} else {
    console.log("Disculpe, no cumple con la edad deseada para realizar el test.")
}

//Utilizando if y else if
if (edadUsuario < EDAD_MINIMA){
    console.log("Disculpe, no cumple con la edad mínima requerida.");
} else if (edadUsuario > EDAD_MAXIMA){
    console.log("Disculpe, su edad supera la edad máxima requerida.");
} else {
    console.log("Tiene la edad adecuada para realizar el test.")
}

//Utilizando if y NaN
if (isNaN(edadUsuario)){
    console.log("Por favor, ingrese su edad en números.")
} else if (edadUsuario > EDAD_MINIMA && edadUsuario < EDAD_MAXIMA) {
    console.log("Tiene la edad adecuada para realizar el test.")
} else {
    console.log("Disculpe, no cumple con la edad deseada para realizar el test.")
}

//Utilizando switch
switch(true){
  case edadUsuario < EDAD_MINIMA:
    console.log("Disculpe, no cumple la edad mínima requerida.");
    break;
  case edadUsuario > EDAD_MAXIMA:
    console.log("Disculpe, su edad supera la edad máxima requerida.");
    break;
  default:
    console.log("Tiene la edad adecuada para realizar el test.");
}



//Ejercicio 4 – Tipo de Datos:
let verdadero = true;
let texto = "estudiando";
let numero = 5;
let nada = null;


let suma = numero + 20;

console.log("Me paso el fin de semana " + texto + ".");

if(verdadero === true) {
    console.log("La variable es true")
} else{
    console.log("La variable es false");
}

if(nada === null) {
    console.log("La variable es null.");
} else {
    console.log("La variable si tiene un valor asignado.");
}



//Ejercicio 5 – Operadores:
let firstNumber = 10;
let secondNumber = 15;

let resultadoSuma = firstNumber + secondNumber;
let resultadoResta = firstNumber - secondNumber;
let resultadoMultiplicacion = firstNumber * secondNumber;
let resultadoDivision = firstNumber / secondNumber;

console.log(resultadoSuma);
console.log(resultadoResta);
console.log(resultadoMultiplicacion);
console.log(resultadoDivision);



//Ejercicio 6 - Comparaciones y Operadores Lógicos:
let numberOne = 1;
let numberTwo = 25;

if (numberOne >= 10 && numberTwo >= 10){
    console.log("Ambos números son mayores que 10.")
} else {
    console.log("Uno o ambos números no son mayores que 10.")
}



//Ejercicio 7 - Intercambio de Valores:
let number1 = 10;
let number2 = 15;

// Guardo el valor original de number1 en una variable temporal
let temp = number1;

// Hago el intercambio de valores
number1 = number2;
number2 = temp;

console.log(number1);  // Imprime: 15
console.log(number2); // Imprime: 10



//Ejercicio 8 - Conversión de Temperaturas:
let celsius = parseFloat(prompt("Por favor, ingrese la temperatura en grados Celsius."));
let fahrenheit = celsius * 9 / 5 + 32;

console.log(`La temperatura en grados fahrenheit es de ${fahrenheit}°F.`);

//Utilizando if y NaN
if (isNaN(celsius)) {
    console.log("Por favor, ingrese un número válido.");
} else {
    let fahrenheit = celsius * 9 / 5 + 32;
    console.log(`La temperatura en grados Fahrenheit es de ${fahrenheit}°F.`);
}



//Ejercicio 9: Cálculo del IMC:
let peso = parseFloat(prompt("Por favor, ingrese su peso."));
let altura = parseFloat(prompt("Por favor, ingrese su altura en metros."));
//let imc = peso / (altura * altura);

if (isNaN(peso) || isNaN(altura)) {
    console.log("Por favor, ingrese valores numéricos válidos para el peso y la altura.");
} else {
    let imc = peso / (altura * altura);

    console.log(`Teniendo en cuenta su peso ${peso} kg y su altura ${altura} metros, su IMC es de ${imc.toFixed(2)}.`);

//Utilizando if-else
    if (imc < 18.5) {
        console.log(`Como su IMC es de ${imc.toFixed(2)}. Usted tiene bajo peso.`);
    } else if (imc >= 18.5 && imc <= 24.9) {
        console.log(`Como su IMC es de ${imc.toFixed(2)}. Usted tiene un peso normal.`);
    } else if (imc >= 25.0 && imc <= 29.9) {
        console.log(`Como su IMC es de ${imc.toFixed(2)}. Usted tiene sobrepeso.`);
    } else if (imc >= 30.0) {
        console.log(`Como su IMC es de ${imc.toFixed(2)}. Usted tiene Obesidad.`);
    }

//Utilizando switch
    switch (true) {
        case imc < 18.5:
            console.log(`Como su IMC es de ${imc.toFixed(2)}. Usted tiene bajo peso.`);
            break;
        case imc >= 18.5 && imc <= 24.9:
            console.log(`Como su IMC es de ${imc.toFixed(2)}. Usted tiene un peso normal.`);
            break;
        case imc >= 25.0 && imc <= 29.9:
            console.log(`Como su IMC es de ${imc.toFixed(2)}. Usted tiene sobrepeso.`);
            break;
        case imc >= 30.0:
            console.log(`Como su IMC es de ${imc.toFixed(2)}. Usted tiene Obesidad.`);
    }
}


//Ejercicio 10 - Cálculo de Descuento:
let precioOriginal = parseFloat(prompt("Por favor, ingrese el precio original del producto."));
let porcentajeDescuento = parseFloat(prompt("Por favor, ingrese de cuanto fue el descuento."));

if (isNaN(precioOriginal) || isNaN(porcentajeDescuento)) {
    console.log("Por favor, ingrese valores numéricos válidos");
} else {
    let montoDescuento = precioOriginal * (porcentajeDescuento / 100);

    let precioFinal = precioOriginal - montoDescuento;

    console.log(`Con el descuento aplicado, el precio final es de ${precioFinal.toFixed(2)}.`);
}
