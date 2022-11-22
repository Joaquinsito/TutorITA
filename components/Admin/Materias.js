
import {Alert, StyleSheet} from 'react-native';
import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, HStack, Avatar, Heading, Box, Image, Center, VStack, Button, Modal, FormControl, Input } from 'native-base';
import axios from "axios";
import { useNavigation } from '@react-navigation/native';
import StudentsAdmin from './StudentsAdmin';


const ItemMateria = (props, {navigation}) => {
    const [isLoading, setLoading] = useState(true);
    const [formData, setFormData] = useState({});
    const [user, setUser] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [update, setUpdate] = useState(false);
    const navigate = useNavigation();

    const updateDate = async () => {
        const formDataforRequest = new FormData()
        formDataforRequest.append("idMateria", props.idMateria)
        formDataforRequest.append("action1", 'update')
        formDataforRequest.append("name", formData.nameU)
        console.log("data for send", formDataforRequest);
        const response = await axios.post(
            'http://192.168.100.106:8888/tutorITA/api/api_materia/updateMateria.php',
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
            Alert.alert("Update", "Se actualizo el la materia");
            setShowModal(false);
            navigate.replace('TabAdmin', { data: "1"})
    })

    }


    const deleteUser = async () => {
        const formDataforRequest = new FormData()
        formDataforRequest.append("idMateria", props.idMateria)
        formDataforRequest.append("action", 'delete')

        const response = await axios.post(
            'http://192.168.100.106:8888/tutorITA/api/api_materia/deleteMateria.php',
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
            Alert.alert("Update", "Se elimino la materia");
            setShowModal(false);
            navigate.replace('TabAdmin', { data: "1"})
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
                            })}>{props.nombreMateria}</Input>
                        <FormControl.Label>idCarrera</FormControl.Label>
                        <Input isDisabled>{props.idCarreraMateria}</Input>
                        <FormControl.Label>idMateria</FormControl.Label>
                        <Input isDisabled>{props.idMateria}</Input>
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
            idMateria: {props.idMateria}
        </Text>
        <Text>
            Nombre Materia: {props.nombreMateria}
        </Text>
        <Text>
            idCarrera: {props.idCarreraMateria}
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

export default ItemMateria;