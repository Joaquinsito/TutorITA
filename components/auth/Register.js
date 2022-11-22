import React from "react";
import { Container, Center, Heading, Text, VStack, Box, FormControl, Input, Link, Button, HStack, Image, ScrollView } from "native-base";
import axios from "axios";
import SelectList from 'react-native-dropdown-select-list';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Register = ({ navigation }) => {
    const imageURI = require('../../assets/icon.png');
    const [selected, setSelected] = React.useState("");
    const [formData, setFormData] = React.useState({});
    const [errors, setErrors] = React.useState({});
    let pattern = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
    )

    //constante de navegacion sin validacion
    const navigate = useNavigation();


    const validate = () => {
        if (!formData.name) {
            setErrors({
                ...errors,
                name: 'Name is required'
            });
            return false;
        } else if (formData.name.length < 3) {
            setErrors({
                ...errors,
                name: 'Name is to short'
            })
            return false;
        }

        if (!formData.pass || formData.pass.length < 8) {
            setErrors({
                ...errors,
                pass: 'Password is empty'
            })
            return false;
        }
        else if (!pattern.test(formData.pass)) {
            console.log('pass', formData.pass)
            setErrors({
                ...errors,
                pass: "Is"
            });
            return false;
        }
        if (!formData.lastname) {
            setErrors({
                ...errors,
                lastname: "Lastname is empty"
            });
        }
        if (!formData.email) {
            setErrors({
                ...errors,
                email: "Email is empty"
            });
        }
        if (!formData.controlNumber) {
            setErrors({
                ...errors,
                controlNumber: "Control number is empty"
            })
        } else if (formData.controlNumber.length > 8) {
            setErrors({
                ...errors,
                controlNumber: "Control number invalid"
            })
        }
        setErrors({})
        return true;
    };


    const data = [{ key: '1', value: 'TICS' },
    { key: '2', value: 'IGE' }];


    const onSubmit = async () => {
        validate() ? console.log('Submitted', formData) :
            setFormData({
                ...formData,
                action: 'register'
            })
        console.log('FormData', formData)
        const formDataforRequest = new FormData()
        formDataforRequest.append("controlNumber", formData.controlNumber)
        formDataforRequest.append("name", formData.name)
        formDataforRequest.append("lastname", formData.lastname)
        formDataforRequest.append("password", formData.pass)
        formDataforRequest.append("email", formData.email)
        formDataforRequest.append("major", selected)
        formDataforRequest.append("action", "register")
        console.log('FormDataRequest', formDataforRequest)


        const response = await axios.post(
            'http://172.16.2.116:8888/tutorITA/api/register.php',  //Si no encuentra el localhost, poner direccion de la maquina
            formDataforRequest,
            {
                Headers: {
                    'Content-Type': 'multipart/form-data',
                    "Access-Control-Allow-Origin": "*"
                },
                transformRequest: formData => formDataforRequest,
            }
        )
        console.log('typeof', typeof (response.data))
        console.log('Object.keys', Object.keys(response.data).length)
        console.log('Object', response.data)

        if (Object.keys(response.data).length >= 1) {
            Alert.alert("Update", "Se actualizo el usuario");
            navigation.navigate("Login");
        } else {
            alert("Hay un problema con tus datos verificalo")
        }
    }


    return (
        <ScrollView>
            <Center w="100%">
                <Image mt="9" shadow={2} source={imageURI} alt="Logo Tecnm" style={{ width: 100, height: 100 }} size="xl" borderRadius={20} />
                <Box>
                    <Text color="#1b396a" fontWeight="semibold" fontSize="2xl" style={{ textAlignVertical: "center", textAlign: "center", }}>TecNM{"\n"}Campus Aguascalientes</Text>
                </Box>
                <Text color="#1b396a" fontWeight="semibold" fontSize="15">Register</Text>
                <Box px="1" py="8" w="90%" maxW="290">
                    <VStack space={3} mt="5">
                        <FormControl isRequired isInvalid={'email' in errors}>
                            <FormControl.Label>Email</FormControl.Label>
                            <Input p={2} placeholder="example@mail.com" onChangeText={value => setFormData({
                                ...formData,
                                email: value
                            })} borderRadius={30} />
                            {'email' in errors ?
                                <FormControl.ErrorMessage>{errors.email}</FormControl.ErrorMessage> :
                                <FormControl.HelperText>
                                    Enter the email
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
                                    The password must have a min of 8, one Capital and One special character
                                </FormControl.HelperText>
                            }
                        </FormControl>
                        <FormControl isRequired isInvalid={'name' in errors}>
                            <FormControl.Label>Name</FormControl.Label>
                            <Input placeholder="Nombre" onChangeText={value => setFormData({
                                ...formData,
                                name: value
                            })} borderRadius={30} />
                            {'name' in errors ?
                                <FormControl.ErrorMessage>{errors.name}</FormControl.ErrorMessage> :
                                <FormControl.HelperText>
                                    Just your first name
                                </FormControl.HelperText>
                            }
                        </FormControl>
                        <FormControl isRequired isInvalid={'lastname' in errors}>
                            <FormControl.Label>Lastname</FormControl.Label>
                            <Input placeholder="Apellido" onChangeText={value => setFormData({
                                ...formData,
                                lastname: value
                            })} borderRadius={30} />
                            {'lastname' in errors ?
                                <FormControl.ErrorMessage>{errors.lastname}</FormControl.ErrorMessage> :
                                <FormControl.HelperText>
                                    Just yout lastname
                                </FormControl.HelperText>
                            }
                        </FormControl>
                        <FormControl isRequired isInvalid={'controlNumber' in errors}>
                            <FormControl.Label>Control number</FormControl.Label>
                            <Input placeholder="00000000" onChangeText={value => setFormData({
                                ...formData,
                                controlNumber: value
                            })} borderRadius={30} />
                            {'controlNumber' in errors ?
                                <FormControl.ErrorMessage>{errors.controlNumber}</FormControl.ErrorMessage> :
                                <FormControl.HelperText>
                                    Enter the controlNumber of your school
                                </FormControl.HelperText>
                            }
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Major</FormControl.Label>
                            <SelectList setSelected={setSelected} data={data} placeholder="Select major" onSelect={() => alert(selected)} search={false} />
                        </FormControl>
                        <Button 
                            mt="2"
                            size="lg"
                            backgroundColor="#1b396a"
                            borderRadius={30}
                            onPress={onSubmit} 
                            >  
                            Sign in
                        </Button>
                        <Link _text={{
                            color: "indigo.500",
                            fontWeight: "medium",
                            fontSize: "sm"
                        }} onPress={() => { navigation.navigate("Login") }}>
                            I have an account
                        </Link>
                    </VStack>
                </Box>
            </Center>
        </ScrollView>
    )
}

export default Register;
