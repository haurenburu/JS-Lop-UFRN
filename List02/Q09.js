/*[L2-Q9] Implemente um programa que recebe uma quantia (em reais) referente ao valor depositado em uma conta e calcula o rendimento recebido em um ano por essa quantia. O banco paga 4% para depósitos até R$1000,00; 4.5% para depósitos até R$5000,00; E 5% para depósitos a partir de R$5000,00.*/

let salario = Math.floor(prompt("Digite o salario em reais: "));

if (salario <= 1000){
    alert("Rendimento: " + salario * 0.040);
    
} else if (salario <= 5000){
    alert("Rendimento: " + salario * 0.045);
    
} else {
    alert("Rendimento: " + salario * 0.050);
    
}