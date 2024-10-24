/*
function factorial(n){
    if  (n === 1)
        return 1;
    else
    return n * factorial(n - 1);

}
console.log(factorial(4));
*/
/*
let n = parseInt(prompt());

function lanzamiento(numero){
    let numAleatorio = parseInt(Math.random() * (numero - 1) + 1);
    return numAleatorio;
}

console.log(lanzamiento(n))

*/
let n = parseInt(prompt());

function lanzamiento(numero){
    let numAleatorio = parseInt(Math.random() * (numero - 1) + 1);
    return numAleatorio;
}

let veces1 = 0;
let veces2 = 0;
let veces3 = 0;
let veces4 = 0;
let veces5 = 0;
let veces6 = 0;

let contador = 0;


do{

contador++;

switch(lanzamiento(n)){
    case 1:
        veces1++;
        break;
    case 2:
        veces2++;
        break;
    case 3:
        veces3++;
        break;
    case 4:
        veces4++;
        break;
    case 5:
        veces5++;
        break;
    case 6:
        veces6++;
        break;
}
}while(contador<6000);

console.log("1 " + veces1 + "veces")
console.log("2 " + veces2 + "veces")
console.log("3 " + veces3 + "veces")
console.log("4 " + veces4 + "veces")
console.log("5 " + veces5 + "veces")
console.log("6 " + veces6 + "veces")

