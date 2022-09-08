const idade = Number(prompt("Qual a idade do seu dependente?"))

if(idade >= 13){
    if(idade <= 17){
        console.log("Seu dependente já pode ter um cartão de créditto vinculado ao seu")
    }else {
         console.log("Consulte outras possibilidades do Labank")
     }
 }else {
     console.log("Consulte outras possibilidades do Labank")
}    


if(idade >= 13 && idade <= 17){
    console.log("Seu dependente já pode ter um cartão de créditto vinculado ao seu")
}else {
    console.log("Consulte outras possibilidades do Labank")}


idade === 13? console.log("A idade do dependente é 13 e já pode ter um cartão") : console.log("Verifique as opçoes possiveis")
idade === "13"? "A idade do dependente é 13 e já pode ter um cartão":"Verifique outras possibilidades"



const ramalTelefonico = Number(prompt(`Opções de escolha: 
1 para Fácil
2 para Black
3 para Platinum
4 para Master Gold`));

switch(ramalTelefonico){
    case 1:
        console.log("Fácil")
        break
    case 2:
        console.log("Black")
        break
    case 3:
        console.log("Platinum")
        break
    case 4:
        console.log("Master Gold")             
	    break
        default:
     console.log("Escolha umas das quatro opções disponiveis")}



// Crie um código que receba um número por prompt e verifique se um número é divisível por 2 e por 3. Faça isso:
 //Utilizando ifs aninhados
 //Utilizando um operador lógico para unir duas operações relacionais


const numero = Number(prompt("Digita um número"))

     if((numero%2) === 0){
        if((numero%3) === 0){
            console.log("É divisivel")
        }else{
        console.log("Não é divisivel")
        }
    }else {
        console.log("Não é divisivel")}
 


    if(numero % 2 === 0 && numero % 3 === 0){
        console.log("É divisivel")
        numero === 30? console.log("UFA é 30"): console.log("não foi dessa vez")
    }else{
        console.log("Não é divisivel")
    }
    
    switch(numero){
        case 6:
            console.log("O numero é 6")
            break
        case 12:
            console.log("O numero é 12")
            break
        case 18:
            console.log("O numero é 18")
            break
        case 24:
            console.log("O numero é 24")
            break
        case 30:
            console.log("O numero é 30")  
            break 
            default:
            console.log("o numero é maior que 30 ou menos que 6")     

    }

    