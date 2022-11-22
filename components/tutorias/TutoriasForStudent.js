import {Alert, StyleSheet} from 'react-native';
import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, HStack, Avatar, Heading, Box, Image, Center, VStack, Button, Modal, FormControl, Input } from 'native-base';
import axios from "axios";
import { useNavigation } from '@react-navigation/native';


const ItemTutoria = (props) => {
    const [isLoading, setLoading] = useState(true);
    const [formData, setFormData] = useState({});
    const [user, setUser] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [update, setUpdate] = useState(false);
    const navigate = useNavigation();


    const joinAsesoria = async () => {
        const formDataforRequest = new FormData()
        formDataforRequest.append("noControl", props.idUser)
        formDataforRequest.append("action", 'register')
        formDataforRequest.append("idAsesoria", props.idAsesoria)

        console.log("data for send", formDataforRequest);
        const response = await axios.post(
            'http://172.16.2.116:8888/tutorITA/api/api_alumno/addAsesoriaAlumno.php',
                formDataforRequest,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        "Access-control-Allow-origin": "*"
                    },
                    transformRequest: formData => formDataforRequest,
                }
        ).then((response) => {
            console.log("data de response" ,response.data);
            Alert.alert("Add", "Se inscribio a la tutoria");
            setShowModal(false);
            navigate.replace('TabStudent', { data: response.data})
    })
    }

    if (showModal){
        return (
            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <Modal.Content maxWidth="400px">
                    <Modal.CloseButton />
                    <Modal.Header>Enroll Asesoria</Modal.Header>
                    <Modal.Body>
                        <Text>Estas seguro de que quieres unirte a la tutoria:</Text>
                        <Text>Docente: {props.nombreDocente}</Text>
                        <Text>Materia: {props.nombreMateria}</Text>
                        <Text>Fecha: {props.fecha}</Text>
                        <Text>Hora: {props.hora}</Text>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button.Group space={2}>
                            <Button backgroundColor="#1b396a" onPress={() => {
                                joinAsesoria();
                            }}>Join</Button>
                        </Button.Group>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        )
}



    let sAsesoria = ""
        if(props.statusAsesoria == 1){
            sAsesoria = "Open"
        }else if (props.statusAsesoria == 0){
            sAsesoria = "Close"
        }
return(
    <View style={styles.cardView}>
        <Text>
            Materia: {props.nombreMateria}
        </Text>
        <Text>
            Docente: {props.nombreDocente}
        </Text>
        <Text>
            Fecha: {props.fecha}
        </Text>
        <Text>
            Hora: {props.hora}
        </Text>
        <Text>
            Cupo: {props.cupoAsesoria}
        </Text>
        <Text>
            Estatus Asesoria: {sAsesoria}
        </Text>
        <Button 
            size="lg"
            backgroundColor="#1b396a"
            borderRadius={30}
            onPress={() => setShowModal(true)}>
        Join</Button>
    </View>
)
}

const styles = StyleSheet.create({
    cardView: {
        backgroundColor: "white",
        borderRadius: 20,
        marginVertical: 5,
        padding: 35,
        shadowColor: "#000",
        shadowOffset:{
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    }
});

export default ItemTutoria;