<!DOCTYPE html>
<html>
<head>
</head>
<body  bgcolor='54cdc2'>
<h1>Boletín de notas</h1>

<?php
$notas = array(
    "Matemáticas" => array(3, 10, 7),
    "Lengua" => array(8, 5, 3),
    "Física" => array(7, 2, 1),
    "Latín" => array(4, 7, 8),
    "Inglés" => array(6, 2, 3)
);
function calcularMedia($array) {
    $suma = 0;
    foreach ($array as $nota) {
        $suma += $nota;
    }
    return $suma / count($array);
}
$medias = array();
foreach ($notas as $asignatura => $notasTrimestres) {
    $medias[$asignatura] = calcularMedia($notasTrimestres);
}
echo "<table border='2'>";
echo "<tr><th>Asignatura</th><th>Trimestre 1</th><th>Trimestre 2</th><th>Trimestre 3</th><th>Media</th></tr>";
foreach ($notas as $asignatura => $notasTrimestres) {
    echo "<tr><td>$asignatura</td>";
    foreach ($notasTrimestres as $nota) {
        echo "<td>$nota</td>";
    }
    echo "<td>" . number_format($medias[$asignatura], 1) . "</td></tr>";
}
echo "</table>";

$mediaTotal = 0;
foreach ($medias as $media) {
    $mediaTotal += $media;
}
$mediaTotal /= count($medias);

echo "<p>La media total es " . number_format($mediaTotal, 1) . "</p>";

?>
</body>
</html>