<?php
$servername = "localhost";
$database = "empresa";
$username = "root";
$password = "";

error_reporting(0);
mysqli_report(MYSQLI_REPORT_OFF);

$conexion = new Mysqli($servername, $username, $password, $database);

if ($conexion->connect_error) {
    die ("Fallo la conexion a la base datos ".$conexion->connect_error);
}else {
    echo "<h2>Conectado a la base de datos</h2>";

    $conexion->close();
}

?>