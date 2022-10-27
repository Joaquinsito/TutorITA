<?php
    function OpenCon(){
        $servidor = "127.0.0.1:8889";
        $usuario = "root";
        $bd = "multiplataforma";
        $password = "root";

        $conexion = mysqli_connect($servidor, 
                                    $usuario,
                                    $password,
                                    $bd)
        or die("Connect failed %s\n". $conexion->error);

        return $conexion;
        }
    OpenCon();
    function CloseCon($conexion){
        $conexion->close();
    }
?>