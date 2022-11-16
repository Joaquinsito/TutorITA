import React, { useEffect, useState} from "react";
<<<<<<< HEAD
import { Container, Center, Heading, Text, Image } from "native-base";
=======
import { Container, Center, Heading, Text, VStack, Box, FormControl, Input, Link, Button, HStack, Image, NativeBaseProvider } from "native-base";
>>>>>>> ea2027c920a163c2aecd6972ca0d7e5c55a7e35a
import axios from "axios";


const AlumnoMain = ({route}) => {
    const imageURI = require('../../assets/logoanimado2.gif');
    const [isLoading, setLoading] = useState(true);
    const [formData, setFormData] = React.useState({});
    const [user, setUser] = React.useState({});
   

    

    useEffect(() => {
<<<<<<< HEAD
        setTimeout(() => {
            setFormData({ ...formData, action: 'select' })
=======
            setFormData({...formData,
                action: 'select'})
>>>>>>> ea2027c920a163c2aecd6972ca0d7e5c55a7e35a
            const formDataforRequest = new FormData()
            formDataforRequest.append("noControl", noControl)
            formDataforRequest.append("action", formData.action)
<<<<<<< HEAD
            const response =  axios.post(
                    'http://192.168.50.12:80/Multiplataforma/TutorITA/api/api_alumno/select.php', 
=======
            const getData = async () => {
                const response =  await axios.post(
                    'http://172.16.2.91:8888/tutorITA/api/api_alumno/select.php', 
>>>>>>> ea2027c920a163c2aecd6972ca0d7e5c55a7e35a
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
<<<<<<< HEAD
            })
            console.log('Object', response.data)
        }, 3000);
=======
            }); 
            }
            getData()
        
>>>>>>> ea2027c920a163c2aecd6972ca0d7e5c55a7e35a
    },[isLoading]);

    // if(isLoading){
    //     return(
    //         <Center>
    //             <Image 
    //         source={imageURI}
    //         style={{width: 100, height: 100, justifyContent: 'center'}}
    //         />
    //         </Center>
    //     )
    // }


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


export default (route) => {
    return (
        <NativeBaseProvider>
            <Center>
                <AlumnoMain></AlumnoMain>
            </Center>
        </NativeBaseProvider>
    )
};