<?php
namespace Models;
use lib;
use PDO;
use PDOException;

require config.php;

    class Contacto{
        private BaseDatos $conexion;
        private mixed $stmt;
        function __construct(
            private string|null $id= null,
            private string $nombre='',
            private string $apellidos='',
            private string $correo='',
            private string $direccion='',
            private string $telefono='',
            private string $fecha_nacimiento=''

        ){
            $this -> conexion = new BaseDatos();
        }
    }





?>