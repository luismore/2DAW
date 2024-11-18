<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php


$filename = 'mi_archivo.txt';
$contenido = "Línea 1\nLínea 2\nLínea 3\n";
file_put_contents($filename, $contenido);

$file = fopen($filename, 'r');

if ($file) {
    while (($line = fgets($file)) !== false) {
        echo $line;
    }
    fclose($file); 
} else {
    echo "Error al abrir el archivo.";
}

$file = fopen($filename, 'a'); 
if ($file) {
    fwrite($file, "Nueva línea añadida\n");
    fclose($file); // Cierra el archivo
} else {
    echo "Error al abrir el archivo para escribir.";
}

$copiedFilename = 'mi_archivo_copia.txt';
copy($filename, $copiedFilename);

$newFilename = 'mi_archivo_renombrado.txt';
rename($filename, $newFilename);

unlink($newFilename);
?>
</body>
</html>

