<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    
    $username = $_POST['username'];
    $password = $_POST['password'];

    $usuario_correcto = 'username';
    $contraseña_correcta = '1234';

    if ($username === $usuario_correcto && $password === $clave_correcta) {
        header('Location: bienvenida.php');
        exit();        
        } else {
            header('Location: error.php');
            exit();
        }

    ?>
</body>
</html>