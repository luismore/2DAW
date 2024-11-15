var btn = document.getElementsByTagName("button");


document.write("<table border=1px>")

for(i=0; i<=100; i++){
    document.write("<tr width=5px height = 5px>")
    for(j=0; j<=100; j++){
        document.write("<td width=5px height = 5px></td>")
    }
    document.write("</tr>")
}

document.write("</table>")

const tds = document.querySelectorAll("td");

tds.forEach(td => {td.addEventListener("mouseover", function(event) {
        if (event.altKey) {
            td.style.backgroundColor = "red";
        } else if (event.shiftKey) {
            td.style.backgroundColor = "blue";
        } else if (event.ctrlKey){
            td.style.backgroundColor = "white";
        }
    });

});



function limpiar(){
    for(i=0;i<=100;i++){
        for(j=0;j<=100;j++){
            document.querySelectorAll("td")[i*100+j].style.backgroundColor = "white";
    }
}}


btn[0].addEventListener("click", limpiar);


