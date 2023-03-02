//PRÁTICA GUIADA 1
/*
const estaChovendo = false
const temPipoca = true

if (estaChovendo) {
    console.log("Pegar roupas no varal ...")
} else if (temPipoca) {
    console.log('Hummm tem pipoca, vou assistir um filme :) ')
} else {
    console.log("Vou fazer uma caminhada !")
}


const idadeDependente = Number(prompt(`Qual é a idade do dependente?`))

// 1) utilizando if aninhado
if (idadeDependente >= 13) {
    if (idadeDependente < 18){
        console.log(`Cartão para dependente APROVADO !`)
    } else {
        console.log(`MAIOR DE IDADE, consulte outras opções do Labank!`)
    }
} else {
    console.log(`IDADE ABAIXO: consulte outras opções do Labank!`)
}

//2) Utilizando operador lógico
if (idadeDependente >= 13 && idadeDependente < 18) {
        console.log(`Cartão para dependente APROVADO !`)
} else {
    console.log(`Consulte outras opções do Labank!`)
}

//PRÁTICA GUIADA 2

const idadeDependente = Number(prompt(`Qual é a idade do dependente?`)) 

idadeDependente >= 13 && idadeDependente <= 18  ? console.log(`A idade é 13, já pode ter cartão`) : console.log(`Verifique as opções do Labank`)


//PRÁTICA GUIADA 3 - Swich Case

const tipoCartao = Number(prompt(`Digite o número correspondente ao seu cartão !`))

switch(tipoCartao){
    case 1:
        console.log(`Cartão de crédito FÁCIL !`)
        break
    case 2:
        console.log(`Cartão de crédito BLACK !`)
        break
    case 3:
        console.log(`Cartão de crédito PLATINUM !`)  
        break      
    case 4:
        console.log(`Cartão de crédito MASTER GOLD !`)
        break
    default:
        console.log(`Escolha uma das opções acima !`)
}
*/

//SAIDERA

 //const recebeNum = Number(prompt(`Digite o número !`))

// if (recebeNum % 2 === 0){
//     if (recebeNum % 3 === 0){
//         console.log(`O ${recebeNum} é divisível por 2 e 3 !`);
//     } 
// } 


// const num = Number(prompt(`Digite o número !`))

// if (num % 2 === 0) {
//   if (num % 3 === 0) {
//     console.log(" é divisível por 2 e 3.")
//   } else {
//     console.log(" é divisível apenas por 2.")
//   }
// } else {
//   if (num % 3 === 0) {
//     console.log(" é divisível apenas por 3.")
//   } else {
//     console.log(" não é divisível por 2 nem por 3.")
//   }
// }


const recebeNum = Number(prompt(`Digite o número !`))

if(recebeNum % 2 === 0 && recebeNum % 3 === 0) {
    console.log(`O numenro é divisivel por 2 e 3.`)
    //recebeNum === 30 ? console.log(`Yes, na mosca !`) : console.log(`Errei, não acredito ...`)
    switch(recebeNum){
        case 6:
            console.log(`Dia que o homem foi criado !`)
            break
        case 12:
            console.log(`Quantidade dos discipulos !`)
            break
        case 18:
            console.log(`Maior idade !`)  
            break      
        case 24:
            console.log(`quantidade dos anciões !`)
            break
        case 30:
            console.log(`Batismo de Jesus !`)
            break
        default:
            console.log(`O numero é maior que 30 ou menor do que 6 !`)
    }
} else {
    console.log(`O numero ${recebeNum} não é divisivel por 2 e 3.`)
}
