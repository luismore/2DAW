<?php

namespace lib;
use Mysqli;

class Database{
    private Mysqli $conexion;
    
    public function __construct(
        private string $servidor,
        private string $usuario,
        private string $pass,
        private string $baseDatos,
    ){
        $this->conexion = $this->conectar();
}
public function conectar():Mysqli{
    $conexion = new Mysqli ($this->servidor, $this->usuario, $this->pass, $this->baseDatos);
    if ($conexion->connect_error){
        die("Error de conexión: " . $conexion->connect_error);
    }
    return $conexion;
    }
}
?>