<?php
    include '../db_connection.php';
    $conexion = OpenCon();
    $idDocente = $_POST["idDocente"];
    $action = $_POST['action'];

    if($action == 'select'){
        $sql = "SELECT asesorias.idAsesoria, materias.idMateria, asesorias.fecha, asesorias.hora from asesorias INNER JOIN docentes ON asesorias.idDocenteAsesoria = docentes.idDocente INNER JOIN materias ON asesorias.idMateriaAsesoria = materias.idMateria where docentes.idDocente = '$idDocente';";

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