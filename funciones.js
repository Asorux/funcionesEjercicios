/*
>>>>>>>>>>>>>>>>>>FUNCIONES<<<<<<<<<<<<<<<<<<<<<<<<<<
    Bloque de código que realiza una operación


Hoisting:

Es fundamental en el entendimiento de la forma en que se ejecuta nuestro
código de JS, esto aplica tanto para variables como para funciones.

Como tal, la traducción de Hoisting es elevación, a partir de aquí, su entendimiento es
mucho más intuitivo, lo que hace a grandes rasgos es "elevar" las funciones y variables 
declaradas dentro del código.

Yo puedo invocar una función antes de siquiera declararla.


///////////////Declaración de una función
palabra reservada - function

nombre de la funcion - nombreFuncion
establecer parametros -recibe de 0 a n parametros y se encasillan
dentro un paréntesis ()

establecer el bloque de código sobre el que vamos a trabajar
lo hacemos mediante llaves {
codigo a ejecutar
}

Scope : 

El concepto scope hace referencia al alcance que tiene
una variable dentro de un código JS.

var, let y const.

var : global - quiere decir que se puede utilizar o
trabajar con esta variable dentro de cualquier
parte del código

let : porque además de funcionar de manera global
en caso de ser requerida, también puede solo ser
utilizada de manera local.

const : se refiere, por su nombre tan intuitivo,
a la palabra constante, esto quiere decir que su
valor no puede ser reasignado.

El uso de la palabra reservada 'var' no es tan recomendado
por el comportamiento y la poca adaptabilidad de una
variable.

Entonces, se implementan let y const como una 
alternativa mucho más eficiente para determinar el 
Scope o alcance que tiene una variable.

*/



// Ejemplo de función pero no retorna ningún valor
// No recibe ningún parámetro
function nuevaFuncion(){
    console.log("Buenos días CH28");
}

nuevaFuncion();

// Ejemplo de función que si retorna un valor
// Tamién recibe un parámetro
function holaMundo(nombre){
    return "Hola " + nombre; // Si retorna un valor
}

holaMundo("Ingrid");
console.log(holaMundo("Ingrid"));



//Elabrorar funcion que calcule la velocidad de un objeto
function calcularVelocidad(distancia, tiempo){ // Inicio
    let velocidad = distancia / tiempo;
    return "La velocidad calculada es: " + velocidad + " m/s";
} // Cierre

console.log(calcularVelocidad(30, 5));



/*
function calcularVelocidad(distancia, tiempo){ // Inicio
    return "La velocidad calculada es: " + distancia / tiempo + " m/s";
} // Cierre

console.log(calcularVelocidad(30, 5));

function calcularVelocidad(distancia = 30, tiempo = 5){ // Inicio
    return "La velocidad calculada es: " + distancia / tiempo + " m/s";
} // Cierre

console.log(calcularVelocidad());
*/






// Funciones dentro de JS

/*

Funciones flecha  | Fat arrow   | Funciones lambda

Funciones anonimas
Funciones CallBack - Que recoben otras funciones como parametros

Promesas

Funciones async - await


*/

// FUNCIONES FLECHA/ FAT ARROW/ LAMBDA
/*Manera mas compacta y sencilla de escribir una función normal.
Sintaxis
    - palabra reservada const
    - nombreDeLaFuncion
    - = para definir los prámetros
    - => para establecer el bloque de código o procesos que va a ejecutar
    * Si son varios procesos, se colocan dentro de {}
*/

function funcionNormal (parametro){
    return 'Hola ' + parametro;
}

const funcionFlecha = parametro => 'Hola ' + parametro;

function funcionFlechaVariosParametros(datoA, datoB) {
    let datoC = datoA + datoB;
    return 'La suma de datoA mas datoB es igual a '; datoC;
}

///////////////////////////////////////////////////////////

const calcularVelocidadFlecha = (distanciaFlecha, tiempoFlecha) => {
    
    console.log("Distancia =  " + distanciaFlecha + " metros");
    console.log("Tiempo = " + tiempoFlecha + " segundos");
    return "La velocidad calculada es = " + distanciaFlecha / tiempoFlecha + " m/s";
}