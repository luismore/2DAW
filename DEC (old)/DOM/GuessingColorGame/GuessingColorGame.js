//VARIABLES

var vidas = 2;
let btn = document.getElementById("nuevaPartida");
const tds = document.querySelectorAll("td");
document.getElementById("vidas").innerHTML = vidas+1;



//FUNCIONES

function colorAleatorio(){
    let red = Math.trunc(Math.random() * 256);
    let green = Math.trunc(Math.random() * 256);
    let blue = Math.trunc(Math.random() * 256);

    let  color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}

function casillaAleatoria(){
    let numero = Math.trunc(Math.random() * 6);
    return numero;
}

function colorGanador(){
    let ganador = tds[casillaAleatoria()].getAttribute("style");
    return ganador;
}

function resetGame(){
    vidas = 3;
    document.getElementById("partidaPerdida").innerHTML = "";
    document.getElementById("respuesta").innerHTML = "";
    document.getElementById("vidas").innerHTML = vidas;
}

tds.forEach(td => {td.addEventListener("click", function(event) {
    if (vidas!=0){
        if (td.getAttribute("style") == algo) {
            document.getElementById("respuesta").innerHTML = "GENIO, CAPO, MALABARISTA";
        }else{
            document.getElementById("respuesta").innerHTML = "ESE NO ES"
            vidas--
            document.getElementById("vidas").innerHTML = vidas+1;
;
    }}else{
        document.getElementById("partidaPerdida").innerHTML = "Has perdido, inicia Nueva Partida";
        document.getElementById("vidas").innerHTML = vidas;
        }
})}
);

//CODIGO

tds.forEach(td => {td.style.backgroundColor = colorAleatorio()})

let algo = colorGanador();
var algo2 = algo.slice(21, -1);

document.getElementById("titulo").innerHTML = algo2;

btn.addEventListener("click", resetGame);

document.getElementById('nuevaPartida').addEventListener('click', function() {
    location.reload();
});