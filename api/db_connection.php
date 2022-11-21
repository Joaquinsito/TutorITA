<?php

    function OpenCon(){
        $dbhost = "localhost";
        $dbuser = "root";
        $dbpass = "root";
        $db = "tutorITA";
        $conn = new mysqli($dbhost, $dbuser, $dbpass, $db)
        or die("Connect failed: %s\n". $conn->error);
        return $conn;
    }

    OpenCon();
    function CloseCon($conn){
        $conn->close();
    }
?>