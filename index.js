//Cada vez que pongo un prompt es necesaria esta línea de código:
const prompt = require(`prompt-sync`)();

const nombre = prompt(`¿Cómo es tu nombre?`);
console.log(`Hola, ${nombre}!`);
//Si quiero llamar en consola tengo que poner: "node "nombre de archivo" ej: node index.js

//Notas de la clase:

//While
// while (condicion) {
// código a ejecutar
// contador para que el código dejé de ejecutarse
// para que la condición deje de ser true
let vuelta = 1

while(vuelta <= 5) {
    console.log ("Dando la vuelta " + vuelta);
    vuelta++
}

//const prompt = require(`prompt-sync`)();

let numero= prompt("Ingresa un número:");
let contador= 1;

while (contador <= numero){
    console.log(contador);
    contador++;
}

//Do while
let ronda = 5;

do{
    console.log("Dando la ronda " + ronda);
    ronda++;
} while(ronda <= 5);

//2do ej:
let intentos = 1;

do{
    console.log("Intento número: " + intentos);
    intentos++;
} while (intentos < 3);
console.log("Fin de los intentos.");

//3er ej:
let number;
do {
    number = Math.floor(Math.random() * 10);
    console.log("Número generado:", number);
} while(number !== 7);
console.log("¡Se encontró el número 7!");


//ARRAYS

let miArray = ["Star Wars", true, 23];

//Para acceder a un elemento puntual de un array: nombramos al array y en los corchetes ponemos el indice

//Ej:
miArray[0]; //Esto llamaría a "Star Wars"
miArray[1]; //Esto llamaría a "true"
miArray[2]; //Esto llamaría a 23
