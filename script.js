//if aninhados 
let idadeDependente = 18

if (idadeDependente>=13){
    if(idadeDependente<= 17){
        console.log("Pode ter cartão de dependente")
    } else {
        console.log("O limite de idade é 13 e 17 anos")
    }
    
} else {
    console.log("para ter o cartão, o depedente precisa ter entre 13 e 17 anos, consulte outra possibilidades do Lubank")
}

//usando operadores lógicos


if(idadeDependente>=13 && idadeDependente<=17){
    console.log("Pode ter o cartão")
} else {
    console.log("Para ter o cartão, o dependente precisa ter entre 13 e 17 anos. Connsulte possibilidades no Lubank")
}

//Ternario

let chuva = "chovendo"

chuva === "chovendo"? console.log("leva guarda-chuva") : console.log("pode deixar o guarda-chuvas")



idadeDependente === 13? console.log("Pode ter cartão") : console.log("Consulte outras opções")

//switch-case

let escolhaUsuario = +(prompt("Digite um numero de 1 a 4 para a escolha do cartão"))
let cartao
switch(escolhaUsuario){
    case 1:
        cartao ="Fácil"
        break;
    case 2:
        cartao = "Black"
        break
    case 3:
        cartao = "Platinum"
        break
    case 4:
        cartao = "Master gold"
        break
    default:
        cartao ="Escolha umas das opções disponiveis"
        break
}
console.log("Cartão", cartao)


const numero = +(prompt("Digite um número"))
if (numero%2===0 && numero%3===0){
    alert("numeros divididos por 2 e 3")
    switch (numero){
        case 1:
            numero = 6;
            alert("numero escolhido 6");
            break;
        case 2:
            numero = 12;
            alert("numero escolhido 12");
            break;
        default:
            alert("seu numero e menor que 6 e maior que 30")
            break;
    }
} else if (numero %2===0){
    alert("Seu numero é divisivel por 2");
}else if (numero %3===0){
    alert("Seu numero é divisivel por 3");
}else {
    alert("seu numero nao se divide por 2 nem por 3");
}
console.log(numero)

