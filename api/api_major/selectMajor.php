<?php
    include '../db_connection.php';
    $conexion = OpenCon();

    $action = $_POST['action'];
    if($action == 'select'){
        $sql = "Select * from carreras";

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