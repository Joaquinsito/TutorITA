<?php
    include '../db_connection.php';
    $conexion = OpenCon();

    if($_POST['action'] == 'select'){
        $sql = "select asesorias.idAsesoria, materias.nombreMateria, asesorias.fecha, asesorias.hora, asesorias.cupoAsesoria, asesorias.statusAsesoria, docentes.nombreDocente from asesorias INNER JOIN docentes ON asesorias.idDocenteAsesoria = docentes.idDocente INNER JOIN materias ON asesorias.idMateriaAsesoria = materias.idMateria";

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