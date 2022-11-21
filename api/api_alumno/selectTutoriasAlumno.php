<?php
    include '../db_connection.php';
    $conexion = OpenCon();
    $idAlumno = $_POST["noControl"];
    $action = $_POST['action'];

    if($action == 'select'){
        $sql = "SELECT asesorias.idAsesoria, materias.nombreMateria, docentes.nombreDocente, asesorias.fecha, asesorias.hora, alumnos.nombreAlumno from asesorias INNER JOIN docentes ON asesorias.idDocenteAsesoria = docentes.idDocente INNER JOIN asesoriasAlumnos ON asesorias.idAsesoria = asesoriasAlumnos.idAsesoria INNER JOIN alumnos ON asesoriasAlumnos.idAlumno = alumnos.noControl INNER JOIN materias ON asesorias.idMateriaAsesoria = materias.idMateria where alumnos.noControl = '$idAlumno';";

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