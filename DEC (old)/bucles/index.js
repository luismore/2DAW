/*

let variable1 = 5;
let variable2 = 2;

document.write("el valor de la primera variable es: " + variable1 + " y el de la variable 2: "+variable2);

let suma = variable1 + variable2;
let resta = variable1 - variable2;
let division = variable1 * variable2;
let multiplicacion = variable1/variable2;

document.write("Suma= "+suma);
document.write("resta= "+resta);
document.write("multi= "+multiplicacion);
document.write("div= "+division);

*/

/*

let variable1;
let variable2;

parseInt(prompt(variable1));
parseInt(prompt(variable2));

document.write("el valor de la primera variable es: " + variable1 + " y el de la variable 2: "+variable2);

let suma = variable1 + variable2;
let resta = variable1 - variable2;
let division = variable1 * variable2;
let multiplicacion = variable1/variable2;

document.write("Suma= "+suma);
document.write("resta= "+resta);
document.write("multi= "+multiplicacion);
document.write("div= "+division);
);
*/


/*

let radio = 3;

let circunference = radio*2*Math.PI;

document.write("circunferencia: "+circunference);

let area = radio*radio*Math.PI;

document.write("area: "+ area);

*/

/*

let temperaturaCelsius = 36;

let temperaturaFh = (temperaturaCelsius*9/5) + 32;

document.write(temperaturaCelsius+"ºC es "+ temperaturaFh+"ºF");

*/

/*

let valor = -3;

if (valor > 0)
    document.write("Es mayor a 0")
else
    document.write("Es menor que 0")

    */





//WORKSHEET 5

/*
// 1

let num = parseInt(prompt());
let resto = num%2;

if (resto === 0){
    document.write("Es par")
}
else{
    document.write("Es impar")
}


//2

let edad = parseInt(prompt());

if (edad >= 18)
    document.write("Es mayor de edad");
else
    document.write("Es menor de edad");


//3

let edad2 = parseInt(prompt());
let lugarNacimiento = prompt();

if (edad2 >= 25 && lugarNacimiento == "Madrid")
        document.write("Enhorabuena");


//4

let num = parseInt(prompt());
let descuento

if (num>100)
    descuento = num-(num*0.15);
    document.write(descuento)



//5

let nombre = prompt();

if (nombre === "Pablo" || nombre === "Eduardo")
    document.write("Bienvenido");
if (nombre === "Ana" || nombre === "Clara")
    document.write("Bienvenida");


//6

let edad = parseInt(prompt());
let vive = prompt();

if (vive === "Madrid")
    if (edad<30 && edad>18)
        document.write("Puede acceder al carnet de empresarios emprendedores")



//IF ELSE

//1

let nombre = prompt();
let apellidos = prompt();

if (nombre === "Ricardo")
    document.write(apellidos)
else
    console.log(apellidos)


//2

let edad = parseInt(prompt());

if (edad >= 67)
    document.write("Se puede jubilar")
else
    document.write("No se puede jubilar")



//3

let edad = parseInt(prompt());

if (edad <= 5){
    document.write("Debes estar en el Jardin de Infancia")
}else if (edad <= 11 && edad>=6){
    document.write("Debes estar en el Primaria")
}else if (edad <= 16 && edad>=12){
    document.write("Debes estar en la ESO")
}else if (edad <= 21 && edad>=17){
    document.write("Debes estar en Bachillerato o Ciclos")
}else if (edad > 21){
    document.write("Debes estar en La Universidad")
}

//4


let numHer = parseInt(prompt());
let cantidad = parseInt(prompt());

if (numHer >= 3){
    document.write(cantidad - (cantidad*0.15));
}else if (numHer>0 && numHer<3){
    document.write(cantidad - (cantidad*0.05));
}else if (numHer == 0){
    document.write(cantidad);
}


//5

let ex1 = parseInt(prompt());
let ex2 = parseInt(prompt());
let pr1 = parseInt(prompt());
let pr2 = parseInt(prompt());

medEx = (ex1*0.75) + (ex2*0.75);
medPr = (pr1*0.25) + (pr2*0.25);

if ((medEx + medPr) >= 5)
    document.write("Aprobado");
else
    document.write("Suspenso");



//SWITCH

//1

let mes = prompt();

switch(mes){
    case "Enero":
        document.write("31 dias")
        break;
    case "Febrero":
        document.write("28 dias")
        break;
    case "Marzo":
        document.write("31 dias")
        break;
    case "Abril":
        document.write("30 dias")
        break;
    case "Mayo":
        document.write("31 dias")
        break;
    case "Junio":
        document.write("30 dias")
        break;
    case "Julio":
        document.write("31 dias")
        break;
    case "Agosto":
        document.write("31 dias")
        break;
    case "Septiembre":
        document.write("30 dias")
        break;
    case "Octubre":
        document.write("31 dias")
        break;
    case "Noviembre":
        document.write("30 dias")
        break;
    case "Diciembre":
        document.write("31 dias")
        break;
    default:
        document.write("Mes no existente")
        break;


}
        
    


//2

let num = parseInt(prompt());

switch(num){

    case (num%2 === 0):
        document.write("El numero es par");
        break;
    case (num%3 === 0):
        document.write("El numero es multiplo de 3");
        break;
    case (num%5 === 0):
        document.write("El numero es multiplo de 5");
        break;
}


//3

let num1 = parseInt(prompt());
let num3 = parseInt(prompt());
let operador = prompt("+,-,*,/");

switch(operador){
    case "+":
        document.write(num1+num3);
        break;
    case "-":
        document.write(num1-num3);
        break;
    case "*":
        document.write(num1*num3);
        break;
    case "/":
        document.write(num1/num3);
        break;
}

*/