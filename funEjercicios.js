// Ejercicios

/*

Realizar una función que realice o saatisfaga los siguientes escenarios

Realizar en manera de función general y funcion flecha.

1. Calcular el cuadrado de un número.

2. Escribir un código que convierta de grados celsius
a grados farenheid

3. Realizar una función que calcule el valor de
Voltaje, recibiendo como entradas o parámetros
Resistencia y Corriente.

4. Elaborar una función que calcule el volumen de
un cubo, recibiendo como dato de entrada Lado.

5. Calcular el área de un triángulo

6. Calcular el volumen de una esfera

7. Convertir una cadena de texto a mayúsculas, usando el método .toUpperCase()

*/

// Calcular el cuadrado de un número.

function cuadradoDeNumero(numero) {//normal
    return "el numero al cuadrado es:" + Math.pow(numero, 2);
}

const cuadradoDeNumeroFl = numero => "el numero al cuadrado es:" + Math.pow(numero, 2)//flecha

// Escribir un código que convierta de grados celsius a grados farenheid

function Farenheid(Centigrados) {//normal
    let constante = 32;
    let primerValor = Centigrados * 1.8;
    let resultado = primerValor + constante;
    return "el resultado de centigrados a farenheid es : " + resultado
}

const FarenheidFl = Centigrados => {//flecha
    let constante = 32;
    let primerValor = Centigrados * 1.8;
    let resultado = primerValor + constante;
    return "el resultado de centigrados a farenheid es : " + resultado
}

// Realizar una función que calcule el valor de Voltaje, recibiendo como entradas o parámetros Resistencia y Corriente.

function calculoDeVolt(corriente, resistencia) {//normal
    return "el valor del voltaje es :" + corriente * resistencia + "ohm-m"
}
const calcularVoltFl = (corriente, resistencia) => "el resultado del voltaje es" + corriente * resistencia;//flecha

//Elaborar una función que calcule el volumen de un cubo, recibiendo como dato de entrada Lado.
function areaCubo(l1, l2, l3) {
    let L1y2 = l1 * l2
    let resultado = L1y2 * l3
    return "el resultado es:" + resultado + "metros"
}

const areaCuboFl = (l1, l2, l3) => {
    let L1y2 = l1 * l2
    let resultado = L1y2 * l3
    return "el resultado es:" + resultado + " metros"
}

//Calcular el área de un triángulo

const areaTrianguloFl = (base, altura) => {//flecha
    let constante = 2;
    let baseXaltura = base * altura
    let resultado = baseXaltura / constante
    return "el area es igual :" + resultado + " metros cuadrados"
}

function areaTriangulo(base, altura) {//normal
    let constante = 2;
    let baseXaltura = base * altura
    let resultado = base * altura / constante
    console.log("el area es:" + resultado + " metros cuadrados");
}

//Calcular el volumen de una esfera

function areaDeEsfera(radio) {// normal
    const pi4 = 12.56;
    let radioNuevo = Math.pow(radio, 2);
    let areaEsfera = radioNuevo * pi4
    console.log(radioNuevo);
    console.log("el area es " + areaEsfera + " metros^2");
}
areaDeEsfera(1);

const AreaDeEsfera = (radio) => {
}

//Convertir una cadena de texto a mayúsculas, usando el método .toUpperCase()
let texto = "me gusta jugar dEstinY es mi juEGo favorito".toUpperCase();
console.log(texto);