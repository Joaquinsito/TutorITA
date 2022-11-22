import React, { useState, useEffect } from 'react';
import { View, HStack, Avatar, Platform, Box, Text, Button, ScrollView, Stack, FormControl, Input, Image, Center, VStack, FlatList } from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';
import SelectList from 'react-native-dropdown-select-list';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Alert, } from 'react-native';
import axios from "axios";


const Asesorias = ({ navigation, data }) => {
    //DatePicker
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [text, setText] = useState('');
    const [mode, setMode] = useState('date');
    const idDocente = data[0].idUser;
    const doc = [data[0].idUser]

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
        { key: 'CALC9', value: 'Calculo Integral' }
    ];



    const hour = [
        { key: '07:00', value: '07:00' },
        { key: '08:00', value: '08:00' },
        { key: '09:00', value: '09:00' },
        { key: '10:00', value: '10:00' },
        { key: '11:00', value: '11:00' },
        { key: '12:00', value: '12:00' },
        { key: '13:00', value: '13:00' },
        { key: '14:00', value: '14:00' },
        { key: '15:00', value: '15:00' },
        { key: '16:00', value: '16:00' },
        { key: '17:00', value: '17:00' },
        { key: '18:00', value: '18:00' },
    ];

    const onSubmit = async () => {
        validate() ? console.log('Submitted', formData) :
            setFormData({
                ...formData,
                action: 'register'
            })
        //console.log('FormData', formData)
        const formDataforRequest = new FormData()
        formDataforRequest.append("idMateriaAsesoria", selected)
        formDataforRequest.append("statusAsesoria", 1)
        formDataforRequest.append("cupoAsesoria", formData.cupo)
        formDataforRequest.append("idDocente", idDocente)
        formDataforRequest.append("date", text)
        formDataforRequest.append("hora", selected3)
        formDataforRequest.append("action", "register")
        console.log('FormDataRequest', formDataforRequest)

        const response = await axios.post(
            'http://172.16.2.116:8888/tutorITA/api/api_tutorias/addTutoria.php',  //Si no encuentra el localhost, poner direccion de la maquina
            formDataforRequest,
            {
                Headers: {
                    'Content-Type': 'multipart/form-data',
                    "Access-Control-Allow-Origin": "*"
                },
                transformRequest: formData => formDataforRequest,
            }
        ).then((response) => {
            console.log(response.data);
            console.log('idUser ', response.data.idUser)
            Alert.alert("ADD", "Se agrego asesoria");
            navigate.replace('TabProfessor', { data: response.data })
         
        })
            
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
                                <FormControl.Label>Hour</FormControl.Label>
                                <SelectList setSelected={setSelected3} data={hour} placeholder="Select Hour" search={false} />
                            </FormControl>
                            <FormControl isRequired>
                                <FormControl.Label>Cupo</FormControl.Label>
                                <Input onChangeText={value => setFormData({
                                ...formData,
                                cupo: value
                            })}/>
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
                                Ofertar
                            </Button>
                        </VStack>
                    </Box>
                </Center>
            </View>
        </ScrollView>
    );
}

export default Asesorias;