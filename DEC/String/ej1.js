/*
function invierteCadena(string){
    let separar = string.split("");
    let revertir = separar.reverse("");
    let unir = revertir.join("");
    return unir;
}

let hola = "hola"

document.write(invierteCadena(hola));


function inviertePalabras(string){
    let separada = string.split(" ");
    let unir = " ";
    let concatenada="";

    for (i=0; i<=separada.length; i++){
        let palabraInvertida=invierteCadena(separada[i])
        concatenada += " "+palabraInvertida
    }
    return concatenada;
}

let hola2 = "hola que tal"
document.write(inviertePalabras(hola2));

*/
let hola2 = "hola que tal"
function palabraMasLarga(string){
    let separada = string.split(" ");
    let medidas = "";
    let palabra = "";

    for (i = 0; i<= separada.length; i++){
        let letras = separada[i].length();
        medidas += letras;
    }
    posicion = Math.max(letras);
    return palabra;
}

document.write(palabraMasLarga(hola2));
