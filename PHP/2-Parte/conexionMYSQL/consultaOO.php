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
    while ($row = $query->fetch_assoc()) {
        echo $row['nombre'] . " " . $row['apellidos'] . "<br>";
}
$conexion->close();
} else{
    echo "No hay datos";
}

?>