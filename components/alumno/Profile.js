import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, HStack, Avatar, Heading, Box, Image, Center, VStack, Button, Modal, FormControl, Input } from 'native-base';
import axios from "axios";

export default function Profile ({ data, navigation }) {
    //const imageURI = require('../../assets/TecNM.png');
    const imageURI = require('../../assets/logoanimado2.gif');
    const [isLoading, setLoading] = useState(true);
    const [formData, setFormData] = React.useState({});
    const [user, setUser] = React.useState({});
    const [showModal, setShowModal] = useState(false);
    const [update, setUpdate] = useState(false);
    const noControl = data[0].idUser;

    useEffect(() => {
        setTimeout(() => {
            setFormData({ ...formData, action: 'select' })
            const formDataforRequest = new FormData()
            formDataforRequest.append("noControl", noControl)
            formDataforRequest.append("action", formData.action)
            const response = axios.post(
                'http://192.168.100.106:8888/tutorITA/api/api_alumno/select.php',
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
                setUser({
                    ...user,
                    noControl: response.data[0].noControl,
                    nombreAlumno: response.data[0].nombreAlumno,
                    apellidoAlumno: response.data[0].apellidoAlumno,
                    idCarreraAlumno: response.data[0].idCarrera,
                    emailAlumno: response.data[0].emailAlumno,
                    idCarrera: response.data[0].idCarrera
                });
            })
        }, 100);
    }, [isLoading]);

    if (isLoading) {
        return (
            <Center>
                <Image
                    accessibilityLabel="School Logo"
                    source={imageURI}
                    style={{ width: 100, height: 100, justifyContent: 'center' }}
                />
            </Center>
        )
    }

    const updateDate = async () => {
        const formDataforRequest = new FormData()
        formDataforRequest.append("noControl", data[0].idUser)
        formDataforRequest.append("action1", 'update')
        formDataforRequest.append("name", formData.nameU)
        formDataforRequest.append("lastname", formData.lastnameU)
        formDataforRequest.append("email", formData.emailU)
        console.log("data for send", formDataforRequest);
        const response = await axios.post(
            'http://192.168.100.106:8888/tutorITA/api/api_alumno/updateAlumno.php',
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
            const formDataforRequest = new FormData()
            formDataforRequest.append("noControl", noControl)
            formDataforRequest.append("action", formData.action)
            const respuesta =   axios.post(
                    'http://192.168.100.106:8888/tutorITA/api/api_alumno/select.php',
                    formDataforRequest,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            "Access-control-Allow-origin": "*"
                        },
                        transformRequest: formData => formDataforRequest,
                    }
                ).then((respuesta) => {
                    console.log("respuesta",respuesta.data);

                        setLoading(false);
                        setUser({
                            ...user,
                            noControl: respuesta.data[0].noControl,
                            nombreAlumno: respuesta.data[0].nombreAlumno,
                            apellidoAlumno: respuesta.data[0].apellidoAlumno,
                            idCarreraAlumno: respuesta.data[0].idCarrera,
                            emailAlumno: respuesta.data[0].emailAlumno,
                            idCarrera: respuesta.data[0].idCarrera
                        });
                    setShowModal(false);
                    setLoading(true);
                })

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
                            })}>{user.nombreAlumno}</Input>
                        <FormControl.Label>Lastname</FormControl.Label>
                        <Input onChangeText={value => setFormData({
                                ...formData,
                                lastnameU: value
                            })}>{user.apellidoAlumno}</Input>
                        <FormControl.Label>Email</FormControl.Label>
                        <Input onChangeText={value => setFormData({
                                ...formData,
                                emailU: value
                            })}>{user.emailAlumno}</Input>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button.Group space={2}>
                            <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                                setShowModal(false);
                            }}>Cancel</Button>
                            <Button onPress={() => {
                                updateDate();
                            }}>Save</Button>
                        </Button.Group>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        )
    }

    return (
        <ScrollView>
            <View>
                <Center w="100%">
                    <Box safeAreaTop>
                        <Center>
                            <VStack space={2} alignItems="center">
                                <Avatar bg="amber.500" accessibilityLabel="Student Image!" source={{
                                    uri: "https://pbs.twimg.com/media/EGPJ-LDXYAAik46?format=jpg&name=medium"
                                }} size="xl">
                                    NB
                                    <Avatar.Badge bg="green.500" />
                                </Avatar>
                            </VStack>
                        </Center>
                    </Box>
                </Center>

            </View>
            <View flex={1} px="3" p="10">
                <Box p="3" rounded="xl" backgroundColor="#ffffff">
                    <Text mt="2" fontSize="25" color="#1b396a" fontWeight="bold" textAlign="center">{"   "}My Profile</Text>
                    <Text fontSize="20" fontWeight="bold" mt="3" >
                        {"   "}Name :
                        <Text color="#1b396a" textAlign="left" fontSize="18" fontWeight="black"> {user.nombreAlumno}</Text>
                    </Text>
                    <Text fontSize="20" fontWeight="bold" borderTopWidth="1" mt="3">
                        {"   "}Last Name:
                        <Text color="#1b396a" textAlign="left" fontSize="18" fontWeight="black"> {user.apellidoAlumno}</Text>
                    </Text>
                    <Text fontSize="20" fontWeight="bold" borderTopWidth="1" mt="3" >
                        {"   "}Carreer:
                        <Text color="#1b396a" textAlign="left" fontSize="18" fontWeight="black"> {user.idCarrera}</Text>
                    </Text>
                    <Text fontSize="20" fontWeight="bold" borderTopWidth="1" mt="3" >
                        {"   "}No.Control:
                        <Text color="#1b396a" textAlign="left" fontSize="18" fontWeight="black"> {user.noControl}</Text>
                    </Text>
                    <Text fontSize="20" fontWeight="bold" borderTopWidth="1" mt="3" >
                        {"   "}Email:
                        <Text color="#1b396a" textAlign="left" fontSize="18" fontWeight="black" isTruncated> {user.emailAlumno}</Text>
                    </Text>
                    <Text fontSize="20" fontWeight="bold" borderTopWidth="1" mt="3" >
                        {"   "}Password:
                        <Text color="#1b396a" textAlign="left" fontSize="18" fontWeight="black"> **********</Text>
                    </Text>
                </Box>
                <View flex={1} px="20">
                    <Box Box p="3" rounded="xl">
                        <Button
                            size="lg"
                            backgroundColor="#1b396a"
                            borderRadius={30}
                            onPress={() => setShowModal(true)}>Edit</Button>
                    </Box>
                    <Box Box p="3" rounded="xl">
                        <Button
                            size="lg"
                            backgroundColor="#1b396a"
                            borderRadius={30}
                            onPress={() => navigation.navigate("Login")}>Log out</Button>
                    </Box>
                </View>
            </View>
        </ScrollView>
    );
}
