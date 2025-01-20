function calcularRanking(vitorias){
    let ranking;

    if (vitorias <= 10){
        ranking = "Ferro";
    } else if (vitorias > 10 && vitorias <= 20){
        ranking = "Bronze"
    } else if (vitorias > 20 && vitorias <= 50){
        ranking = "Prata"
    } else if (vitorias > 50 && vitorias <= 80){
        ranking = "Ouro"
    } else if (vitorias > 80 && vitorias <= 90){
        ranking = "Diamante"
    } else if (vitorias > 90 && vitorias <= 100){
        ranking = "Lendário"
    } else {
        ranking = "Imortal"
    }

    return ranking;
}

function receberDadosRankeada(){
    let vitorias = 20;
    let derrotas = 10;
    let nomeHeroi = "Rodrigo"
    let ranking = calcularRanking(vitorias, derrotas);
    console.log(`O Herói ${nomeHeroi}, tem saldo de ${vitorias} Vitórias / ${derrotas} Derrotas e está no nível ${ranking}.`)
}


receberDadosRankeada();