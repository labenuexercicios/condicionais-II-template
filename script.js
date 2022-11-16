//atividade de condicionias II 14.11.22

/* const idadeDependente = Number( prompt("solicitação de dependente \n qual a idade do dependente?")) */
/* if (idadeDependente>=13) {
    if(idadeDependente<18){
        console.log('Seu dependente já pode vincular um cartão de crédito ao seu')
    }else{
        console.log('O dependente ja pode ter o seu próprio cartão')
    }
}else {
    console.log('consulte outras possibilidades do Labank')
}
 */
/* if (idadeDependente>=13&&idadeDependente<=17){
    console.log('Seu dependente já pode vincular um cartão de crédito ao seu')
}else if(idadeDependente>17){
    console.log('O dependente ja pode ter o seu próprio cartão')
}else{
    console.log('consulte outras possibilidades do Labank')
}
 */
/* idadeDependente === 13 ? console.log('O dependente com 13 anos ja pode ter o seu próprio cartão') : console.log('consulte outras possibilidades do Labank')
 */

//atividade 2

/* const escolhaCartao =Number( prompt ("Solicitação de cartão de Crédito \n Digite a opção desejada: \n 1 - para facil \n 2 - Black \n 3 - Platinum \n 4 - Master Gold"))

switch (escolhaCartao){
    case 1:
        console.log('Cartão Fácil adquirido')
        break
    case 2:
        console.log('Cartão Black Adquirido')
        break
    case 3:
        console.log('Cartão Platinum Adquirido')
        break
    case 4:
        console.log('Cartão Master Gold Adquirido')
        break
    default:
        console.log("Escolha uma das quatro opções disponiveis")

} */

//atividade 3
const numero = Number (prompt("Digite um numero"))

if(numero%2===0&&numero%3===0){
    console.log('esse número é divisivel por 2 e 3')
   /*  numero===30?
    console.log('UFA ACERTEI!')
    :
    console.log('Não foi desta vez :(') */
    switch (numero){
        case 6:
            console.log("você digitou o 6")
            break
        case 12:
            console.log("você digitou o 12")
             break
        case 18:
            console.log("você digitou o 18")
            break
        case 24:
            console.log("você digitou o 24")
            break
        case 30:
            console.log("você digitou o 30")
            break
    default:
    console.log("O numero é maior que 30 ou menor que 6")      
    }

}else{
    console.log("Esse número não é divisivel por 2 e 3")
}