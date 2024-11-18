<?php
    $servername = "localhost";
    $database = "empresa";
    $username = "root";
    $password = "";
    

    try{
        $bd = new PDO("mysql:host=$servername;dbname=$database;charset=utf8", $username, $password);
        $bd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        try{
            $stmt  = $bd->query('SELECT * FROM usuarios');
            $stmt->setFetchMode(PDO::FETCH_ASSOC);

            foreach ($stmt->fetchAll() as $row) {
                echo $row['nombre'] . ' ' . $row['apellido'] . '<br>';
                }
        } catch (PDOException $e){
            echo "Error: " . $e->getMessage();
        }
    }catch (PDOException $e){
        echo "Error: " . $e->getMessage();
        
    }
?>