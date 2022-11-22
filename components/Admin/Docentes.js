
import {Alert, StyleSheet} from 'react-native';
import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, HStack, Avatar, Heading, Box, Image, Center, VStack, Button, Modal, FormControl, Input } from 'native-base';
import axios from "axios";
import { useNavigation } from '@react-navigation/native';
import StudentsAdmin from './StudentsAdmin';


const ItemDocente = (props, {navigation}) => {
    const [isLoading, setLoading] = useState(true);
    const [formData, setFormData] = useState({});
    const [user, setUser] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [update, setUpdate] = useState(false);
    const navigate = useNavigation();

    const updateDate = async () => {
        const formDataforRequest = new FormData()
        formDataforRequest.append("idDocente", props.idDocente)
        formDataforRequest.append("action1", 'update')
        formDataforRequest.append("name", formData.nameU)
        formDataforRequest.append("lastname", formData.lastnameU)
        formDataforRequest.append("email", formData.emailU)
        console.log("data for send", formDataforRequest);
        const response = await axios.post(
            'http://172.16.2.116:8888/tutorITA/api/api_docente/updateDocente.php',
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
            setFormData({ ...formData, action: 'select' })
            Alert.alert("Update", "Se actualizo el docente");
            setShowModal(false);
            navigate.replace('TabAdmin', { data: props.noControl})
    })

    }


    const deleteUser = async () => {
        const formDataforRequest = new FormData()
        formDataforRequest.append("idDocente", props.idDocente)
        formDataforRequest.append("action", 'delete')

        const response = await axios.post(
            'http://192.168.100.106:8888/tutorITA/api/api_docente/deleteDocente.php',
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
            Alert.alert("Update", "Se elimino el usuario");
            setShowModal(false);
            navigate.replace('TabAdmin', { data: props.noControl})
    })

    }



if (showModal){
        return (
            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <Modal.Content maxWidth="400px">
                    <Modal.CloseButton />
                    <Modal.Header>Edit Data</Modal.Header>
                    <Modal.Body>
                        <FormControl.Label>Name</FormControl.Label>
                        <Input onChangeText={value => setFormData({
                                ...formData,
                                nameU: value
                            })}>{props.nombreDocente}</Input>
                        <FormControl.Label>Lastname</FormControl.Label>
                        <Input onChangeText={value => setFormData({
                                ...formData,
                                lastnameU: value
                            })}>{props.apellidoDocente}</Input>
                        <FormControl.Label>Email</FormControl.Label>
                        <Input onChangeText={value => setFormData({
                                ...formData,
                                emailU: value
                            })}>{props.emailDocente}</Input>
                        <FormControl.Label>Password</FormControl.Label>
                        <Input onChangeText={value => setFormData({
                                ...formData,
                                passwordU: value
                            })}>{props.password}</Input>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button.Group space={2}>
                            <Button backgroundColor="#1b396a" onPress={() => {
                                updateDate();
                            }}>Save</Button>
                            <Button backgroundColor="#e63946" onPress={() => {
                                deleteUser();
                            }}>Delete</Button>
                        </Button.Group>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        )
}


return(
    <View style={styles.cardView}>
        <Text>
            idDocente: {props.idDocente}
        </Text>
        <Text>
            Nombre: {props.nombreDocente}
        </Text>
        <Text>
            Apellido: {props.apellidoDocente}
        </Text>
        <Text>
            idCarrera: {props.idCarrera}
        </Text>
        <Text>
            Email: {props.emailDocente}
        </Text>
        <Button 
            size="lg"
            backgroundColor="#1b396a"
            borderRadius={30}
            onPress={() => setShowModal(true)}>
        View</Button>
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

export default ItemDocente;