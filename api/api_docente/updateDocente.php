<?php
    include '../db_connection.php';
    $conexion = OpenCon();

    if($_POST['action1'] == 'update'){
        echo "Dentro del update";
        echo $_POST["name"];
        $sql = "Update docentes set nombreDocente = '{$_POST["name"]}', apellidoDocente = '{$_POST["lastname"]}', emailDocente = '{$_POST["email"]}' where idDocente = '{$_POST["idDocente"]}'";
        if($result = $conexion->query($sql)){
            CloseCon($conexion);
            echo json_encode(array('result'=>'ok', 'idUser'=> $_POST["noControl"]));
            
        }
    }

?>