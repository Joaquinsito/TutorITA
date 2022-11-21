<?php
    include '../db_connection.php';
    $conexion = OpenCon();

    $idDocente = $_POST['idDocente'];
    $action = $_POST['action'];
    if($action == 'select'){
        $sql = "Select * from docentes where idDocente = '$idDocente'";

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