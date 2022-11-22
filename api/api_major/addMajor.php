<?php
    include '../db_connection.php';

    $conexion = OpenCon();
    $action = $_POST['action'];
    $name = $_POST['nameCarrera'];
    $idCarrera = $_POST['idCarrera'];

    
    if($_POST['action'] == 'register'){
        $sql = "Insert into carreras (idCarrera ,nombreCarrera)
         values ('$idCarrera', '$name');";
       

        if($result = $conexion->query($sql)){
                CloseCon($conexion);
                echo json_encode(array('result'=>'ok', 'idCarrera' => $idCarrera));
        }
    }



?>