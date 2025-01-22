function calcularPar(num){
    let status;

    if (num % 2 === 0){
        status = "Par";
    } else {
        status = "Impar";
    }

    return status;
}

function receberDados(){
    let num = 5;

    let status = calcularPar(num);

    console.log(`O número ${num} é: ${status}`);
}

receberDados();
