function calcularMedia(nota1, nota2, nota3){
    let media = (nota1 + nota2 + nota3) / 3;
    return media.toFixed(2);
}

function validarNotas(nota1, nota2, nota3){
    return (
        nota1 >= 0 && nota1 <= 10 &&
        nota2 >= 0 && nota2 <= 10 &&
        nota3 >= 0 && nota3 <= 10
    );
}

function receberNotas(){
    let nota1 = 10;
    let nota2 = 17;
    let nota3 = 6.2;

    if(!validarNotas(nota1, nota2, nota3)){
        console.log("Todas as notas devem estar entre 0 e 10")
        return;
    }

    let media = calcularMedia(nota1, nota2, nota3);

    console.log(`A média das notas ${nota1}, ${nota2} e ${nota3} é: ${media}`)
}

receberNotas();