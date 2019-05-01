/*[L2-Q1] Implemente um programa que recebe um n�mero real e calcula: o quadrado do número, caso ele seja um n�mero negativo, ou sua raiz quadrada, caso contrário.*/

let numero = Math.floor(prompt("Digite o numero: "));

if(numero < 0) {
    alert(Math.pow(numero, 2));
    
}
else {
    alert(Math.sqrt(numero));
    
}
