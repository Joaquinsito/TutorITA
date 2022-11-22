<?php
    include '../db_connection.php';
    $conexion = OpenCon();

    if($_POST['action1'] == 'update'){
        echo "Dentro del update";
        echo $_POST["name"];
        $sql = "Update materias set nombreMateria = '{$_POST["name"]}' where idMateria = '{$_POST["idMateria"]}'";
        if($result = $conexion->query($sql)){
            CloseCon($conexion);
            echo json_encode(array('result'=>'ok', 'idUser'=> $_POST["idDocente"]));
            
        }
    }

?>