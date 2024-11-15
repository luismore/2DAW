/*

let nombre = prompt("Dime tu nombre");
document.write(nombre[nombre.length - 1]);


for (let i=0; i<nombre.length; i++)
    {
        document.write("<p>" + nombre[i]+"</p>");
    }



const arr = [3,5,7];


for (let i of arr){
    document.write(i+"<br>")
}

*/
/*
//WS 5

//1 

for (let i=0; i<=10; i++){
    document.write(i+"<hr>");
}

//2

num = parseInt(prompt("Introduce un numero: "))

for(let i=num; i<=100; i++){
    document.write(i + "<hr>")
}

//3

let num
do{
    num=parseInt(prompt("Introduce un numero: "))
    document.write(num)
}while(num!=0)


//4

let palabra
do{
    palabra=prompt("Introduce un numero: ")
    document.write(palabra)
}while(palabra!="salir")


//5

let num;
let contador=0;

for (i=0; i<=9; i++){
    num=parseInt(prompt("Introduce un numero: "))
    contador += num;
}

document.write(contador);



//6

let num = parseInt(prompt())

for(i=1; i<=10; i++){
    document.write((num*i) + "<hr>")
}





//7

let num = parseInt(prompt());
let num2 = parseInt(prompt());

while (num2!=num){
    if (num2<num)
        document.write("mas pequeño");
    else if (num2>num)
        document.write("mas grande");
}


//4.10

document.write("<h1> PRUEBA DE BUCLE FOR</h1>");
for (i = 1; i <= 6; i++){
    document.write("<h"+i+">"+"Cabecera h"+i);
}



//4.11

let numColumnas = parseInt(prompt("Introduce un numero de columnas: "));
let altura = parseInt(prompt("Introduce la altura: "));
let anchura = parseInt(prompt("Introduce la anchura: "));

document.write("<table border="+0+" cellspacing = "+2+" bgcolor= "+"black"+" width="+anchura+" >");
document.write("<tr bgcolor="+"white"+" height="+altura+">")

for (i=0; i<numColumnas; i++){
    document.write("<td width="+50+" height= "+altura+"></td>");
}
document.write("</tr>")
document.write("</table>");



//4.12


let numColumnas = parseInt(prompt("Introduce un numero de columnas: "));
let altura = parseInt(prompt("Introduce la altura: "));
let anchura = parseInt(prompt("Introduce la anchura: "));

document.write("<table border="+0+" cellspacing = "+2+" bgcolor= "+"black"+" width="+anchura+" >");
document.write("<tr bgcolor="+"white"+" height="+altura+">")

for (i=0; i<numColumnas; i++){
    if (i%2){
    document.write("<td width="+50+" height= "+altura+"></td>");
}else{
    document.write("<td width="+50+" height= "+altura+" bgcolor= "+"black"+"></td>");
}
}
document.write("</tr>")
document.write("</table>");




//4.13

let numColumnas = parseInt(prompt("Introduce un numero de columnas: "));
let altura = parseInt(prompt("Introduce la altura: "));
let anchura = parseInt(prompt("Introduce la anchura: "));
let i=0;

document.write("<table border="+0+" cellspacing = "+2+" bgcolor= "+"black"+" width="+anchura+" >");
document.write("<tr bgcolor="+"white"+" height="+altura+">")

while (i<numColumnas){
    document.write("<td width="+50+" height= "+altura+"></td>");
    i++;
}
document.write("</tr>")
document.write("</table>");




//4.14

let numColumnas = parseInt(prompt("Introduce un numero de columnas: "));
let altura = parseInt(prompt("Introduce la altura: "));
let anchura = parseInt(prompt("Introduce la anchura: "));
let i=0;

document.write("<table border="+0+" cellspacing = "+2+" bgcolor= "+"black"+" width="+anchura+" >");
document.write("<tr bgcolor="+"white"+" height="+altura+">")

while (i<numColumnas){
    if (i%2){
    document.write("<td width="+50+" height= "+altura+"></td>");
    i++;
}else{
    document.write("<td width="+50+" height= "+altura+" bgcolor= "+"black"+"></td>");
    i++;
}
}
document.write("</tr>")
document.write("</table>");





//4.17

let num = parseInt(prompt("Introduce un numero: "));

for (i=1; i<=num; i++){
    document.write("Tabla del "+i+"<br>")
    for(j=1; j<=10; j++){
        document.write(i+"x"+j+"="+(j*i)+"<br>");
    }
}


//4.18

let numColumnas = parseInt(prompt("Introduce el numero de columnas: "));
let numFilas= parseInt(prompt("Introduce el numero de filas: "));
let altura = parseInt(prompt("Introduce la altura: "));
let anchura = parseInt(prompt("Introduce la anchura: "))


document.write("<table border="+0+" cellspacing = "+2+" bgcolor= "+"black"+" width="+200+" >");

for(j=1; j<=numFilas; j++){
    document.write("<tr width="+anchura+" bgcolor="+"white"+" height="+altura+">")
    for (i=0; i<numColumnas; i++){
        document.write("<td width="+anchura+" height= "+altura+"></td>");
    }
}



//4.19

//let numColumnas = parseInt(prompt("Introduce el numero de columnas: "));
//let numFilas= parseInt(prompt("Introduce el numero de filas: "));
//let altura = parseInt(prompt("Introduce la altura: "));
//let anchura = parseInt(prompt("Introduce la anchura: "))


document.write("<table border="+0+" cellspacing = "+2+" bgcolor= "+"black"+" width="+400+" >");

for(j=1; j<=8; j++){
    document.write("<tr width="+50+" bgcolor="+"white"+" height="+50+">")
    for (i=0; i<8; i++){
        if (i%2){
        document.write("<td width="+50+" height= "+50+"></td>");
        }else{
        document.write("<td width="+50+"bgcolor="+"black"+ " height= "+50+"></td>");
        }
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//1

let n = parseInt(prompt("Ingrese un número: "));
for (let i = 1; i <= n; i++) {
  console.log(i);
}

//2

let n = parseInt(prompt("Ingrese un número: "));
for (let i = 1; i <= n; i += 2) {
  console.log(i);
}

//3

let n = parseInt(prompt("Ingrese un número: "));
for (let i = n; i >= 1; i--) {
  console.log(i);
}

//4

for (let i = 1; i <= 10; i++) {
    console.log("9 x" + i +"= 9 *+" i");
  }

//5

let num=prompt("Introduzca un numero para hacer la suma de cada uno de sus digitos")
for(let i=0; i<num.length; i++){
    if(NaN(parseInt(num[i])))
        document.write("No es un numero")
}
    else
        suma= suma+parseInt(num[i]);

document.write(suma));



//6

let n = parseInt(prompt("Ingrese un número N: "));
let m = parseInt(prompt("Ingrese un número M: "));
let sum = 0;
for (let i = Math.min(n, m); i <= Math.max(n, m); i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}
document.write("La suma de los números pares es:" + sum);



//7

let n = parseInt(prompt("Ingrese un número N: "));
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum += i;
}
document.write("La sumatoria de los primeros" +n+ "números es:" + sum);



//8

let n = parseInt(prompt("Ingrese un número N: "));
for (let i = 1; i <= n; i++) {
  let factorial = 1;
  for (let j = 1; j <= i; j++) {
    factorial *= j;
  }
  document.write("El factorial de" + i +"es: " +factorial`);
}

*/


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


