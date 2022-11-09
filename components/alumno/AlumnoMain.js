import React, { useEffect, useState} from "react";
import { Container, Center, Heading, Text, Image } from "native-base";
import axios from "axios";


const AlumnoMain = ({route}) => {
    const imageURI = require('../../assets/logoanimado2.gif');
    const [isLoading, setLoading] = useState(true);
    const [formData, setFormData] = React.useState({});
    const [user, setUser] = React.useState({});
    const {noControl} = route.params;

    

    useEffect(() => {
        setTimeout(() => {
            setFormData({ ...formData, action: 'select' })
            const formDataforRequest = new FormData()
            formDataforRequest.append("noControl", noControl)
            formDataforRequest.append("action", formData.action)
            const response =  axios.post(
                    'http://192.168.50.12:80/Multiplataforma/TutorITA/api/api_alumno/select.php', 
                    formDataforRequest,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            "Access-control-Allow-origin": "*"
                        },
                        transformRequest: formData => formDataforRequest,
                    }
                ).then((response) => {
                    console.log(response.data);
                    setLoading(false);
                    setUser({...user, 
                        noControl: response.data[0].noControl,
                        nombreAlumno: response.data[0].nombreAlumno,
                        apellidoAlumno: response.data[0].apellidoAlumno,
                        idCarreraAlumno: response.data[0].idCarrera,
                        emailAlumno: response.data[0].emailAlumno});         
            })
            console.log('Object', response.data)
        }, 3000);
    },[isLoading]);

    if(isLoading){
        return(
            <Center>
                <Image 
            source={imageURI}
            style={{width: 100, height: 100, justifyContent: 'center'}}
            />
            </Center>
        )
    }


    return (
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