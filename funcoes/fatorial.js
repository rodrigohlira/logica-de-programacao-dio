function calcularFatorial(num){
    let soma = 1;
    for(let i = num; i >= 1; i--){
        soma *= i;
    }

    return soma;
}

function validarNumero(num){
    return(
        num >= 0 && Number.isInteger(num)
    );
}

function receberNumero(){
    let num = 3;

    if(!validarNumero(num)){
        console.log("Digite um número inteiro não negativo")
        return;
    }

    let fatorial = calcularFatorial(num);

    console.log(`O fatorial de ${num} é: ${fatorial}`)
}

receberNumero();