<?php
    include '../db_connection.php';

    $conexion = OpenCon();
    $action = $_POST['action'];
    $name = $_POST['nameMateria'];
    $major = (int)$_POST['major'];

    $idMateria = str_replace(' ', '', $name);
    $idMateria = strtoupper(substr($idMateria, $offset=0, $length = 4));
    $idMateria = $idMateria . strval(rand(1, 9));

    switch($major){
        case 1:
            $idMajor = "ITICS";
            break;
    }

    
    if($_POST['action'] == 'register'){
        $sql = "Insert into materias (idMateria,nombreMateria, idCarreraMateria)
         values ('$idMateria', '$name', '$idMajor');";
       

        if($result = $conexion->query($sql)){
                CloseCon($conexion);
                echo json_encode(array('result'=>'ok', 'nombreMateria' => $name));
        }
    }



?>