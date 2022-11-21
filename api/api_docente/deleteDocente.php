<?php
    include '../db_connection.php';
    $conexion = OpenCon();
    $action = $_POST['action'];
    $idDocente = $_POST['idDocente'];
   
    
    if($_POST['action'] == 'delete'){
        $sql = "Delete from docentes where idDocente = '$idDocente';";

        $result = $conexion->query($sql);
        if($result == 1){
            $sql2 = "Delete from users where idUser = '$idDocente';";
            $result2 = $conexion->query($sql2);

            if($result2 == 1){
                CloseCon($conexion);
                echo json_encode(array('result'=>'ok'));
            }
        }
    }



?>