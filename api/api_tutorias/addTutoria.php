<?php
    include '../db_connection.php';

    $conexion = OpenCon();
    $action = $_POST['action'];
    $idMateriaAsesoria = $_POST['idMateriaAsesoria'];
    $statusAsesoria = $_POST['statusAsesoria'];
    $cupoAsesoria = $_POST['cupoAsesoria'];
    $idDocenteAsesoria = $_POST['idDocente'];
    $date = $_POST['date'];
    $hora = $_POST['hora'];
    
    date_default_timezone_set('America/Mexico_City');
    $actualdate = date('Y/m/d');

    if(strtotime($date) > strtotime($actualdate)){
        if($_POST['action'] == 'register'){
            $sql = "Insert into asesorias (idMateriaAsesoria, statusAsesoria, cupoAsesoria, idDocenteAsesoria, fecha, hora)
             values ('$idMateriaAsesoria', '$statusAsesoria', '$cupoAsesoria', '$idDocenteAsesoria', '$date', '$hora');";
            $result = $conexion->query($sql);
           
            if($result){
                $set = array();
                $row = array('idUser'=> $idDocenteAsesoria, 'typeUser' => '2');
                $set[] = $row;
                CloseCon($conexion);
                echo json_encode($set);
            }
        }
    }else{
        CloseCon($conexion);
        echo json_encode(array('result'=> 'no pasa validacion'));
    }
    
    



?>