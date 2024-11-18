<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora Simple en PHP</title>
</head>
<body>
    <h1>Calculadora en PHP</h1>
    <form method="post" action="">
        <label for="num1">Número 1:</label>
        <input type="number" name="num1" step="any" required><br><br>
        
        <label for="num2">Número 2:</label>
        <input type="number" name="num2" step="any" required><br><br>
        
        <input type="submit" name="operacion" value="Sumar">
        <input type="submit" name="operacion" value="Restar">
        <input type="submit" name="operacion" value="Multiplicar">
        <input type="submit" name="operacion" value="Dividir">
    </form>

    <h2>Resultado:</h2>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $num1 = $_POST['num1'];
        $num2 = $_POST['num2'];
        $operacion = $_POST['operacion'];
        $resultado = '';

        if (is_numeric($num1) && is_numeric($num2)) {
            switch ($operacion) {
                case "Sumar":
                    $resultado = $num1 + $num2;
                    break;
                case "Restar":
                    $resultado = $num1 - $num2;
                    break;
                case "Multiplicar":
                    $resultado = $num1 * $num2;
                    break;
                case "Dividir":
                    if ($num2 != 0) {
                        $resultado = $num1 / $num2;
                    } else {
                        $resultado = "Error: División por cero no permitida";
                    }
                    break;
                default:
                    $resultado = "Operación no válida";
                    break;
            }
            echo "<p>El resultado de la operación es: <strong>$resultado</strong></p>";
        } else {
            echo "<p>Error: Introduce valores numéricos válidos.</p>";
        }
    }
    ?>
</body>
</html>
