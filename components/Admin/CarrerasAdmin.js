import {StyleSheet, FlatList, View, Alert,} from 'react-native';
import React, { useState, useEffect } from 'react';
import Carreras from '../Admin/Carreras'
import SelectList from 'react-native-dropdown-select-list';
import axios from "axios";
import { useNavigation } from '@react-navigation/native';
import { Container, Center, Heading, Text, VStack, Box, FormControl, Input, Link, Button, HStack, Image, ScrollView, Modal} from "native-base";



export default function CarrrasAdmin ({data}){
    const [isLoading, setLoading] = useState(true);
    const [formData, setFormData] = useState({});
    const [listMajor, setlistMajor] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigation();
  

  useEffect(() => {

    const formDataforRequest = new FormData()
    formDataforRequest.append("action", formData.action)

    const getData = async () => {
      setFormData({...formData,
        action: 'select'})
      
      const response =  await axios.post(
          'http://192.168.100.106:8888/tutorITA/api/api_major/selectMajor.php', 
          formDataforRequest,
          {Headers: {'Content-Type': 'multipart/form-data',
          "Access-Control-Allow-Origin": "*"},
          transformRequest: formData => formDataforRequest,}
      )
      setlistMajor(response.data)
      console.log("data responseed", listMajor);
    }

    getData()
    setLoading(false);
},[isLoading]);




const renderItem = ({ item }) => (
    <View>
        <Carreras
        idCarrera = {item.idCarrera}
        nombreCarrera = {item.nombreCarrera}
        />
    
    </View>
)

const addCarrera = async () => {
    const formDataforRequest = new FormData()
    formDataforRequest.append("action", 'register');
    formDataforRequest.append("idCarrera", formData.idCarrera);
    formDataforRequest.append("nameCarrera", formData.name);
    console.log("Data for request", formDataforRequest);
    const answer =  await axios.post(
        'http://192.168.100.106:8888/tutorITA/api/api_major/addMajor.php', 
        formDataforRequest,
        {Headers: {'Content-Type': 'multipart/form-data',
        "Access-Control-Allow-Origin": "*"},
        transformRequest: formData => formDataforRequest,}
    )
    if(answer){
        Alert.alert("Add", "Se agrego la carrera");
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
                <FormControl.Label>idCarrera</FormControl.Label>
                    <Input onChangeText={value => setFormData({
                            ...formData,
                            idCarrera: value
                        })}></Input>
                    <FormControl.Label>Name Materia</FormControl.Label>
                    <Input onChangeText={value => setFormData({
                            ...formData,
                            name: value
                        })}></Input>
                </FormControl>
                </Modal.Body>
                <Modal.Footer>
                    <Button.Group space={2}>
                        <Button backgroundColor="#1b396a" onPress={() => {
                            addCarrera();
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
        data={listMajor}
        renderItem={renderItem}
        keyExtractor={item => item.idCarrera}
      />
    </View>
  )
};
