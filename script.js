//18const idade = Number(prompt("Qual é sua idade?"));

/*if(idade>13){
    if(idade<17){
        console.log("A pessoa dependente já pode ter um cartão de crédito vinculado ao seu!")
    }
}else{
    console.log("Consulte outras possibilidades do Lank")
}*/


/*if (idade > 13 && idade < 17) {

    console.log("A pessoa dependente já pode ter um cartão de crédito vinculado ao seu!")

} else {
    console.log("Consulte outras possibilidades do Lank")
}

console.log("-".repeat(40));
const conta = prompt("Você tem conta?")

conta.toLocaleLowerCase() === "sim" ? console.log("Boas vindas") : console.log("Faça um cadastro");

console.log("-🎮".repeat(40));

console.log("       Escolha um tipo de cartão-");
console.log("             1- Fácil");
console.log("             2-Black");
console.log("            3-Platinum");
console.log("          4-Master Gold");
const numero = Number(prompt("Digite o número do cartão que você queira:"));
let cartao
switch (numero) {
    case "1":
        cartao = "Cartão facil";
        break
    case "2":
        cartao = "Cartão Black";
        break
    case "3":
        cartao = "Cartão Platinum";
        break
    case "4":
        cartao = "Cartão Master Gold";
        break
    default:

        cartao = "Escolha umas das quatro opções disponíveis";

}
console.log(`${cartao}`);*/

//EX 1

const numero = Number(prompt("Digite um número:"))
console.log("Vamos ver se esse número é divisível por 2 ou por 3.");
/*A) if (numero % 2 == 0) {
    console.log(`O numero ${numero} é divisível por 2!`);
    if (numero % 3 == 0) {
        console.log(`O numero ${numero} é divisível por 3!`);
    }
}*/

//B

if (numero % 2 == 0 && numero % 3 == 0) {
    console.log(`O numero ${numero} é divisível por 2 e 3!`);
}

//EX 2

numero == 30 ? console.log("Ufa acertei o númeor 30!✌") : console.log("Não acertei o numero 30. 😒")

//EX 3

switch (numero) {
    case 6:
        console.log("6-🏌🏿");
        break
    case 12:
        console.log("12-🏇🏼");
        break30
    case 18:
        console.log("18-⛹🏾");
        break
    case 24:
        console.log("24-🏄🏾");
        break
    case 30:
        console.log("30-🏊🏽");
        break
}

