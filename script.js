//###-------------- Prática 1
/* const verificaDependente = (idade) => {

     if (idade === 13) {
      console.log(`Cartão de crédito vinculado disponível.`);
    } else if (idade === 14) {
      console.log(`Cartão de crédito vinculado disponível.`);
    } else if (idade === 15) {
      console.log(`Seu dependente já pode ter um cartão de crédito vinculado ao seu..`);
    } else if (idade === 16) {
      console.log(`Seu dependente já pode ter um cartão de crédito vinculado ao seu..`);
    } else if (idade === 17) {
      console.log(`Seu dependente já pode ter um cartão de crédito vinculado ao seu..`);
    } else {
      console.log(`Consulte outas possibilidades do labank.`);
    } 

  if ((idade >= 13) && (idade <= 17)) {
    console.log(`Seu dependente já pode ter um cartão de crédito vinculado ao seu.`);
  } else {
    console.log(`Consulte outas possibilidades do labank.`);
  }
}
verificaDependente(15); */

//###-------------- Prática 2
/* const verificaDependente = (idade) => {
  const resp1 = confirm(`Já possui conta no Labank?`);
  resp1 ? console.log(`Bem vindo!`) : console.log(`Abra uma conta!`);

    if ((idade >= 13) && (idade <= 17)) {
      console.log(`Seu dependente já pode ter um cartão de crédito vinculado ao seu.`);
    } else {
      console.log(`Consulte outas possibilidades do labank.`);
    } 
}
verificaDependente(16); */

//###-------------- Prática 3
/* const escolhaCartao = (ramal) => {
  switch (ramal) {
    case 1:
      console.log(`Cartão Fácil`);
      break;
    case 2:
      console.log(`Cartão Black`);
      break;
    case 3:
      console.log(`Cartão Platinum`);
      break;
    case 4:
      console.log(`Cartão Master Gold`);
      break;
    default:
      console.log(`Escolha uma das quatro opções!`);
  }
}
escolhaCartao(2); */

//###-------------- Prática extra

const verificaDivisao = (numero) => {

  /*   if (numero % 2 === 0) {
      if (numero % 3 === 0) {
        console.log(`Número divisível por 2 e 3.`);
      }
    } else {
      console.log(`Número não é divisível por 2 e 3`);
    } */

  if ((numero % 2 === 0) && (numero % 3 === 0)) {
    //numero === 30 ? console.log(`UFA ACERTEI!`) : console.log(`Não foi dessa vez :(`)
    switch (numero) {
      case 6:
        console.log(`Número 6`);
        break;
      case 12:
        console.log(`Número 12`);
        break;
      case 18:
        console.log(`Número 18`);
        break;
      case 30:
        console.log(`Número 30`);
        break;
      default:
        console.log(`Número diferente`);
    }
    console.log(`Número divisível por 2 e 3.`);
  } else {
    console.log(`Número não é divisível por 2 e 3`);
  }
}

verificaDivisao(Number(prompt(`Digite o valor para verificaçao: `)));