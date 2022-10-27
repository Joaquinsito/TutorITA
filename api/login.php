<?php
    include 'db_connection.php';
    $conexion = OpenCon();

    if($_POST['action'] == 'login'){
        $sql = "Select controlNumber from users where name = '{$_POST["nickname"]}' and password = '{$_POST["password"]}'";
        //#sql = "SELECT email FROM users where name = '" .$_POST["nickname"]. "' and password = '" .$_POST["password"]."'";

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