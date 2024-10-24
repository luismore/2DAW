let num = parseInt(prompt("Introduce un numero: "));

document.write("<table>")
for(i=0; i<=num; i++){
    document.write(
        "<tr>"+i+
        "<td>"+ Math.cos(num)+
        "</td></tr>"
    )
}
document.write("</table>");