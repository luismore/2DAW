<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    $cadena = "hola";

    $s = strlen($cadena);

    for ( $i = ($s-1); $i >= 0; $i--){
        echo($cadena[$i]);
    };
    ?>
</body>
</html>