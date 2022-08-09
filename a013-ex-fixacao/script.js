let nome = prompt("Qual seu nome?").toLowerCase()
let numero = Number(prompt(`Bem vindo ao jogo ${nome}! \nPara ganhar você deve acertar o nº surpresa! \nDica: Ele é divisível por 2 e 3. \nAlguns números digitados podem desbloquear novas dicas. \nBom jogo!`))

console.log("SEU NÚMERO É:", numero);

if (numero % 2 === 0 && numero % 3 === 0) 
{
    console.log(`Sim ${nome}! O seu número é divisivel por 2 e 3.`);
    numero === 30 ? console.log("VOCÊ ACERTOU O Nº SURPRESA DE PRIMEIRA") : console.log("VOCÊ AINDA NÃO ACERTOU O NÚMERO SURPRESA")
    switch (numero) 
    {
        case 6:
            console.log("NOVA DICA: O NÚMERO SURPRESA DIVIDO PELO SEU NÚMERO É = A 5.")
            break;
        case 12:
            console.log("NOVA DICA: O NÚMERO SURPRESA DIVIDO POR 2 É 3 NÚMEROS ACIMA DO SEU.")
            break;
        case 18:
            console.log("NOVA DICA: O NÚMERO SURPRESA + 6 DIVIDO POR 2 É = AO SEU.")
            break;
        case 24:
            console.log("NOVA DICA: QUASE LÁ, O NUMERO SURPRESA É MENOS DE 8 NÚMEROS ACIMA DO SEU.")
            break;
        case 30:
            console.log("PARABÉNS!")
            break;
        default:
            console.log("O SEU NUMÉRO É DIVISIVEL POR 2 E 3, MAS NÃO DESBLOQUEOU NOVAS DICAS.")
    } 
} else {
    console.log("O SEU NÚMERO NÃO É DIVISIVEL POR 2 E 3, TENTE NOVAMENTE.")
}

// if (numero % 2 === 0) {
//     if (numero % 3 === 0) {
//         console.log("o numero é divisivel por 2 e 3");
//     }
// } else {
//     console.log("o numero NÃO é divisivel por 2 e 3");
// }