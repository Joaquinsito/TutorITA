<?php
    include '../db_connection.php';
    $conexion = OpenCon();

    if($_POST['action'] == 'update'){
        $sql = "Update alumnos set nombreAlumno = '{$_POST["name"]}', apellidoAlumno = '{$_POST["lastname"]}', emailAlumno = '{$_POST["email"]}', passwordAlumno = '{$_POST["password"]}' where noControl = '{$_POST["noControl"]}'";
        if($result = $conexion->query($sql)){
            CloseCon($conexion);
            echo json_encode(array('result'=>'ok', 'idUser'=> $_POST["noControl"]));
            
        }
    }

?>