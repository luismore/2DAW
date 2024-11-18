<?php
$servername = "localhost";
$database = "empresa";
$username = "root";
$password = "";



try{
    $conexion = new PDO("mysql:host=$servername;dbname=$database;charset=utf8", $username, $password);

    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "<h2>Conectado a la base de datos</h2>";

}catch (PDOException $e) {
    echo "Imposible conectar. Error: " . $e->getMessage();
}

$conexion = null;

?>