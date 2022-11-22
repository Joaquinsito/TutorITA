<?php
    include '../db_connection.php';
    $conexion = OpenCon();

    $idMateriaAsesoria = $_POST['idMateriaAsesoria'];
    $idDocente = $_POST['idDocente'];
    $hora = $_POST['hora'];
    $date = $_POST['date'];


    $action = $_POST['action'];
    if($action == 'select'){
        $sql = "SELECT `idMateriaAsesoria`, `statusAsesoria`, `cupoAsesoria`, `idDocenteAsesoria`, `fecha`, `hora` 
        FROM `asesorias` 
        WHERE idMateriaAsesoria = '$idMateriaAsesoria' OR idDocenteAsesoria = '$idDocente' OR fecha = '$date' OR hora = '$hora';";

        if($result = $conexion->query($sql)){
            for(
                $set = array();
                $row = $result->fetch_assoc();
                $set[] = $row
            );
            
            CloseCon($conexion);
            echo json_encode($set);
            
        }
    }

?>