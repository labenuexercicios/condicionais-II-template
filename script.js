console.log('Prática Guiada 1 - if e if')
// com ifs aninhados
const idadeDependente=Number(prompt("Solicitação de dependente \n Qual a idade do dependente"))

if(idadeDependente>=13){
    if(idadeDependente<18){
        console.log("Seu filho já pode ter um acartão vinculado ao seu");
    }else{
        console.log("Consulte outras possibilidades do Labank");
    }
}else{
    console.log("Consulte outras possibilidades do Labank");
}
// com if e operadores lógicos
if(idadeDependente>=13 && idadeDependente<18){
    console.log("Seu filho já pode ter um acartão vinculado ao seu");
}else{
    console.log("Consulte outras possibilidades do Labank");
}

console.log('Prática Guiada 2 - if ternário')

console.log(idadeDependente===13? 'A idade do dependente é 13 e já pode ter um cartão': "Verifique as opções possíveis")

console.log('Prática Guiada 3 - switch-case')

const numeroRamal=Number(prompt('Solicitação de cartão de crédito \n Digite a opção desejada: \n 1- Fácil \n 2- Black \n 3- Platinum \n 4- MasterGold'))

switch(numeroRamal){
    case 1:
        console.log('Cartão Fácil adquirido')
        break;
    case 2: 
        console.log('Cartão Black adquirido')
        break;
    case 3:
        console.log('Cartão Platinum adquirido')   
        break;
    case 4:
        console.log('Cartão Master Gold adquirido')   
        break;   
    default:
        console.log('Escolha uma das opções disponíveis');    

}


















