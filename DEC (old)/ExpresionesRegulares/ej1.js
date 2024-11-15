window.onload = () =>{

let mayus = document.getElementsByClassName(mayusculas);
let especiales = document.getElementsByClassName(especiales);
let correo =  document.getElementById(correo);
let credito =  document.getElementById(credito);
let longitud =   document.getElementById(longitud);
let numeros =  document.getElementById(numeros);






function comprobarMayusculas(){
    assert(/[A-Za-z]+/.test(mayus));
    return true
}




function especiales(){
    assert(/[!@#$%^&]/.test(especiales));
    return true
}



function correo(){
    assert(/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(correo)) 
}


function tCredito(){
    assert(/^4[0-9]{12}(?:[0-9]{3})?$/.test(credito))
}


function longitud(){
    assert(/{8,}/.test(longitud))
}



function numeros(){
    assert(/\d/.test(numeros))
}

}
