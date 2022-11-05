import React, { useEffect} from "react";
import { Container, Center, Heading, Text, VStack, Box, FormControl, Input, Link, Button, HStack } from "native-base";
import axios from "axios";


const AlumnoMain = ({route}) => {
    const [formData, setFormData] = React.useState({});
    const [user, setUser] = React.useState({});
    const {noControl} = route.params;
    

    useEffect(() => {
        setFormData({...formData,
            action: 'select'})
        const formDataforRequest = new FormData()
        formDataforRequest.append("noControl", '19150307')
        formDataforRequest.append("action", formData.action)

        const response =  axios.post(
            'http://192.168.100.106:8888/tutorITA/api/api_alumno/select.php', 
            formDataforRequest,
            {Headers: {'Content-Type': 'multipart/form-data',
              "Access-Control-Allow-Origin": "*"},
            transformRequest: formData => formDataforRequest,}
          ).then((response) => {
            console.log(response.data);
            // setUser({...user, 
            //     noControl: response.data[0].noControl,
            //     nombreAlumno: response.data[0].nombreAlumno,
            //     apellidoAlumno: response.data[0].apellidoAlumno,
            //     idCarreraAlumno: response.data[0].idCarrera,
            //     emailAlumno: response.data[0].emailAlumno})
          });
    },[])

    return(
        <Container>
            <Text>{user.noControl}</Text>
            <Text>{user.nombreAlumno}</Text>
            <Text>{user.apellidoAlumno}</Text>
            <Text>{user.idCarreraAlumno}</Text>
            <Text>{user.emailAlumno}</Text>
        </Container>
    )
}


export default AlumnoMain;