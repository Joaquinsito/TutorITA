import React, { useState } from "react";
import { Box, Text, Button, ScrollView, Stack, FormControl, Input, Image, Center, VStack, HStack, Link } from 'native-base';
import axios from "axios";
import { useNavigation } from '@react-navigation/native';
import { Alert, } from 'react-native';



const LoginForm = ({ navigation }) => {
    const imageURI = require('../../assets/icon.png');
    const [formData, setFormData] = React.useState({});
    const [errors, setErrors] = React.useState({});
    let pattern = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$^&*.,?]).+$"
    )


    const navigate = useNavigation();

    const validate = () => {
        if (formData.noControl == undefined) {
            setErrors({
                ...errors,
                noControl: 'Control number is required'
            });
            return false;
        } else if (formData.noControl.length < 8) {
            setErrors({
                ...errors,
                noControl: 'Control number is to short please verify'
            });
            return false;
        }
        if (!formData.pass || formData.pass.length < 8) {
            console.log('pass 1 if', formData.pass)
            setErrors({
                ...errors,
                pass: 'Password is requiered'
            });
            return false
        }
        else if (!pattern.test(formData.pass)) {
            console.log('pass', formData.pass)
            setErrors({
                ...errors,
                pass: 'is not valid'
            });
            return false

        }
        setErrors({})
        return true;
    };


    const onSubmit = async () => {
        validate() ? console.log('submitted', formData) :
            console.log('Validation Failed', errors)
        //console.log('FormData', formData)
        //console.log('Type', typeof (formData))
        //console.log('Pass')
        //setFormData({ ...formData, action: 'login' })
        setFormData({ ...formData, action: 'login' })
        //console.log('FormData', FormData)
        const formDataforRequest = new FormData()
        //console.log('Type', typeof (formDataforRequest))
        formDataforRequest.append('noControl', formData.noControl)
        formDataforRequest.append('password', formData.pass)
        formDataforRequest.append('action', formData.action)

        const response = await axios.post(
            'http://192.168.100.106:8888/tutorITA/api/login.php', 
            formDataforRequest,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    "Access-control-Allow-origin": "*"
                },
                transformRequest: formData => formDataforRequest,
            }
        ).then((response) => {
            console.log('Object', response.data)
            if (Object.keys(response.data).length >= 1) {
                if (response.data[0].typeUser == 1){
                    navigation.replace('TabStudent', { data: response.data ,noControl: response.data[0].idUser })
                } else if (response.data[0].typeUser == 2){
                    navigation.replace('TabProfessor', { data: response.data ,idDocente: response.data[0].idUser  })
                }   else if (response.data[0].typeUser == 3){
                    navigation.replace('TabAdmin', { data: response.data , idAdmin: response.data[0].idUser  })
                } else {
                    Alert.alert("Error", "Verifica tus datos");
                }
            }
        })

        

        
    }


    return (
        <ScrollView w="100%">
            <Center w="100%">
                <Image mt="9" shadow={2} source={imageURI} alt="Logo Tecnm" style={{ width: 100, height: 100 }} size="xl" borderRadius={20} />
                <Box>
                    <Text color="#1b396a" fontWeight="semibold" fontSize="2xl" style={{ textAlignVertical: "center", textAlign: "center", }}>TecNM{"\n"}Campus Aguascalientes</Text>
                </Box>
                <Text color="#1b396a" fontWeight="semibold" fontSize="15">Login</Text>
                <Box p="2" py="8" w="90%" maxW="290">
                    <VStack space={3} mt="5">
                        <FormControl isRequired isInvalid={'noControl' in errors}>
                            <FormControl.Label>Control number</FormControl.Label>
                            <Input p={2} placeholder="Ej: 19150000" onChangeText={value => setFormData({
                                ...formData,
                                noControl: value
                            })} borderRadius={30} />
                            {'noControl' in errors ?
                                <FormControl.ErrorMessage>{errors.noControl}</FormControl.ErrorMessage> :
                                <FormControl.HelperText>
                                    We'll keep this between us.
                                </FormControl.HelperText>
                            }
                        </FormControl>

                        <FormControl isRequired isInvalid={'pass' in errors}>
                            <FormControl.Label>Password</FormControl.Label>
                            <Input type="password" p={2} placeholder="Mora than 8 caracters" onChangeText={value => setFormData({
                                ...formData,
                                pass: value
                            })} borderRadius={30} />
                            {'pass' in errors ?
                                <FormControl.ErrorMessage>{errors.pass}</FormControl.ErrorMessage> :
                                <FormControl.HelperText>
                                    The password needs a upper case, special character, number and minimun of 8 characters
                                </FormControl.HelperText>
                            }
                        </FormControl>
                        <Button
                            mt="2"
                            size="lg"
                            backgroundColor="#1b396a"
                            borderRadius={30}
                            onPress={onSubmit}
                            //onPress={() => navigate.navigate("MyTabs")} //comentar despues
                        >
                            Sign in
                        </Button>
                    </VStack>
                    <HStack mt="1" justifyContent="center">
                        <Text fontSize="sm" color="coolGray.600" _dark={{
                            color: "warmGray.200"
                        }}>
                            I'm a new user.{" "}
                        </Text>
                        <Link _text={{
                            color: "indigo.500",
                            fontWeight: "medium",
                            fontSize: "sm"
                        }} onPress={() => { navigation.navigate("Register") }}>
                            Sign Up
                        </Link>
                    </HStack>
                </Box>
            </Center>
        </ScrollView>
    )
}

export default LoginForm;