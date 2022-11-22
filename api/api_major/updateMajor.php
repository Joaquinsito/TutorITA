<?php
    include '../db_connection.php';
    $conexion = OpenCon();

    if($_POST['action1'] == 'update'){
        echo "Dentro del update";
        echo $_POST["name"];
        $sql = "Update carreras set nombreCarrera = '{$_POST["name"]}' where idCarrera = '{$_POST["idCarrera"]}'";
        if($result = $conexion->query($sql)){
            CloseCon($conexion);
            echo json_encode(array('result'=>'ok', 'idUser'=> $_POST["idDocente"]));
            
        }
    }

?>