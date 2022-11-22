<?php
    include '../db_connection.php';
    $conexion = OpenCon();
    $action = $_POST['action'];
    $idMateria = $_POST['idMateria'];
   
    
    if($_POST['action'] == 'delete'){
        $sql = "Delete from materias where idMateria = '$idMateria';";

        $result = $conexion->query($sql);
        if($result == 1){      
                CloseCon($conexion);
                echo json_encode(array('result'=>'ok'));
            
        }
    }



?>