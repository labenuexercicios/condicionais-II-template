// if e if

// a)if aninhado

// const idade = prompt("Digite sua idade")

// if (idade >= 13){
//     if (idade <= 17){
//     console.log("A pessoa dependente já pode ter um cartão de crédito vinculado ao seu")
//     }
// }else{
//     console.log("Consulte outras possibilidades do Labank")
// }

// b) operadores lógicos

// if (idade >= 13 && idade <= 17){
//     console.log("A pessoa dependente já pode ter um cartão de crédito vinculado ao seu")
// }else{
//     console.log("Consulte outras possibilidades do Labank")
// }


// ---------------------------------------------


//if ternário

// const possuiConta = confirm("Você possui conta no Labank? Se possui clique em OK e se não possui clique em CANCELAR")

// possuiConta ? console.log("Seja bem-vindo") : console.log("Faça um cadastro")


// usando if/else

// if(possuiConta){
//     console.log("Seja bem-vindo")
// }else{
//     console.log("Faça um cadastro")
// }


// ---------------------------------------------

// switch case

// let cartao 
// let ramal = Number(prompt("Digite o ramal desejado"))

// switch (ramal){
//     case 1:
//         cartao = "Fácil"
//         break
//     case 2:
//         cartao = "Black"
//         break
//     case 3:
//         cartao = "Platinum"
//         break
//     case 4:
//         cartao = "Master Gold"
//         break
//     default:
//         console.log("Escolha uma das quatro opçoes disponíveis")
// }

// console.log(cartao)


//OPÇÃO USANDO if/else if/else

// if(ramal === 1){
//     cartao = "Fácil"
// }else if (ramal === 2){
//     cartao = "Black"
// }else if (ramal === 3){
//     cartao = "Platinum"
// }else if (ramal === 4){
//     cartao = "Master Gold"
// }else{
//     console.log("Escolha uma das quatro opçoes disponíveis")
// }

// console.log(cartao)


// ---------------------------------------------

// // Pra guardar na cabeça

// const numero = Number(prompt("Digite um número"))

// if(numero %2 === 0 && numero %3 === 0){
//     console.log("O número é divisível por 2 e por 3")
// }

// 1.a)if aninhado

let numero = Number(prompt("Digite um número"))

// if (numero %2 === 0){
//     if (numero %3 === 0){
//     console.log("O número é divisível por 2 e 3")
//     }
// }else{
//     console.log("O número NÃO é divisível por 2 e 3")
// }

//1.b) Operadores lógicos

// if (numero %2 === 0 && numero %3 === 0){
//     console.log("O número é divisível por 2 e 3")
// }else{
//     console.log("O número NÃO é divisível por 2 e 3")
// }

//2) if ternario


// if (numero %2 === 0 && numero %3 === 0){
//     // numero === 30 ? console.log("UFA, ACERTEI") : console.log("Não foi dessa vez :(")
//     console.log("O número é divisível por 2 e 3")
// }else{
//     console.log("O número NÃO é divisível por 2 e 3")
// }


// 3)


if (numero %2 === 0 && numero %3 === 0){
    // numero === 30 ? console.log("UFA, ACERTEI") : console.log("Não foi dessa vez :(")
    switch (numero){
        case 6:
            console.log("O número digitado foi 6")
            break
        case 12:
            console.log("O número digitado foi 12")
            break
        case 18:
            console.log("O número digitado foi 18")
            break
        case 24:
            console.log("O número digitado foi 24")
            break
         case 30:
            console.log("O número digitado foi 30")
            break
        default:
            console.log("O número é maior que 30 ou menor que 6")
    }
    console.log("O número é divisível por 2 e 3")
}else{
    console.log("O número NÃO é divisível por 2 e 3")
}

console.log(numero)