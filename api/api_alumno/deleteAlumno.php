<?php
    include '../db_connection.php';
    $idAlumno = $_POST["noControl"];
    $action = $_POST['action1'];
    $conexion = OpenCon();

    if($action == 'delete'){
        $sql = "delete FROM alumnos where noControl = '$idAlumno';";

        if($result = $conexion->query($sql)){
            
            $sql2 = "delete FROM users where idUser = '$idAlumno';";
            $result2 = $conexion->query($sql2);

            if($result2){
                CloseCon($conexion);
                echo json_encode(array("response" => "alumno eliminado"));
            }
        }
    }

?>