<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
    $pais = "México";
    $habitantes = 128932753;
    $continente = "América";

    echo "País: $pais <br>";
    echo "Tipo de dato de 'pais': " . gettype($pais) . "<br>";

    echo "Habitantes: $habitantes <br>";
    echo "Tipo de dato de 'habitantes': " . gettype($habitantes) . "<br>";

    echo "Continente: $continente <br>";
    echo "Tipo de dato de 'continente': " . gettype($continente) . "<br>";
?>
</body>
</html>