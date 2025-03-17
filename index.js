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
//Se pueden almacenar diferentes tipso de datos pero generalmente se almacenan de un mismo tipo.
let miArray = ["Star Wars", true, 23];

//Para acceder a un elemento puntual de un array: nombramos al array y en los corchetes ponemos el indice

//Ej:
miArray[0]; //Esto llamaría a "Star Wars"
miArray[1]; //Esto llamaría a "true"
miArray[2]; //Esto llamaría a 23

//Para acceder al total de elementos del array usamos:
miArray.length;

//Ej 2:

let frutas = ["Manzana", "Banana", "Naranja", "Kiwi"];

console.log(frutas[2]); //Naranja
console.log(frutas.length) //4

//Ej 3:

let nombres = ["Ana", "Luis", "Carlos", "Marta", "Poli"];

for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

//Matrices
// La FILA en la matriz es de izquierda a derecha, horizontal
// la COL en la matriz es de arriba a abajo, vertical

const matrizDeEdades = [
    [20, 45, 22, 50, 13, 12], //0
    [14, 45, 12, 12, 13, 12], //1
    [5, 4, 22, 5, 13, 5], //2
    [9, 73, 12, 5, 8, 31] //3
];

console.log(matrizDeEdades[3]); //responde: [9, 73, 12, 5, 8, 31]

console.log(matrizDeEdades[3][5]); //responde: 31
//fila 3, columna 5

//Matriz con bucle for anidado=
let matrizEjemplo = [
    [1, 2, 3] // i = 0
    [4, 5, 6] // i = 1
    [7, 8, 9, 10] // i = 2
//   0  1  2   3
];

for (let i = 0; i < matrizEjemplo.length; i++) {
    //Con el 1er for recorro las filas
    for (let j = 0; j < matrizEjemplo[i].length; j++) {
        //Con el 2do for, recorro las columnas
        console.log("Los números de la matrizEjemplo son: " + matrizEjemplo[i][j]);
    }
}

// 1ra vuelta del for completo= 1 - 4 - 7
//2da vuelta = 2 - 5 - 8
//3ra vuelta = 3 - 6 - 9 - 10

//Ej 2 con bucle for=
let butacasCine = [
    ["Ocupada", "libre", "Ocupada", "Ocupada", "libre"],
    ["Ocupada", "Ocupada", "Ocupada", "libre", "Ocupada"],
    ["Ocupada", "Ocupada", "Ocupada", "Ocupada", "libre"],
    ["Ocupada", "libre", "Ocupada", "Ocupada", "Ocupada"],
];
//Inicializamos las variables para las butacas libres y ocupadas
let libre = false;

//Recorremos la matriz con un bucle for para verificar el estado de las butacas
for (let i = 0; i < butacasCine.length; i++) {
    for (let j = 0; j < butacasCine.length; j++) {
        //Si la butaca esta libre, cambiamos la variable libre a true
        if (butacasCine[i][j] === "Libre"){
            libre = true;
            console.log("La butaca en la fila " + i + 1, " columna " + j + 1 + " esta libre.")
        }
    }
}