import {StyleSheet, FlatList, View, Alert,} from 'react-native';
import React, { useState, useEffect } from 'react';
import Tutorias from '../tutorias/TutoriasForStudent'
import SelectList from 'react-native-dropdown-select-list';
import axios from "axios";
import { Container, Center, Heading, Text, VStack, Box, FormControl, Input, Link, Button, HStack, Image, ScrollView, Modal} from "native-base";


const Asesorias = ({ data }) => {
    const [isLoading, setLoading] = useState(true);
    const [formData, setFormData] = useState({});
    const [listAsesorias, setlistAsesorias] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selected, setSelected] = React.useState("");

    useEffect(() => {

        const formDataforRequest = new FormData()
        formDataforRequest.append("action", formData.action)
    
        const getData = async () => {
          setFormData({...formData,
            action: 'select'})
          
          const response =  await axios.post(
              'http://172.16.2.116:8888/tutorITA/api/api_tutorias/selectTutorias.php', 
              formDataforRequest,
              {Headers: {'Content-Type': 'multipart/form-data',
              "Access-Control-Allow-Origin": "*"},
              transformRequest: formData => formDataforRequest,}
          )
          setlistAsesorias(response.data)
          console.log("data responseed", listAsesorias);
        }
    
        getData()
        setLoading(false);
    },[isLoading]);

    const renderItem = ({ item }) => (
        <View>
            <Tutorias
                idAsesoria = {item.idAsesoria}
                nombreMateria = {item.nombreMateria}
                fecha = {item.fecha}
                hora = {item.hora}
                cupoAsesoria = {item.cupoAsesoria}
                statusAsesoria = {item.statusAsesoria}
                nombreDocente = {item.nombreDocente}
                idUser = {data[0].idUser}
            />
        
        </View>
    )
    


    return (
        <FlatList
        style={{marginTop:15}}
        data={listAsesorias}
        renderItem={renderItem}
        keyExtractor={item => item.idAsesoria}
        />
    )
}

export default Asesorias;