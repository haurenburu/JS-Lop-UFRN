/*[L2-Q7] Implemente um programa que recebe um valor inteiro e determina se ele é divisível por 3, por 4 e por 5 ao mesmo tempo. O programa deve exibir a mensagem "Eh divisivel" para o caso positivo e "Nao eh divisivel" para o caso negativo.*/

let num = Math.floor(prompt("Digite um numero: "));

if (num % 3 === 0 && num % 4 === 0 && num % 5 === 0){
   alert("Eh divisivel") ;
   
} else {
    alert("Nao eh divisivel");
    
}