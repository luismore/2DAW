<?php
$servername = "localhost";
$database = "empresa";
$username = "root";
$password = "";


$conexion = new Mysqli($servername, $username, $password, $database);

if (!$conexion) {
    die ("Fallo la conexion a la base datos ".$conexion->connect_error);
}

$sql = "SELECT * FROM usuario";
$query = mysqli_query($conexion, $sql);

if (mysqli_num_rows($query) > 0) {
    while ($row = mysqli_fetch_array($query)) {
        echo $row['nombre'] . " " . $row['apellido'] . "<br>";
}
} else{
    echo "No hay datos";
}

?>