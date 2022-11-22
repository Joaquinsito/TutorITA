import {StyleSheet, FlatList, View, Alert,} from 'react-native';
import React, { useState, useEffect } from 'react';
import Docentes from '../Admin/Docentes'
import SelectList from 'react-native-dropdown-select-list';
import axios from "axios";
import { useNavigation } from '@react-navigation/native';
import { Container, Center, Heading, Text, VStack, Box, FormControl, Input, Link, Button, HStack, Image, ScrollView, Modal} from "native-base";



export default function DocentesAdmin ({data, navigation}){
    const [isLoading, setLoading] = useState(true);
    const [formData, setFormData] = useState({});
    const [listDocentes, setlistDocentes] = useState([]);
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
            'http://192.168.100.106:8888/tutorITA/api/api_admin/selectDocentes.php', 
            formDataforRequest,
            {Headers: {'Content-Type': 'multipart/form-data',
            "Access-Control-Allow-Origin": "*"},
            transformRequest: formData => formDataforRequest,}
        )
        setlistDocentes(response.data)
        console.log("data responseed", listDocentes);
      }

      getData()
      setLoading(false);
    },[isLoading]);




const renderItem = ({ item }) => (
    <View>
        <Docentes
        idDocente = {item.idDocente}
        nombreDocente = {item.nombreDocente}
        apellidoDocente = {item.apellidoDocente}
        idCarrera = {item.idCarreraDocente}
        emailDocente= {item.emailDocente}
        password = {item.PasswordDocente}
        />
    
    </View>
)

const addDocente = async () => {
    const formDataforRequest = new FormData()
    formDataforRequest.append("action", 'register');
    formDataforRequest.append("idDocente", formData.idDocente);
    formDataforRequest.append("name", formData.name);
    formDataforRequest.append("lastname", formData.lastname);
    formDataforRequest.append("email", formData.email);
    formDataforRequest.append("password", formData.password);
    formDataforRequest.append("major", selected)
    console.log("data for request", formDataforRequest);

    const answer =  await axios.post(
        'http://192.168.100.106:8888/tutorITA/api/api_docente/addDocente.php', 
        formDataforRequest,
        {Headers: {'Content-Type': 'multipart/form-data',
        "Access-Control-Allow-Origin": "*"},
        transformRequest: formData => formDataforRequest,}
    )
    if(answer){
        console.log("answer", answer);
        Alert.alert("Add", "Se agrego el usuario");
        setShowModal(false);
        navigate.replace('TabAdmin', { data: formData.idDocente});
       
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
                <FormControl.Label>Numero Control</FormControl.Label>
                    <Input onChangeText={value => setFormData({
                            ...formData,
                            idDocente: value
                        })}></Input>
                    <FormControl.Label>Name</FormControl.Label>
                    <Input onChangeText={value => setFormData({
                            ...formData,
                            name: value
                        })}></Input>
                    <FormControl.Label>Lastname</FormControl.Label>
                    <Input onChangeText={value => setFormData({
                            ...formData,
                            lastname: value
                        })}></Input>
                    <FormControl.Label>Email</FormControl.Label>
                    <Input onChangeText={value => setFormData({
                            ...formData,
                            email: value
                        })}></Input>
                    <FormControl.Label>Password</FormControl.Label>
                    <Input onChangeText={value => setFormData({
                            ...formData,
                            password: value
                        })}></Input>
                    <FormControl.Label>Major</FormControl.Label>
                    <SelectList setSelected={setSelected} data={dataCarreras} placeholder="Select major" onSelect={() => alert(selected)} search={false} />
                </FormControl>
                </Modal.Body>
                <Modal.Footer>
                    <Button.Group space={2}>
                        <Button backgroundColor="#1b396a" onPress={() => {
                            addDocente();
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
        data={listDocentes}
        renderItem={renderItem}
        keyExtractor={item => item.idDocente}
      />
    </View>
  )
};
