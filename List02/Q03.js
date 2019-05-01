/* [L2-Q3] Implemente um programa que identifica se um dado número é menor, igual ou maior que 20 e exibe o resultado na saída. */

let numero = Math.floor(prompt("Digite o numero: "));

if(numero < 20) {
    alert("Menor");
    
} else if(numero == 20) {
    alert("Igual");

}
else {
    alert("Maior");

}