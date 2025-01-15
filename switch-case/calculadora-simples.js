let primeiroNumero = 10;
let segundoNumero = 5;
let operacao = "!"; // (Escolha uma operação: +, -, *, /)
let resultado;

switch(operacao){

    case "+":
        resultado = primeiroNumero + segundoNumero;
        break;

    case "-":
        resultado = primeiroNumero - segundoNumero;
        break;

    case "*":
        resultado = primeiroNumero * segundoNumero;
        break;

    case "/":
        resultado = primeiroNumero / segundoNumero;

    default:
        console.log("Valor inválido")
}

console.log(resultado);