<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
if(isset($_POST["borrarcookie"])){
    setcookie("visitas", "", time()-3600);
    header("Location: index.php");
    exit;
}

if(isset($_POST["recargar"])){
    header("Location: index.php");
    exit;
}

if(!isset($_COOKIE["visitas"])) {
    $visitas = array();
    setcookie("visitas", serialize($visitas), time()+3600);
} else {
    $visitas = unserialize($_COOKIE["visitas"]);
}

$visitas[] = date("Y-m-d H:i:s");

setcookie("visitas", serialize($visitas), time()+3600);

echo "Usted ha visitado esta página ".count($visitas)." veces.<br>";
echo "Las últimas veces que nos visitó fue en:<br>";
for($i=count($visitas)-1; $i>=0; $i--){
    echo $visitas[$i]."<br>";
}

?>
<form method="post">
    <input type="submit" name="borrarcookie" value="Borrar cookie">
    <input type="submit" name="recargar" value="Recargar página">
</form>
?>
</body>
</html>