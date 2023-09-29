//1 - Escreva um programa executando os seguintes passos:
//-Crie uma variável com o valor inicial igual a 2148. Esse valor não deve ser alterado.
//-Crie uma segunda variável, dessa vez sem um valor inicial.
//-Imprima na tela a seguinte mensagem: "O valor da primeira variável é $valor", substituindo o termo iniciado em $ pelo valor abrigado na sua variável.
//-Atribua um valor numérico à segunda variável.
//-Imprima na tela os textos "Minha segunda variável vale $valor" e "o valor da soma das minhas duas variáveis é $valor", substituindo o termo $valor pelos valores correspondentes.
//-Eleve a sua segunda variável ao quadrado e imprima esse resultado na tela. Após isso, divida esse resultado por 3 e coloque-o na tela novamente.
console.log("Resultado do Exercício 1:");

 const valorInicial = 2148;
 let segundoValor; 

console.log(`O valor da primeira variável é ${valorInicial}`);

 segundoValor = 1780;

console.log(`Minha segunda variável vale ${segundoValor} e a soma das minhas duas variáveis é ${valorInicial + segundoValor}`);

 segundoValor = segundoValor**2;

console.log(`Minha segunda variável elevado ao quadrado é ${segundoValor}`);

 segundoValor = segundoValor/3;

console.log(`Minha segunda variável dividio por 3, vai ficar: ${segundoValor}`);


//2 - Crie duas variáveis booleanas de valores iniciais distintos. Imprima na tela o resultado das operações _AND_ e _OR_ entre elas. Depois disso, crie uma terceira variável booleana, com o valor de sua escolha. Imprima na tela o resultado das operações _AND_ e _OR_ para as três variáveis disponíveis.
console.log("Resultado do Exercício 2:");
 const valor1 = true;
 const valor2 = false;

 const valor1EValor2 = valor1 && valor2; 
 const valor1OuValor2 = valor1 || valor2;

console.log(`Operação AND entre minhas 2 variáveis será: ${valor1EValor2}`);
console.log(`Operação OR entre minhas 2 variáveis será: ${valor1OuValor2}`);

 const valor3 = false;

 const valor1EValor2EValor3 = valor1 && valor2 && valor3;
 const valor1OuValor2OuValor3 = valor1 || valor2 || valor3;

console.log(`Operação AND entre minhas 3 variáveis será: ${valor1EValor2EValor3}`);
console.log(`Operação OR entre minhas 3 variáveis será: ${valor1OuValor2OuValor3}`);