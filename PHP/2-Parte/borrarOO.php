<?php
$servername = "localhost";
$database = "empresa";
$username = "root";
$password = "";


$conexion = new Mysqli($servername, $username, $password, $database);

if (!$conexion) {
    die ("Fallo la conexion a la base datos ".$conexion->connect_error);
}

$sql = "DELETE FROM usuarios WHERE id = 1";
$delete = $conexion->query($sql);

if ($delete){
    echo 'Datos borrados correctamente';
} else{
    echo "Error: ".$conexion->connect_error;
}

?>