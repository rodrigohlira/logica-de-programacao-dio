// Menu

/*
    1. Converter Celsius para Fahrenheit
    2. Conerter Fahrenheit para Celsius
*/

// Escolha uma opção (1 ou 2):

let opcao = 2;

// Digite a temperatura:

let temperatura = 50;
let resultado

switch(opcao){

    case 1:
        resultado = temperatura * (9 / 5) + 32
        console.log("Resultado: " + resultado + "°F")
        break

    case 2:
        resultado = (temperatura - 32) * (5 / 9)
        console.log("Resultado: " + resultado + "°C")
        break

}
