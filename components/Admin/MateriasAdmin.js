import {StyleSheet, FlatList, View, Alert,} from 'react-native';
import React, { useState, useEffect } from 'react';
import Materias from '../Admin/Materias'
import SelectList from 'react-native-dropdown-select-list';
import axios from "axios";
import { useNavigation } from '@react-navigation/native';
import { Container, Center, Heading, Text, VStack, Box, FormControl, Input, Link, Button, HStack, Image, ScrollView, Modal} from "native-base";



export default function MateriasAdmin ({data, navigation}){
    const [isLoading, setLoading] = useState(true);
    const [formData, setFormData] = useState({});
    const [listMaterias, setlistMaterias] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selected, setSelected] = React.useState("");
    const navigate = useNavigation();
    


    const dataCarreras = [  
      { key: '1', value: 'TICS' },
      { key: '2', value: 'IGE' }];

  
  

  useEffect(() => {

      const formDataforRequest = new FormData()
      formDataforRequest.append("action", formData.action)

      const getData = async () => {
        setFormData({...formData,
          action: 'select'})
        
        const response =  await axios.post(
            'http://192.168.100.106:8888/tutorITA/api/api_materia/selectMaterias.php', 
            formDataforRequest,
            {Headers: {'Content-Type': 'multipart/form-data',
            "Access-Control-Allow-Origin": "*"},
            transformRequest: formData => formDataforRequest,}
        )
        setlistMaterias(response.data)
        console.log("data responseed", listMaterias);
      }

      getData()
      setLoading(false);
    },[isLoading]);




const renderItem = ({ item }) => (
    <View>
        <Materias
        idMateria = {item.idMateria}
        nombreMateria = {item.nombreMateria}
        idCarreraMateria = {item.idCarreraMateria}
        />
    </View>
)

const addMateria = async () => {
    const formDataforRequest = new FormData()
    formDataforRequest.append("action", 'register');
    formDataforRequest.append("nameMateria", formData.name);
    formDataforRequest.append("major", selected)

    console.log("data for request", formDataforRequest);

    const answer =  await axios.post(
        'http://192.168.100.106:8888/tutorITA/api/api_materia/addMateria.php', 
        formDataforRequest,
        {Headers: {'Content-Type': 'multipart/form-data',
        "Access-Control-Allow-Origin": "*"},
        transformRequest: formData => formDataforRequest,}
    )
    if(answer){
        console.log("answer", answer);
        Alert.alert("Add", "Se agrego la materia");
        setShowModal(false);
        navigate.replace('TabAdmin', { data: "1"});
       
    }
        
}

if(showModal){
    return (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <Modal.Content maxWidth="400px">
                <Modal.CloseButton />
                <Modal.Header>Edit Data</Modal.Header>
                <Modal.Body>
                <FormControl>
                    <FormControl.Label>Name Materia</FormControl.Label>
                    <Input onChangeText={value => setFormData({
                            ...formData,
                            name: value
                        })}></Input>
                    <FormControl.Label>Major</FormControl.Label>
                    <SelectList setSelected={setSelected} data={dataCarreras} placeholder="Select major" onSelect={() => alert(selected)} search={false} />
                </FormControl>
                </Modal.Body>
                <Modal.Footer>
                    <Button.Group space={2}>
                        <Button backgroundColor="#1b396a" onPress={() => {
                            addMateria();
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


  return (
    <View>
        <Button onPress={() => setShowModal(true)}>Add</Button>
      <FlatList
        style={{marginTop:15}}
        data={listMaterias}
        renderItem={renderItem}
        keyExtractor={item => item.idMateria}
      />
    </View>
  )
};
