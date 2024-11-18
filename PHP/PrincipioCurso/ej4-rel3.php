<?php
// Inicializar arrays
$valores = array();
$cuadrados = array();
$cubos = array();

// Generar 20 valores aleatorios entre 0 y 100
for ($i = 0; $i < 20; $i++) {
    $valores[$i] = rand(0, 100);
    // Calcular el cuadrado y el cubo
    $cuadrados[$i] = pow($valores[$i], 2);
    $cubos[$i] = pow($valores[$i], 3);
}

// Mostrar los arrays en tres columnas paralelas
echo "<table border='1' cellpadding='10'>";
echo "<tr><th>Valor</th><th>Cuadrado</th><th>Cubo</th></tr>";

for ($i = 0; $i < 20; $i++) {
    echo "<tr>";
    echo "<td>{$valores[$i]}</td>";
    echo "<td>{$cuadrados[$i]}</td>";
    echo "<td>{$cubos[$i]}</td>";
    echo "</tr>";
}

echo "</table>";
?>