/*[L2-Q10] Implemente um programa que leia três valores e determine qual o menor deles.*/

let num1 = Math.floor(prompt());
let num2 = Math.floor(prompt());
let num3 = Math.floor(prompt());

if (num1 < num2 && num1 < num3){
    alert(num1 + " eh o menor");
    
}

else if(num2 < num1 && num2 < num3) {
    alert(num2 + " eh o menor");

}

else if(num3 < num1 && num3 < num2) {
    alert(num3 + " eh o menor");

}