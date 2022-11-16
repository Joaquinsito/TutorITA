import React from "react";
import { Center, Heading, Text, VStack, Box, FormControl, Input, Link, Button, HStack, Image, ScrollView } from "native-base";
import axios from "axios";


const LoginForm = ({ navigation }) => {
    const imageURI = require('../assets/icon.png');
    const [formData, setFormData] = React.useState({});
    const [errors, setErrors] = React.useState({});
    let pattern = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
    )




    const validate = () => {
        if (!formData.noControl) {
            setErrors({
                ...errors,
                name: 'Control number is required'
            });
            return false;
        } else if (formData.noControl.length < 8) {
            setErrors({
                ...errors,
                name: 'Control number is to short please verify'
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
        setErrors({})
        return true;
    };

    const onSubmit = async () => {
        setFormData({
            ...formData,
            action: 'login'
        })
        const formDataforRequest = new FormData()
        formDataforRequest.append("noControl", formData.noControl)
        formDataforRequest.append("password", formData.pass)
        formDataforRequest.append("action", formData.action)

        const response = await axios.post(
            'http://172.16.2.91:8888/tutorITA/api/login.php',
            formDataforRequest,
            {
                Headers: {
                    'Content-Type': 'multipart/form-data',
                    "Access-Control-Allow-Origin": "*"
                },
                transformRequest: formData => formDataforRequest,
            }
        )
        console.log('Object.keys', Object.keys(response.data).length)
        console.log('Object', response.data)

        if (Object.keys(response.data).length >= 1) {
            if (response.data[0].typeUser == 1)
                navigation.navigate('AlumnoMain', { noControl: response.data[0].idUser })
            else if (response.data[0].typeUser == 2)
                console.log("Profesor")
            else if (response.data[0].typeUser == 3)
                console.log("Administrador")
        } else {
            console.log('retry')
        }

    };

    return (
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
                        })} />
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
                        })} />
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
                        onPress={onSubmit}>
                        Sign in
                    </Button>
                    <HStack mt="6" justifyContent="center">
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
                </VStack>
            </Box>
        </Center>
    )
}

export default LoginForm;
