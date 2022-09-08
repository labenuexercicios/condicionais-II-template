//const dependenteDoUsuario = Number(prompt("Quantos anos o dependete tem?"))


//a) aninhado
// if (dependenteDoUsuario >= 13){
//     if (dependenteDoUsuario <= 17)
//     console.log("Seu dependente já pode ter um cartão de crédito vinculad ao seu.")
//     else 
//     console.log("Consulte outras possibilidades do Labank")
// } else {
//     console.log("Consulte outras possibilidades do Labank")
// }

//b) com operador logicos
// if (dependenteDoUsuario >= 13 && dependenteDoUsuario <= 17){
//     console.log("Seu dependente já pode ter um cartão de crédito vinculad ao seu.")
// } else {
//     console.log("Consulte outras possibilidades do Labank")
// }

//c) if ternário 
//dependenteDoUsuario === 13 ? console.log("A idade do dependente é 13 e já pode ter um cartão") :
//console.log("Verifique as opções possíveis.");

// A Labank gostou muito do seu trabalho e quer implementar um serviço de escolha do cartão pelo ramal telefónico. 
// 1 para ‘Fácil’
// 2 para ‘Black’
// 3 para ‘Platinum’
// 4 para ‘Master Gold’
// E caso não seja nenhuma dessas opções a mensagem deve ser ‘Escolha umas das quatro opções disponíveis’

// const escolhaCartao = Number(prompt(`Escolha o cartão de sua preferência e digite:
// 1 - Fácil 
// 2 - Black
// 3 - Platinum
// 4 - Master Gold`)
// )

// switch (escolhaCartao){
//     case 1:
//     console.log("Cartão Fácil!")
//     break;
//     case 2:
//     console.log("Cartão Black!")
//     break;
//     case 3:
//     console.log("Cartão Platinum!")
//     break;
//     case 4:
//     console.log("Cartão Master Gold!")
//     break;
//     default:
//         console.log("Opção de cartão não encontrada!");
// }

// Crie um código que receba um número por prompt e verifique se um número é divisível por 2 e por 3. Faça isso:
//  Utilizando ifs aninhados

const codigoNum = Number(prompt(`Digite um número:`))

if (codigoNum % 2 === 0){
    if (codigoNum % 3 === 0)
    console.log(`O número é divisível por 2 e por 3!`)
    else
        console.log(`Não é divisível por 2 e por 3!`)
} else {
    console.log(`Não é divisível por 2 e por 3!`)
}

// Utilizando um operador lógico para unir duas operações relacionais
//if ternário dentro do if

if ((codigoNum % 2 === 0) && (codigoNum % 3 === 0)){
    console.log(`O número é divisível por 2 e por 3!`)
    codigoNum === 30 ? console.log(`UFA ACERTEI!`) : console.log(`Não foi dessa vez :(`) 
    switch(codigoNum){
        case 6:
            console.log(`Número 6!`);
        break;
        case 12:
            console.log(`Número 12!`);
        break;
        case 18:
            console.log(`Número 18!`);
        break;
        case 24:
            console.log(`Número 24!`);
        break;
        case 30:
            console.log(`Número 30!`);
        break;
        default:
            console.log(`O número é maior que 30 ou menor que 6!`)}
} else {
    console.log(`Não é divisível por 2 e por 3!`)
}


// 3. Ainda dentro do if do exercício anterior, crie estrutura de switch case que verifique se o número é 6, 12, 18, 24 ou 30 e imprima uma mensagem diferente para cada número


// Caso não seja nenhum deles, imprima “o número é maior que 30 ou menor que 6”


