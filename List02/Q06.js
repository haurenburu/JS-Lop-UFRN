/*[L2-Q6] Implemente um programa que recebe três números (a, b e c) e determina se o terceiro número (c) está no intervalo fechado dos outros dois. O programa deve exibir a mensagem "Pertence" ou "Nao pertence" como resultado.*/

let a = Math.floor(prompt("Digite o numero A"));
let b = Math.floor(prompt("Digite o numero B"));
let c = Math.floor(prompt("Digite o numero C"));

if(c > a && c < b) {
    alert("Pertence");
    
} else if (c < a && c > b) {
    alert("Pertence");
    
} else {
    alert("Nao pertence");
    
}