//Digite sua idade

let idade = 27;
let classificacao = "";

if (idade >= 0 && idade <= 12) {
    classificacao = "Criança"
} else if (idade >= 13 && idade <= 17) {
    classificacao = "Adolescente"
} else if (idade >= 18 && idade <= 64) {
    classificacao = "Adulto"
} else {
    classificacao = "Idoso"
}

console.log("Classificação: " + classificacao);
