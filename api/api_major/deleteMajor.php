<?php
    include '../db_connection.php';
    $idCarrera = $_POST["idCarrera"];
    $action = $_POST['action1'];
    $conexion = OpenCon();

    if($action == 'delete'){
        $sql = "delete FROM carreras where idCarrera = '$idCarrera';";

        if($result = $conexion->query($sql)){
            CloseCon($conexion);
            echo json_encode(array("response" => "major eliminado"));
            
        }
    }

?>