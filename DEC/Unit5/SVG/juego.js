window.onload = () => {

    var bolas = new Array;

for (let i = 0; i < 10; i++) {
    bolas.push(new bola("juego", getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(),getRandomInt()));
}


function getRandomInt(){
    return Math.floor(Math.random() * 10) + 1;
}


creaTag(svgPadre){
    
}



class bola{
    constructor(svgPadre,x,y,r,velx,vely){
        this.svgPadre = svgPadre;
        this.x = x;
        this.y = y;
        this.r = r;
        this.velx = velx;
        this.vely = vely;
} 


    var posicionX = 50;
    var limiteX = 1000;
    var r = 40;
    var velocidadX = Math.random() * 10 - 1;


    var posicionY = 50;
    var limiteY = 1000;
    var velocidadY = Math.random() * 10 - 1;

    setInterval(()=>{}, 1)}

    mover(){
                
        posicionX += velocidadX;
        
        bola.setAttribute("cx", posicionX);
        if((posicionX+r)> limiteX){
        velocidadX *= -1;
        }
        else if((posicionX-r)<0){
            velocidadX *= -1;
        }

        posicionY += velocidadY;
     
        bola.setAttribute("cy", posicionY);
        if((posicionY+r)> limiteY){
        velocidadY *= -1;
        }
        else if((posicionY-r)<0){
            velocidadY *= -1;
        }

    }

    }

























    //     posicionX += velocidadX;
        
    //     bola.setAttribute("cx", posicionX);
    //     if((posicionX+r)> limiteX){
    //     velocidadX *= -1;
    //     }
    //     else if((posicionX-r)<0){
    //         velocidadX *= -1;
    //     }

    //     posicionY += velocidadY;
        
    //     bola.setAttribute("cy", posicionY);
    //     if((posicionY+r)> limiteY){
    //     velocidadY *= -1;
    //     }
    //     else if((posicionY-r)<0){
    //         velocidadY *= -1;
    //     }

    // }, 1)