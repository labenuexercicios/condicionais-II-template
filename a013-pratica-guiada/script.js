//IF DENTRO DE IF E OPERADORES

// let nome = prompt("Qual o seu nome?").toUpperCase()
// let dependente = Number(prompt("Qual a idade do seu dependente?"))

// if (dependente>= 13 && dependente<=17) {
//     console.log(nome, "seu dependente já pode ter um cartão de crédito vinculado ao seu.");
// } else if (dependente>=0 && dependente < 13) {
//     console.log(nome,"seu dependente AINDA NÃO pode ter um cartão de crédito vinculado ao seu.");
// } else if (dependente > 17) {
//     console.log(nome, "seu dependente já pode ter um cartão de crédito INDEPENTENDE ao seu.");
// } else {
//     console.log("Idade invalida, escreva um número inteiro positivo.");
// }

//IF TERNÁRIO 

// alert (dependente === 18 ? ("Idade mínima para fazer um cartão individual para o seu dependente") : ("Idade diferente de 18"))

//SWITCH CASE

let cartao = Number(prompt("Solicitação de cartão de crédito. Escolha uma opção: \n 1 - Facíl \n 2 - Black \n 3 - Platinum \n 4 - Master Gold"));

switch (cartao) {
    case 1:
        console.log("Cartão fácil adiquirido");
        break;
    case 2:
        console.log("Cartão Black adiquirido");
        break;
    case 3:
        console.log("Cartão Platinum adiquirido");
        break;
    case 4:
        console.log("Cartão Master Gold adiquirido");
        break;
    default: //opção padrão q chama
        console.log("Escolha inválida. \n Digite um numero inteiro positivo entre 1 e 4.");
}

