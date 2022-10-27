import React from "react";
import { Container, Center, Heading, Text, VStack, Box, FormControl, Input, Link, Button, HStack } from "native-base";
import axios from "axios";
import SelectList from 'react-native-dropdown-select-list'


const Register = () => {
    const [selected, setSelected] = React.useState("");
    const [formData, setFormData] = React.useState({});
    const [errors, setErrors] = React.useState({});
    let pattern = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
    )

    
    const data = [{key:'1',value:'TICS'},
                {key:'2',value:'IGE'}];


    return (
        <Center w="100%">
            <Box safeAreaTop>
                <Heading size="4xl">Tutor
                        <Text color="red.800">ITA</Text>
                </Heading>
                <Heading mt="1" _dark={{
                    color: "warmGray.200"
                }} color="coolGray.600" fontWeight="medium" size="xs">
                    Register to continue!
                </Heading>
            </Box>
            <Box safeArea px="1" py="8" w="90%" maxW="290">
                <VStack space={3} mt="5">
                    <FormControl>
                        <FormControl.Label>Email</FormControl.Label>
                        <Input />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Password</FormControl.Label>
                        <Input type="password" />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Name</FormControl.Label>
                        <Input/>
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Lastname</FormControl.Label>
                        <Input/>
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Control number</FormControl.Label>
                        <Input/>
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Major</FormControl.Label>
                        <SelectList setSelected={setSelected} data={data} placeholder="Select major" search={false}/>
                    </FormControl>
                    <Button mt="2" colorScheme="red">
                        Sign in
                    </Button>
                </VStack>
            </Box>
        </Center>
    )   
}

export default Register;
