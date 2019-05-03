/*[L2-Q12] Implemente um programa que calcule o Índice de Massa Corporal (IMC) de uma pessoa e indique sua classificação de peso. O programa deve solicitar o peso em quilogramas e a altura em metros. A relação entre IMC e classificação é dado a abaixo: Menor que 18,5: Abaixo do peso; Maior igual 18,5 e menor que 25 : Peso normal; Maior igual 25,0 e menor que 30: Sobrepeso; Maior Igual à 30: Obesidade.*/

let pesoEmKl = prompt("Digite o peso(kl): ");
let alturaEmM = prompt("Digite a altura(m): ");
let imc = pesoEmKl / Math.pow(alturaEmM, 2);

if(imc < 18.5) {
    alert("Abaixo do peso");
    
} else if (imc >= 18.5 && imc < 25) {
    alert("Peso normal");
    
} else if (imc >= 25 && imc < 30) {
    alert("Sobrepeso");
    
} else {
    alert("Obesidade");
}