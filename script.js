// Prática guiada if aninhado

//const idadeDependente = Number(prompt(`Qual é a idade da pessoa dependente?`))
/*
if (idadeDependente >= 13) {
    if (idadeDependente < 18){
        console.log(`Cartão de crédito para dependente APROVADO!`)
    } else {
        console.log(`Consulte outras opções do Labank.`)
    }
} else {
    console.log(`Consulte outras opções do Labank.`)
}

// utiliazndo operador lógico

if (idadeDependente >= 13 && idadeDependente < 18) {
    console.log(`Cartão de crédito para dependente APROVADO!`)
} else {
    console.log(`Consulte outras opções do Labank.`)
}*/
/*
idadeDependente === 13 ? console.log(`A idade é 13, já pode ter cartão`) : console.log(`Verifique as opções do Labakn.`)*/

/*
const ramal = Number(prompt(`Digite o ramal desejado`))

switch(ramal) {
    case 1:
    console.log(`Cartão de crédito FÁCIL`)
    break
    case 2:
        console.log(`Cartão de crédito BLACK`)
    break
    case 3:
        console.log(`Cartão de crédito PLATINUM`)
    break
    case 4:
        console.log(`Cartão de crédito MASTER GOLD`)
    break
    default:
        console.log(`Escolha uma das opções disponíveis`)
}*/

// Exercicio de fixação

const numero = Number(prompt(`Digite um número para verificar se é divisível por 2 e por 3`))

//a)
/*
if(numero % 2 === 0) {
    if (numero % 3 === 0) {
        console.log(`O número ${numero} é divisível por 2 e por 3`)
    } else {
        console.log(`O número ${numero} não é divisível por 2 e por 3`)
    }
} else {
    console.log(`O número ${numero} não é divisível por 2 e por 3`)
}
*/
//b)

if(numero % 2 === 0 && numero % 3 === 0) {
    console.log(`O numero ${numero} é divisível por 2 e por 3`)
    //numero === 30 ? console.log('UFA, ACERTEI!') : console.log('Não foi dessa vez :(')



//c)
switch(numero) {
    case 6:
        console.log('O número 6 é divisível por 2 e por 3')
        break
    case 12:
        console.log('O número 12 é divisível por 2 e por 3')
        break
    case 18:
        console.log('O número 18 é divisível por 2 e por 3')
        break
    case 24:
        console.log('O número 24 é divisível por 2 e por 3')
        break
    case 30:
        console.log('O número 30 é divisível por 2 e por 3')
        break
    default:
        console.log(`O número ${numero} é maior que 30 ou menor que 6`)
}
} else {
    console.log(`O número ${numero} não é divisível por 2 e por 3`)
}