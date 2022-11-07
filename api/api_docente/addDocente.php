<?php
    include '../db_connection.php';
    $conexion = OpenCon();
    $action = $_POST['action'];
    $idDocente = $_POST['idDocente'];
    $name = $_POST['name'];
    $lname = $_POST['lastname'];
    $major = (int)$_POST['major'];
    $password = $_POST['password'];
    $email = $_POST['email'];

    switch($major){
        case 1:
            $idMajor = "ITICS";
            break;
    }

    
    if($_POST['action'] == 'register'){
        $sql = "Insert into docentes (idDocente, nombreDocente, apellidoDocente, idCarreraDocente, passwordDocente, emailDocente)
         values ('$idDocente', '$name', '$lname', '$idMajor', '$password', '$email');";

        $result = $conexion->query($sql);
        if($result == 1){
            $sql2 = "Insert into users (idUser, typeUser) values ('$idDocente', 2);";
            $result2 = $conexion->query($sql2);

            if($result2 == 1){
                CloseCon($conexion);
                echo json_encode(array('result'=>'ok', 'idUser'=> $idDocente));
            }
        }
    }



?>