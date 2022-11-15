//AULA DE CONDICIONAIS II

//IF'S ANINHADOS
const idadeDependente = Number(prompt('Solicitação de dependente: \n Qual a idade do dependente?'))

if(idadeDependente >= 13){
    if(idadeDependente < 18){
        console.log('Seu dependente já pode ter um cartão de crédito vínculado ao seu.')
    }else{
        console.log('O dependente já pode ter o seu próprio cartão.')
    }
}else{
    console.log('Consulte outras possibilidades do Labank.')
}

//USANDO OPERADORES LÓGICOS
if(idadeDependente >= 13 && idadeDependente <= 17){
    console.log('Seu dependente já pode ter um cartão de crédito vínvulado ao seu.')
}else if(idadeDependente < 17){
    console.log('O seu depedente já pode ter seu próprio cartão de crédito.')
}else{
    console.log('Consulte outras possibilidades do Labank.')
}

//IF TERNÁRIO
idadeDependente === 13 ? //substitui o if
    console.log('O dependente já pode ter um cartão vínculado ao seu.') 
    : //substitui o else
    console.log('Consulte outras possibilidades do Labank.')

//SWITCH CASE
const escolhaCartao = Number(prompt('Solicitacão de cartão de crédito \n Digite a solicitação desejada: \n 1- Fácil \n 2- Black \n 3- Platinum \n 4- MasterGold'))

switch (escolhaCartao){
    case 1:
        console.log('Cartão Fácil adquirido.')
        break //para o código
    case 2:
        console.log('Cartão Black adquirido.')
        break
    case 3:
        console.log('Cartão Platinum adquirido.')
        break
    case 4:
        console.log('Cartão MasterGold adquirido')
        break
    default: //usado no final do SWITCH. não precisa de BREAK
        console.log('Escolha uma das quartro opções disponíveis.')
}

//IF COM SWITCH CASE
 let idadeUsuario = 18

if(idadeUsuario >= 18){
    const escolhaCartao = Number(prompt('Solicitacão de cartão de crédito \n Digite a solicitação desejada: \n 1- Fácil \n 2- Black \n 3- Platinum \n 4- MasterGold'))

    switch (escolhaCartao){
        case 1:
            console.log('Cartão Fácil adquirido.')
            break //para o código
        case 2:
            console.log('Cartão Black adquirido.')
            break
        case 3:
            console.log('Cartão Platinum adquirido.')
            break
        case 4:
            console.log('Cartão MasterGold adquirido')
            break
        default: //usado no final do SWITCH. não precisa de BREAK
            console.log('Escolha uma das quartro opções disponíveis.')
    }
}else{
    console.log('O usuário ainda é menor de idade.')
}

//PARA GUARDAR NA CABEÇA
let numDiv = Number(prompt('Insira um número:'))

if(numDiv % 2 === 0 && numDiv % 3 === 0){
    console.log('O número é divisível por 2 e 3.');

    // if(numDiv === 30){
    //     console.log('UFA, ACERTEI!');
    // }else{
    //     console.log('Não foi dessa vez :(');
    // };
    switch(numDiv){
        case 6:
            console.log('O número é 6.');
            break
        case 12:
            console.log('O número é 12.');
            break
        case 18:
            console.log('O número é 18.');
            break
        case 24:
            console.log('O número é 24.');
            break
        case 30:
            console.log('O número é 30.');
        default:
            console.log('O número é maior que 30 ou menor que 6.');
    };
// }else{
//     console.log('O número não é divisível por 2 ou não é divisível por 3.')
};
