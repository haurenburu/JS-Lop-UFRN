/*[L2-Q8] Implemente um programa que recebe um valor inteiro e determina se ele é divisível por 3, por 4 ou por 5. Seu programa deve imprimir na saída uma nova linha para cada um dos casos, contendo o seguinte texto: "Divisivel por 3\n", "Divisivel por 4\n" e "Divisivel por 5\n" para cada caso verdadeiro. Caso o número não seja divisível por nenhum dos 3 números, seu programa deve imprimir a mensagem "Nao divisivel".*/

let num = Math.floor(prompt("Digite um numero: "));

if(num % 3 === 0 || num % 4 === 0 || num % 5 === 0){
    if(num % 3 === 0){
        alert("Divisivel por 3\n");
        
    }
    if(num % 4 === 0){
        alert("Divisivel por 4\n");
        
    }
    if(num % 5 === 0){
        alert("Divisivel por 5");
        
    } 
}
else {
    alert("Nao eh divisivel");
    
}