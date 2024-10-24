let a = parseInt(prompt("Introduce el coeficiente A"))
let b = parseInt(prompt("Introduce el coeficiente B"))
let c = parseInt(prompt("Introduce el coeficiente C"))

document.write("X puede ser: "+ (-b + Math.sqrt(b*b - 4 * a * c)/2 * a) + " o: "+ (-b - Math.sqrt(b*b - 4 * a * c)/2 * a));