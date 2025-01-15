/* 
Escolha uma das opções abaixo

1 - Exibir mensagem de boas vindas
2 - Calcular o quadrado de um número
3 - Sair
*/

let escolha = 4;

switch(escolha){

    case 1:
        console.log("Seja Bem Vindo!")
        break

    case 2:
        let num = 4
        let quadrado = Math.sqrt(num)
        console.log("A raiz quadrada de " + num + " é: " + quadrado)
        break

    case 3:
        break

    default:
        console.log("Valor inválido")
}
