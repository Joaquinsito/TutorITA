import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, HStack, Avatar, Heading, Box, Image, Center, VStack, Button, Flex, Divider, SafeAreaView } from 'native-base';
import SelectList from 'react-native-dropdown-select-list';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity,FlatList  } from 'react-native';
import axios from 'axios';

const Main = ({ data }) => {

    //DatePicker
    const imageURI = require('../../assets/img/calendar.png');
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [text, setText] = useState('');
    const [mode, setMode] = useState('date');

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false)
        setDate(currentDate);
        let tempDate = new Date(currentDate);
        let fDate = tempDate.getFullYear() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getDate();
        setText(fDate)
        //console.log(fDate)
    }

    const showMode = (date) => {
        setMode(date);
        setShow(true);
    }


    //selectlist
    const [selected, setSelected] = React.useState("");
    const [selected2, setSelected2] = React.useState("");
    const [selected3, setSelected3] = React.useState("");

    const subject = [
        { key: 'BIGD9', value: 'Big Data' },
        { key: 'CALC9', value: 'Calculo Integral' }
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
        { key: '12:00', value: '12:00' },
        { key: '13:00', value: '13:00' },
        { key: '14:00', value: '14:00' },
        { key: '15:00', value: '15:00' },
        { key: '16:00', value: '16:00' },
        { key: '17:00', value: '17:00' },
        { key: '18:00', value: '18:00' },
    ];

    return (
        <View >
            <Box alignItems="center">
                <Text p="8">Asesorias Disponibles</Text>
                <Text >Buscar</Text>
                <Flex direction="row" p={4}>
                    <Divider bg="amber.500" thickness="2" mx="2" orientation="vertical" />
                    <SelectList setSelected={setSelected} data={subject} placeholder="Subject" search={false} />
                    <Divider bg="emerald.500" thickness="2" mx="2" orientation="vertical" />
                    <SelectList setSelected={setSelected2} data={professor} placeholder="Professor" search={false} />
                    <Divider bg="emerald.500" thickness="2" mx="2" orientation="vertical" />
                    <SelectList setSelected={setSelected3} data={hour} placeholder="Hous" search={false} />
                    <Divider bg="amber.500" thickness="2" mx="2" orientation="vertical" />
                </Flex>
                <Center>
                    <TouchableOpacity onPress={() => showMode('date')}>
                        <Image shadow={2} source={imageURI}
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
                <Text >Materia Seleccionada: {selected}</Text>
                <Text >Professor: {selected2}</Text>
                <Text>Fecha: {text}</Text>
                <Text >Hora: {selected3}</Text>
                <Text p={5}>Asesoria Disponibles</Text>
            </Box >
        </View >
    )
}

export default Main;