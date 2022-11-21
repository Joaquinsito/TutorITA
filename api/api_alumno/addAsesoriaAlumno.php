<?php
    include '../db_connection.php';

    $conexion = OpenCon();
    $action = $_POST['action'];
    $idAsesoria = $_POST['idAsesoria'];
    $idAlumno = $_POST['noControl'];
    
 
    if($_POST['action'] == 'register'){
        $sql = "Insert into asesoriasAlumnos(idAsesoria, idAlumno) values ('$idAsesoria', '$idAlumno');";
        $result = $conexion->query($sql);
        if($result){
                $comprobarSql = "Select cupoAsesoria from asesorias where idAsesoria = '$idAsesoria';";
                $cupoAsesoria = $conexion->query($comprobarSql);
                if ($cupoAsesoria = $conexion->query($comprobarSql)) {
                    for($i=0; $i<$cupoAsesoria->num_rows; $i++){
                        $fila = $cupoAsesoria->fetch_assoc();
                    }
                    $cupo = $fila['cupoAsesoria'];
                }
                if ($cupo > 0){
                    $cupo = $cupo - 1;
                    $sqlUpdate = "update asesorias set cupoAsesoria = '$cupo' where idAsesoria = '$idAsesoria';";
                    if($result2 = $conexion->query($sqlUpdate)){
                        CloseCon($conexion);
                        echo json_encode(array('result'=>'Alumno inscrito con exito'));
                    }
                }else{
                    echo json_encode(array('result' => 'Alumno no inscrito, no hay cupo'));
                }
                
               
        }
    }
?>