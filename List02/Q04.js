/* [L2-Q4] Implemente um programa que recebe três valores inteiros referentes a uma data e a imprime com o mês por extenso. Exemplo de entrada: “10 5 2013”. Exemplo de saída: “10 de Maio de 2013”.*/

let mesPorExtenso = ["Janeiro","Fevereiro","Marco","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
let dia = Math.floor(prompt("Digite o dia: "));
let mes = Math.floor(prompt("Digite o mes: "));
let ano = Math.floor(prompt("Digite o ano: "));

alert(dia + " de " + mesPorExtenso[mes-1] + " de " + ano);