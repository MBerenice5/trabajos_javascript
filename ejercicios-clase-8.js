//Ejercicio 1 y 4: DECLARAR Y MOSTRAR DATOS y CONCATENACION UTILIZANDO OPERADOR (+)
// Declará una variable con tu nombre y otra con tu edad. Mostrá ambos valores usando console.log().
// Utilizá las variables que creaste de nombre y edad y mostra en consola el mensaje "Mi nombre es: (tuvariable) y tengo (tuvariable) años"
let nombre = "Berenice";
let edad= 25;
console.log("Mi nombre es " + nombre + " y tengo " + edad + " años.");



//Ejercicio 2: SUMA DE 2 NUMEROS
// Declara las variables - num1 - num2 - resultado - y mostra el resultado usando console.log()
let number1= 5;
let number2= 10;
let resultado= number1 + number2;
console.log(`La suma de ${number1} + ${number2} da como resultado ${resultado}.`);


//Ejercicio 3 y 5: Calculos simples y CONCATENACION UTILIZANDO TEMPLATE LITERALS (${})
// Pedile al usuario dos numeros. Recorda usar parseInt() para convertir texto a numero y prompt() para pedir la info al usuario
// Realiza los calculo de suma - resta - multiplicacion y division
// Mostrar el resultado de cada calculo usando console.log()
// Mostrar el mismo mensaje anterior (Ejercicio 4) pero usando las backtics
let num1 = parseInt(prompt("Ingrese el primer número"));
let num2 = parseInt(prompt("Ingrese el segundo número"));

let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = num1 / num2;

console.log(`La suma de ${num1} + ${num2} da como resultado ${suma}.`);
console.log(`La resta de ${num1} - ${num2} da como resultado ${resta}.`);
console.log(`La multiplicación de ${num1} * ${num2} da como resultado ${multiplicacion}.`);
console.log(`La división de ${num1} / ${num2} da como resultado ${division}.`);



//Ejercicio 5: BOOLEANOS Y CONDICIONALES
// Declarar una variable nota con un numero.
// si la nota es mayor o igual a 6
// Mostrar "Aprobado"
// Sino mostrar "Desaprobado"

//Si se lo pido al usuario:
let nota = parseInt(prompt("Ingrese la nota del estudiante"));

//Si declaro la nota yo:
//let nota = 7;

if(nota >= 6){
    console.log("El estudiante esta aprobado");
}
else{
    console.log("El estudiante esta desaprobado");
}