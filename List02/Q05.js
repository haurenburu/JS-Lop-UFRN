/*[L2-Q5] Implemente um programa que recebe o consumo de água de uma residência (em metros cúbicos) e calcula o valor da conta. O preço do metro cúbico de água é dado da seguinte maneira: se a quantidade consumida for de até 20 metros cúbicos, o preço será de 8.50R$, se for maior que isso, o preço será 11.50R$.*/

let metrosCubicos = Math.floor(prompt("Digite o consumo: "));

if(metrosCubicos <= 20){
    alert(metrosCubicos * 8.5 + "R$");
    
} else {
    alert(metrosCubicos * 11.5 + "R$");
    
}