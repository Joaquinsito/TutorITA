<?php
    include '../db_connection.php';
    $conexion = OpenCon();

    if($_POST['action'] == 'select'){
        $sql = "Select * from alumnos";

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