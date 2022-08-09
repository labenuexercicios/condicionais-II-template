//? Prática guiada:

// let idade = Number(prompt('Digite sua idade:'))

// if (idade >= 13 && idade < 18) {
//     console.log("Seu dependente já pode ter um cartão de crédito vinculado ao seu!")
// } else if (idade > 18){
//     console.log("Seu dependente já pode ter um cartão de crédito próprio!")
// } else {
//     console.log("Procure outras possibilidades no Labank.")
// }

//? Switch Case

// let cartao = Number(prompt('Opções de crédito LaBank, escolha dentre as opções a baixo: \n1 - Fácil \n2- Black \n3 - Platinum \n4 - Master Gold'))

// switch(cartao){
//     case 1:
//         console.log('Você escolheu a opção Cartão Fácil, bem vindo a LaBank!')
//         break;
//     case 2:
//         console.log('Você escolheu a opção Cartão Black, bem vindo a LaBank!')
//         break;
//     case 3:
//         console.log('Você escolheu a opção Cartão Platinum, bem vindo a LaBank!')
//         break;
//     case 4:
//         console.log('Você escolheu a opção Cartão Master Gold, bem vindo a LaBank!')
//         break;
//     default:
//         console.log('Não foi digitado uma opção válida, por favor selecione novamente.')
// }

//? Exercício de fixação

let numero = Number(prompt('Digite um número e vamos descobrir se é múltiplo de 2 e 3 :D'))

if (numero % 2 === 0 && numero % 3 === 0){
    console.log('O número digitado é divisível por 2 e por 3.')
} else { 
    console.log('Infelizmente este número não é divisível por 2 e por 3, tente novamente.')
} numero === 30?console.log('PARABÉNS VOCÊ ACERTOU O NÚMERO SECRETO!'):console.log('Você não digitou o número secreto :(')

switch(numero){
    case 6:
        console.log('Você digitou 6: O número 6 está relacionado ao lar, ao cuidado com o outro e à responsabilidade')
        break;
    case 12:
        console.log('Você digitou 12: Reunindo toda a simbologia do 12 em diversas culturas, chegamos ao número do justo, do equilíbrio e da elevação total, completa')
        break;
    case 18:
        console.log('Você digitou 18: O número 18 é especial para a cultura judaica e para os cabalistas, pois representa o valor numérico da palavra “chai”, que significa “vivo”.')
        break;
    case 24:
        console.log('Você digitou 24: A essência do número 24 é o número 6. Isso significa que esse número é uma mistura de energias dos números 2, 4 e 6.')
        break;
    default:  
}