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
        }
    });
});