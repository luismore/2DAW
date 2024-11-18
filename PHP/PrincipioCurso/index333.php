<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hola Mundo</title>
</head>
<body>
<?php
$num1 = $_GET['num1'];
$num2 = $_GET['num2'];
$operacion = $_GET['operacion'];

function suma($num1, $num2) {
    return $num1 + $num2;
}

function resta($num1, $num2) {
    return $num1 - $num2;
}

function multiplicacion($num1, $num2) {
    return $num1 * $num2;
}

function division($num1, $num2) {
    if ($num2 != 0) {
        return $num1 / $num2;
    } else {
        return "Error: No se puede dividir por cero";
    }
}

switch ($operacion) {
    case 'suma':
        $resultado = suma($num1, $num2);
        break;
    case 'resta':
        $resultado = resta($num1, $num2);
        break;
    case 'multiplicacion':
        $resultado = multiplicacion($num1, $num2);
        break;
    case 'division':
        $resultado = division($num1, $num2);
        break;
    default:
        $resultado = "Error: Operación no válida";
        break;
}

echo "El resultado de la operación es: $resultado";
?>
</body>
</html>