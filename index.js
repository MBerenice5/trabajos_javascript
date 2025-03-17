//Cada vez que pongo un prompt es necesaria esta línea de código:
const prompt = require(`prompt-sync`)();

const nombre = prompt(`¿Cómo es tu nombre?`);
console.log(`Hola, ${nombre}!`);
//Si quiero llamar en consola tengo que poner: "node "nombre de archivo" ej: node index.js