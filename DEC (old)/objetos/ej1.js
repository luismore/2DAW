let numAleatorio = parseInt(Math.random());
let numAleatorio2 = parseInt((Math.random() *  200) + 100);

let num1 = parseInt(prompt("Introduce el primer numero: "));
let num2 = parseInt(prompt("Introduce el segundo numero: "));

//let numAleatorio3 = parseInt((Math.random() * (Math.max(num1, num2))) + (Math.min(num1, num2)));

if (num1>num2){
    let numAleatorio3 = parseInt((Math.random() *  num1) + num2);
}else{
    let numAleatorio3 = parseInt((Math.random() *  num2) + num1);
}

document.write(numAleatorio + "<br>" + numAleatorio2 + "<br>" + numAleatorio3);