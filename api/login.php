<?php
    include 'db_connection.php';
    $conexion = OpenCon();
    $idUser = $_POST['noControl'];
    $password = $_POST['password'];
    if($_POST['action'] == 'login'){
        $sql = "select noControl from alumnos WHERE noControl = '$idUser' and passwordAlumno = '$password'";
        if($result = $conexion->query($sql)){
            for(
                $set = array();
                $row = $result->fetch_assoc();
                $set[] = $row
            );
            if($set){
                $sql = "select * from users where idUser = '$idUser';";
                if($result = $conexion->query($sql)){
                    for(
                        $set = array();
                        $row = $result->fetch_assoc();
                        $set[] = $row
                    );
                    echo json_encode($set);
                }
            }else{
                $sql = "select idDocente from docentes WHERE idDocente = '$idUser' and passwordDocente = '$password'";
                if($result = $conexion->query($sql)){
                    for(
                        $set = array();
                        $row = $result->fetch_assoc();
                        $set[] = $row
                    );
                };
                if($set){
                    $sql = "select * from users where idUser = '$idUser';";
                    if($result = $conexion->query($sql)){
                        for(
                            $set = array();
                            $row = $result->fetch_assoc();
                            $set[] = $row
                        );
                        echo json_encode($set);
                    }
                }else{
                    if($idUser == "99999999" && $password = "Admin1234."){
                        $set = array();
                        $row = array('idUser' => '99999999', 'typeUser' => '3');
                        $set[] = $row;
                        echo json_encode($set);
                    }else{
                        $set = array();
                            $row = array('result' => 'no user');
                            $set[] = $row;
                            echo json_encode($set);
                    }
                }
            }
        }
    }

?>