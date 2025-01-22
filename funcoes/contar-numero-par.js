function contarPar(array){
    let soma = 0;

    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 ===0){
            soma += 1;
        }
    }

    return soma;
}

function validandoNumeros(num){
    return num >= 0 && num % 1 === 0;
}

function receberArray(){
    let vetor = [9, 6, 0, 2, 4, 5, 23, 87, 63, 82, 62, 34];

    for (let i = 0; i < vetor.length; i++){
        if(!validandoNumeros(vetor[i])){
            console.log("Esse Array contém valores inválidos");
            return;
        }
    }

    let somaPar = contarPar(vetor);

    console.log(`O vetor [${vetor}] contém ${somaPar} números par.`)
}

receberArray();