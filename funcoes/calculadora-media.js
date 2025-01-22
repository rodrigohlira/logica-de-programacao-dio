function calcularMedia(array){
    let soma = 0;
    for (let i = 0; i < array.length; i++){
        soma += array[i];        
    }

    return (soma / array.length).toFixed(2);
}

function validarNumeros(num){
    return num >= 0;
}

function receberNumeros(){
    let vetor = [2, 10, 5.2];

    for(let i = 0; i < vetor.length; i++){
        if(!validarNumeros(vetor[i])){
            console.log("O Array contém valores inválidos")
            return;
        }
    }

    let media = calcularMedia(vetor);

    console.log(`A média dos valores ${vetor} é ${media}`)
}

receberNumeros();