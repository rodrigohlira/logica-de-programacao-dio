// Digite sua nota

let nota = 30;
let resultado = "";

if(nota >= 90 && nota <= 100){
    resultado = "A"
} else if (nota >= 80 && nota < 90){
    resultado = "B"
} else if (nota >= 70 && nota < 80){
    resultado = "C"
} else if (nota >= 60 && nota < 70){
    resultado = "D"
} else if (nota >= 0 && nota < 60){
    resultado = "F"
}

console.log("Conceito: " + resultado);