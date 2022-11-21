<?php
    include '../db_connection.php';
    $conexion = OpenCon();

    if($_POST['action1'] == 'update'){
        echo "Dentro del update";
        echo $_POST["name"];
        $sql = "Update alumnos set nombreAlumno = '{$_POST["name"]}', apellidoAlumno = '{$_POST["lastname"]}', emailAlumno = '{$_POST["email"]}' where noControl = '{$_POST["noControl"]}'";
        if($result = $conexion->query($sql)){
            CloseCon($conexion);
            echo json_encode(array('result'=>'ok', 'idUser'=> $_POST["noControl"]));
            
        }
    }

?>