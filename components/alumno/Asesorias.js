import React, { useState, useEffect } from 'react';
import { View, HStack, Avatar, Platform, Box, Text, Button, ScrollView, Stack, FormControl, Input, Image, Center, VStack, FlatList } from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';
import SelectList from 'react-native-dropdown-select-list';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import axios from "axios";


const Asesorias = ({ route }) => {
    //DatePicker
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [text, setText] = useState('');
    const [mode, setMode] = useState('date');


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false)
        setDate(currentDate);
        let tempDate = new Date(currentDate);
        let fDate = tempDate.getFullYear() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getDate();
        setText(fDate)
        //console.log(fDate)
    }

    const showMode = (date) => {
        setMode(date);
        setShow(true);
    }
    //registro
    const [formData, setFormData] = React.useState({});
    const [selected, setSelected] = React.useState("");
    const [selected2, setSelected2] = React.useState("");
    const [selected3, setSelected3] = React.useState("");
    const [errors, setErrors] = React.useState({});

    const navigate = useNavigation();

    const validate = () => {
        if (!formData.selected) {
            setErrors({
                ...errors,
                selected: ' is required'
            });
            return false;
        }
        setErrors({})
        return true;
    }

    const subject = [
        { key: 'BIGD9', value: 'Big Data' },
        { key: 'CAL', value: 'Calculo Integral' }
    ];

    const professor = [
        { key: '90912990', value: 'Fernando Reyes' },
        { key: '18181818', value: 'Prueba' }
    ];

    const hour = [
        { key: '07:00', value: '07:00' },
        { key: '08:00', value: '08:00' },
        { key: '09:00', value: '09:00' },
        { key: '10:00', value: '10:00' },
        { key: '11:00', value: '11:00' },
        { key: '6', value: '12:00' },
        { key: '7', value: '13:00' },
        { key: '8', value: '14:00' },
        { key: '9', value: '15:00' },
        { key: '10', value: '16:00' },
        { key: '11', value: '17:00' },
        { key: '12', value: '18:00' },
    ];

    const onSubmit = async () => {
        validate() ? console.log('Submitted', formData) :
            setFormData({
                ...formData,
                action: 'register'
            })
        console.log('FormData', formData)
        const formDataforRequest = new FormData()
        formDataforRequest.append("idMateriaAsesoria", selected)
        formDataforRequest.append("statusAsesoria", 1)
        formDataforRequest.append("cupoAsesoria", 8)
        formDataforRequest.append("idDocenteAsesoria", selected2)
        formDataforRequest.append("fecha", text)
        formDataforRequest.append("hora", selected3)
        formDataforRequest.append("action", "register")
        console.log('FormDataRequest', formDataforRequest)


        const response = await axios.post(
            'http://192.168.50.12:80/Multiplataforma/TutorITA/api/api_tutorias/addTutoria.php',  //Si no encuentra el localhost, poner direccion de la maquina
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
    }


    return (
        <ScrollView w="100%" >
            <View >
                <Center w="100%">
                    <Text color="#1b396a" fontWeight="semibold" fontSize="20">Register Asesorias</Text>
                    <Box px="1" py="8" w="90%" maxW="290">
                        <VStack space={3} >
                            <FormControl isRequired>
                                <FormControl.Label>Subject</FormControl.Label>
                                <SelectList setSelected={setSelected} data={subject} placeholder="Select Subject" search={false} />
                            </FormControl>
                            <FormControl isRequired>
                                <FormControl.Label>Professor</FormControl.Label>
                                <SelectList setSelected={setSelected2} data={professor} placeholder="Select Professor" search={false} />
                            </FormControl>
                            <FormControl isRequired>
                                <FormControl.Label>Hour</FormControl.Label>
                                <SelectList setSelected={setSelected3} data={hour} placeholder="Select Hour" search={false} />
                            </FormControl>
                            <FormControl isRequired>
                                <FormControl.Label>Date</FormControl.Label>
                                <Text style={{ fontSize: 15 }} textAlign="center">{text}</Text>
                                <Center>
                                    <TouchableOpacity onPress={() => showMode('date')}>
                                        <Image shadow={2} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2773/2773319.png' }}
                                            alt="Logo Tecnm" style={{ width: 70, height: 70 }} size="xl" />
                                    </TouchableOpacity>
                                </Center>

                                {show && (
                                    <DateTimePicker
                                        testID='dateTimePicker'
                                        value={date}
                                        mode={mode}
                                        display='default'
                                        onChange={onChange}
                                    />
                                )}
                            </FormControl>
                            <Button
                                mt="2"
                                size="lg"
                                backgroundColor="#1b396a"
                                borderRadius={30}
                                onPress={onSubmit}
                            >
                                Register
                            </Button>
                        </VStack>
                    </Box>
                </Center>
            </View>
        </ScrollView>
    );
}

export default Asesorias;