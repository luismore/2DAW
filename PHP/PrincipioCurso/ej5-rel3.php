<?php
// Función que genera un número aleatorio de animales entre 20 y 30
function generarAnimales() {
    $numAnimales = rand(20, 30); // Número aleatorio de animales
    $animales = [];

    // Llenar el array con animales aleatorios del rango Unicode 128000 a 128060
    for ($i = 0; $i < $numAnimales; $i++) {
        $animales[] = mb_chr(rand(128000, 128060), 'UTF-8'); // Genera el carácter del animal
    }

    return $animales;
}

// Función que selecciona un animal al azar y lo elimina del array
function seleccionarYEliminarAnimal(&$animales) {
    $indiceAleatorio = array_rand($animales); // Selecciona un índice aleatorio del array
    $animalSeleccionado = $animales[$indiceAleatorio];
    unset($animales[$indiceAleatorio]); // Elimina el animal seleccionado del array

    return $animalSeleccionado;
}

// Función que elimina todas las ocurrencias de un animal en el grupo
function eliminarOcurrencias(&$animales, $animalSeleccionado) {
    $animales = array_filter($animales, function($animal) use ($animalSeleccionado) {
        return $animal !== $animalSeleccionado; // Filtra los animales diferentes al seleccionado
    });
}

// Mostrar el grupo de animales
function mostrarAnimales($animales) {
    foreach ($animales as $animal) {
        echo $animal . " ";
    }
    echo "\n";
}

// Inicio del programa
$grupoAnimales = generarAnimales();

echo "Grupo inicial de animales:\n";
mostrarAnimales($grupoAnimales);

// Selecciona un animal al azar y lo elimina del grupo
$animalAleatorio = seleccionarYEliminarAnimal($grupoAnimales);

echo "\nAnimal seleccionado al azar y eliminado: $animalAleatorio\n";

// Elimina todas las ocurrencias del animal seleccionado
eliminarOcurrencias($grupoAnimales, $animalAleatorio);

echo "\nGrupo de animales después de eliminar todas las ocurrencias de '$animalAleatorio':\n";
mostrarAnimales($grupoAnimales);

// Mostrar el número de animales restantes
echo "\nNúmero total de animales restantes: " . count($grupoAnimales) . "\n";
?>

