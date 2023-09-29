//1 - Faça uma função que recebe as notas das 3 provas de um aluno e calcula a média dessas. Ao término do processo, devemos ter a mensagem "a média desse aluno é x" (sendo x o resultado do cálculo).
//
console.log("Resolução do exercício 1");
 function notas(a, b, c) {
    notas = a+b+c/3;
    console.log(`A média desse aluno é ${notas}`);
    return notas;
 }


//2 - Imagine agora que o aluno do item anterior não atingiu a média mínima pra passar, e por isso está de prova final. Faça uma nova função que calcula a média final desse aluno a partir de 4 notas, as das 3 primeiras provas + a nota da prova final. O cálculo deve ser o seguinte: média_final = (média_antes_da_pf + pf)/2 

//Você deve usar a função do exercício 1 para calcular a média final. Faça as modificações que julgar necessário. 
//Ao término do processo, devemos ter a mensagem "a média final desse aluno é x" (sendo x o resultado do cálculo).

console.log("Resolução do exercício 2");
 const mediaAntesdaProvaFinal = notas;
 function mediaFinal(d) {
   mediaFinal = mediaAntesdaProvaFinal + d / 2;
   console.log(`A média final desse aluno é ${mediaFinal}`) ;
 }



//3 - Escreva uma função que recebe do usuário um valor de temperatura em graus Celsius e escreve na tela o texto: a temperatura correspondente em Farenheit é de xºF (sendo x o resultado da conversão.)
//Obs: temperatura em Farenheit = (9/5)*( temperatura em Celsius ) + 32

console.log("Resolução do exercício 3");
 function farenheit(celsius) {
   farenheit = (9/5)*(celsius) + 32;
   console.log(`A temperatura correspondente em Farenheit é de ${farenheit}ºF`);
 }
 


//4 - Quando estava passeando em Nova York, Bruno se surpreendeu com uma realidade diferente da que conhecia. Ao tentar pagar um produto, ele percebeu que o valor cobrado era sempre um pouco maior do que o que estava presente na etiqueta da prateleira onde o achou. Isso acontece porque a etiqueta não contém o valor do imposto pago sobre o produto, que é calculado no caixa. Esse imposto é de 8,875% em cima do valor do produto. Faça uma função que recebe o valor do produto presente na etiqueta e registre na tela a frase: O valor a ser pago é x (sendo x o resultado do acréscimo dos impostos sobre o valor inicial).
 
console.log("Resolução do exercício 4");
 function valorImposto (valorProduto) {
   valorImposto = valorProduto * 1.08875
   console.log(`O valor a ser pago é ${valorImposto}`);
 }
