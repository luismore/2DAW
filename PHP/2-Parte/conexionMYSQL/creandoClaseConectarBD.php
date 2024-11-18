<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    require_once 'autoloader.php';
    use lib\Database;

    error_reporting(0);
    mysqli_report(MYSQLI_REPORT_OFF);

    $servername = "localhost";
    $database = "empresa";
    $username = "root";
    $password = "";

    $conexion = new Mysqli($servername, $username, $password, $database);
    ?>
</body>
</html>l