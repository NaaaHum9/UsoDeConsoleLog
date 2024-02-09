/**
 * 1 - Crear un programa que utilice console log para mostar un mensaje de bienvenida
 */
//Alerta que muesra un mensaje para cada ejercicio
alert('Mensaje de bienvenida');
//Muestra el mensaje en la consola del navegador
console.log("Hola, bienvenido desde console log");

/**
 * 2 - Crear variable nombre, y asignarle un nombre, luego mostrar con cosole log en el navegador 
 */

alert('Nombre en consola');
//Ingresa el nombre por un prompt
let nombreUsuario = prompt("Ingrese su nombre: ");
//Lo imprimer cen la consola, usamos `` para poder mostrar el nombre
console.log(`Hola, ${nombreUsuario}! Bienvenido`);

/**
 * 3 - Crea una variable nombre, asignar nombre, utilizar alert para mostar el emsaje con el nombre
 */

alert('Nombre en alert')
//Ingresa el nombre con prompt
let nomUsuario = prompt("Ingrese su nombre: ");
//Con consola imprimimos el nombre
alert(`Hola, ${nomUsuario}! Bienvenido`);

/**
 * 4 - Utilizar prompt y hcaer la pregunta: Cual es el lenguaje de programacion que mas te gusta
 * y alamacenar el nombre en una variable y mostrar en la consola 
 */

alert('Lenguaje de programacion');
//Se ingresa el valor por prompt y luego se muestra en consola
let lenguajeUsuario = prompt("Cual es tu lenguaje de programacion favorito? ");

console.log(`Su lenaguje favorito es: ${lenguajeUsuario}`);

/**
 * 5 - Crear variable valor1 y valor2, asignarles numeros de tu eleccion, 
 * realizar suma de los valores y alamcenarla en una variable resultado, 
 * utilizar console log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]" en la consola
 */

alert('Suma');
//Pedimos los valores de las variables utilizando prompt y hacemos un cambio para que sean enteros
let valor1 = parseInt(prompt("Ingrese un numero: "));
let valor2 = parseInt(prompt("Ingrese un segundo numero"));
//Se hace la suma de los valores
let resultado = valor1 + valor2;
//Haciendo uso de `` hacemos que aparescan los valores de cadavariable en la consola 
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}`);

/**
 * 6 - Crear dos variables valor1 y valor2 hacer la diferencia y "la diferencia entre
 * valor1 y valor 2 es igual a resultado"
 */

alert('Diferencia')
//Pedimos los valores de las variables con prompt 
let valor11 = parseInt(prompt("Ingrese un numero: "));
let valor21 = parseInt(prompt("Ingrese el segundo numero: "))
//Hacemos la diferencia de las variables y las aguardamos en otra variable
let res = valor11 - valor21;
//Imprimimos en consola con la siguiente frace
console.log(`La diferencia entre ${valor11} y ${valor21} es igual a ${res}`);

/**
 * 7 - Pide al ususario que ingrese su edad, utilizando if verificar si la persona
 * es mayor de edad o menor de edad y muestra en consola
 */

alert('Mayor o menor de edad');
//Ingresamos el valor de la variable con prompt
let edad = parseInt(prompt("Ingrese su edad: "));
//El if veririfica que si edd es menor a 18 entonces es menor de edad else es mayor de edad
if (edad < 18) {
    console.log(`Tu edad es ${edad} por lo que eres menor de edad`);
}else{
    console.log(`Tu edad es ${edad} por lo que eres mayor de edad`);
}

/**
 * 8 - Crear una variable numero y solicitar su valor, si es positivo, negativo o cero con if-else
 */

alert('Numero + - 0');

let numero =  prompt('Ingrese un numero: ');

if (numero == 0) {
    console.log(`El numero es: ${numero}`);
}else{
    if (numero > 0) {
        console.log(`El numero es ${numero} por lo que es positivo`);
    }else{
        console.log(`El numero es ${numero} por lo que es negativo`);
    }
}

/**
 * 9 - Contador que comience en 1 - 10 con while, mostrar cada numero
*/

//Alerta para difereciar de los demas ejercicios
alert('Contador con While');
//Declaramos variable y la inicializamos en 1 para que no comienze en 0
let contador = 1;
//El while e el bucle que hace un conteo ascendente, inicia en 1 y termina en 10 por el <=
while (contador <= 10) {
    console.log("Numero: ", contador);//Para mostrar el numero 
    contador++;//Incremento el contador
}


/**
 * 10 - Crear una variable nota, asignarle un valor numerico, utilizar if-else
 * para ver si la nota es mayor o igual a 7 y mostrar aprobado o reprobado en la consola
 */

alert('Notas');

let nota = parseInt(prompt('Ingrese su calificacion'));

if (nota < 7) {
    console.log(`Calificacion ${nota}, reprobado`);
} else {
    console.log(`Calificacion ${nota}, aprobado`);
}