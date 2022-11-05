<?php
    include 'db_connection.php';
    $conexion = OpenCon();

    if($_POST['action'] == 'login'){
        $sql = "Select noControl from alumnos where noControl = '{$_POST["noControl"]}' and passwordAlumno = '{$_POST["password"]}'";
        //#sql = "SELECT email FROM users where name = '" .$_POST["nickname"]. "' and password = '" .$_POST["password"]."'";

        if($result = $conexion->query($sql)){
            $sql2 = "Select * from users where idUser = '{$_POST["noControl"]}'";
            $result2 = $conexion->query($sql2);

            for(
                $set = array();
                $row = $result2->fetch_assoc();
                $set[] = $row
            );
            
            CloseCon($conexion);
            echo json_encode($set);
            
        }
    }

?>