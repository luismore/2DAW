let bolas = [];
let barras = [];
let svgNS = "http://www.w3.org/2000/svg";


window.onload = () => {

    bolas.push(new Bola("juego", 50, 50, 50, 50, 50, 1920, 1080));

    barras.push(new Barra("juego", 10, 200, 0, 0));
    barras.push(new Barra("juego", 10, 200, 0, 1910));

    setInterval(() => {
        bolas.forEach(bola => bola.mover());
    }, 30); 

}
    

class Bola {
    constructor(svgPadre, x = 50, y = 50, radio = 50, velX = 125, velY = 105, sizeX = 1920, sizeY = 1080) {
        this.posicionX = x;
        this.posicionY = y;
        this.r = radio;
        this.velocidadX = velX;
        this.velocidadY = velY;
        this.limiteX = sizeX;
        this.limiteY = sizeY;
        this.elemento = this.crearTag(svgPadre);
    }

    crearTag(svgPadre) {
        let bola = document.createElementNS(svgNS, "circle");
        bola.setAttribute("cx", this.posicionX);
        bola.setAttribute("cy", this.posicionY);
        bola.setAttribute("r", this.r);
        bola.setAttribute("fill", "black");
        document.getElementById(svgPadre).appendChild(bola);
        return bola;
    }

    mover() {
        this.posicionX += this.velocidadX;
        this.posicionY += this.velocidadY;

        if (this.posicionX - this.r <= 0 || this.posicionX + this.r >= this.limiteX) {
            this.velocidadX *= -1;
        }
        if (this.posicionY - this.r <= 0 || this.posicionY + this.r >= this.limiteY) {
            this.velocidadY *= -1;
        }

        this.actualizarPosicion();
    }
    actualizarPosicion() {
        this.elemento.setAttribute("cx", this.posicionX);
        this.elemento.setAttribute("cy", this.posicionY);
    }

    eliminar() {
        this.elemento.remove();
        let index = bolas.indexOf(this);
        if (index > -1) {
            bolas.splice(index, 1);
        }
    }

    random_rgba() {
        let o = Math.round, r = Math.random, s = 255;
        return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
    }
}

    class Barra{
        constructor(svgPadre, Bwidth = 10, Bheight = 200, By=0, Bx=0){
            this.Bwidth = Bwidth;
            this.Bheight = Bheight;
            this.posicionY = By;
            this.posicionX = Bx;
            this.velocidadY = 0;

            this.elemento = this.crearTag(svgPadre);


            this.elemento.addEventListener("keydown", function(event) {
                if (event.key === "w") {
                    moverArribaIzq();
                }})
            this.elemento.addEventListener("keydown", function(event) {
                if (event.key === "s") {
                    moverAbajoIzq();
                }})




            this.elemento.addEventListener("keydown", function(event) {
                if (event.key === "ArrowUp") {
                    moverArribaDer();
                }})
                this.elemento.addEventListener("keydown", function(event) {
                if (event.key === "ArrowDown") {
                    moverAbajoDer();
                }})

    }

    moverArribaIzq(){

            this.velocidadY = 5;
            this.posicionY += this.velocidadY;

        this.actualizarPosicion();
    }

    moverArribaDer(){

        this.velocidadY = 5;
        this.posicionY += this.velocidadY;

        this.actualizarPosicion();
    }

    moverAbajoIzq(){

        this.velocidadY = 5;
        this.posicionY += this.velocidadY;

        this.actualizarPosicion();
    }

    moverAbajoDer(){

        this.velocidadY = 5;
        this.posicionY += this.velocidadY;

        this.actualizarPosicion();
    }




    actualizarPosicion() {
        this.elemento.setAttribute("y", this.posicionY);
    }

    crearTag(svgPadre) {
        let barra = document.createElementNS(svgNS, "rect");
        barra.setAttribute("x", this.posicionX);
        barra.setAttribute("y", this.posicionY);
        barra.setAttribute("width", this.Bwidth);
        barra.setAttribute("height", this.Bheight);
        barra.setAttribute("fill", "black");
        document.getElementById(svgPadre).appendChild(barra);
        return barra;
    }

}
