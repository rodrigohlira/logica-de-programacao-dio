function calcularSoma(a, b){
    let soma = a + b
    return soma;
}

function receberNumeros(){
    let num1 = 5;
    let num2 = 10;

    let soma = calcularSoma(num1, num2);

    console.log(`A soma de ${num1} e ${num2} é: ${soma}`)
}

receberNumeros();