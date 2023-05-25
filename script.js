//let idade = 17
//if(idade >= 13){
//    if(idade <= 17){
//console.log ("A pessoa dependente já pode ter um cartão de crédito vinculado ao seu")

//} else {
//console.log("idade maior ou igual a 18")
//}

//} else {
//    console.log("consulte outras possibilidades")
//}

//-------------------------------

//if (idade >= 13 && <= 17){
//    console.log("A pessoa dependente já pode ter um cartão de crédito vinculado ao seu");
//}else{
//    console.log("consulte outras possibilidades");
//}

//-----------------------------------------------------

//const possuiConta = prompt ("vc ja possui conta no labank? responda sim ou nao?")

//---------------------------------------------------------------------

let numeroDivisivel1 = Number(prompt("Digite um numero: "))

//if (numeroDivisivel1 %2 ===0){
//        console.log("O numero e diviisivel por 2");
    
//    }if (numeroDivisivel1 %3 ===0){
//        console.log("O numero e divisivel por 3")

//    } else {
//    console.log("O Numero nao é divisivel por 3")

//}

//console.log(numeroDivisivel1)

//if(numeroDivisivel1 %2 === 0 && numeroDivisivel1 %3 === 0){
//    console.log("É divisivel por 2 e 3")

//}else{
//    console.log("Não e divisivel por 2 e 3")
//} 

//----------------------------------------------------

//if(numeroDivisivel1 %2 === 0 && numeroDivisivel1 %3 === 0){
    
//    console.log("É divisível por 2 e 3")
//    numeroDivisivel1 == 30?
//    console.log("Ufa, acertei"):
//    console.log("Não foi dessa vez")
//}else{
//    console.log("Não é divisível por 2 e 3")
//}

//---------------------------------------------------

if(numeroDivisivel1 %2 === 0 && numeroDivisivel1 %3 === 0){

    console.log(" É divisível por ")
    let frase
    switch (numeroDivisivel1) {
        case 6:
        frase = "Oie"    
            break;
        case 12:
        frase = "Boa noite"    
            break;
        case 18:
        frase = "Você esta preso"    
            break;
        case 24:
        frase = "Fim"    
            break;
        case 30:
        frase = "Plutão é um planeta"    
            break;
    
        default: console.log("Digite outro número:")
            break;
    }
console.log(frase);
}