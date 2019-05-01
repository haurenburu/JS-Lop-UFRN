/*[L2-Q2] Implemente um programa que recebe um número inteiro e determina se ele é divisível por 6. Seu programa deve imprimir na saída "Divisivel" caso positivo, e "Indivisivel" caso contrário.*/

let numero = Math.floor(prompt("Digite o numero: "));

if(numero % 6 === 0){
    alert("Divisivel");
    
} else {
    alert("Indivisivel");
    
}
