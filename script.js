//exercicio 1
//if if aninhado


//const idDependente=Number(prompt ("Análise de cartão dependente \n Informe a idade do dependente"))

/*if(idDependente >=13)
    if(idDependente <18){
    console.log("Seu dependente já pode ter uma cartão de crédito vinculado ao seu");
    }else{
    console.log("consulte outras possibilidades labank");
}else{
    console.log("consulte outras possibilidades do labank");
}

if com operador lógico

if(idDependente>=13 && idDependente <18){
    console.log("Seu dependente já pode ter uma cartão de crédito vinculado ao seu")
}else{
    console.log("Consulte outras possibilidades labank");
}

if ternario

if(idDependente===13){
    console.log("A idade do dependente é elégivel e já pode ter um cartão");
}else{
    console.log("Verifique as opções disponíveis");
}*/


//switch-case

/*const ura=Number(prompt("Digite a opção desejada \n 1 Classic \n 2 Black \n 3 Platinum \n 4 Master Gold"))

switch(ura){
    case 1:
        console.log("Cartão classic escolhido")
        break;
    case 2:
        console.log("Cartão black escolhido")
        break;
    case 3:
        console.log("Cratão platinum escolhido")
        break;
    case 4:
        console.log("Cartão master gold escolhido")
        break;
    default: 
    console.log("Escolha uma das quatro opções disponíveis")
}*/

const nun=Number(prompt("Digite um número"))

if(nun % 2 === 0 && nun % 3 === 0){
        console.log("Esse número é divisível por 2 e por 3");
        nun === 30? console.log("Ufa, acertei") : console.log("Não foi dessa vez :(")
}else{
    console.log("Número não é divisível por 2 e 3")
}
switch(nun){
    case 6:
        console.log("O número digitado foi 6");
        break
    case 12:
        console.log("O número digitado é 12");
        break
    case 24: 
    console.log(" O número digtado é 24");
    break
    case 30:
        console.log("O número digitado é 30");
        break
    default: 
    console.log("O núemro escolhido é maior que 30 ou menor que 6")
}