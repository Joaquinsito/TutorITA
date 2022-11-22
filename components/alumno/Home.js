
import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, { useState, useEffect } from 'react';
import Tutorias from '../tutorias/Tutorias.js';
import axios from "axios";
import { Center, NativeBaseProvider } from 'native-base';



export default function Home ({data}){
  const [formData, setFormData] = useState({});
  const [listTutorias, setlistTutorias] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {

    const formDataforRequest = new FormData()
    formDataforRequest.append("noControl", data[0].idUser)
    formDataforRequest.append("action", formData.action)

    const getData = async () => {
      setFormData({...formData,
        action: 'select'})
      
      const response =  await axios.post(
          'http://172.16.2.116:8888/tutorITA/api/api_alumno/selectTutoriasAlumno.php', 
          formDataforRequest,
          {Headers: {'Content-Type': 'multipart/form-data',
          "Access-Control-Allow-Origin": "*"},
          transformRequest: formData => formDataforRequest,}
      )
      setlistTutorias(response.data)
      console.log("data responseed", listTutorias);
    }

    getData()
    setLoading(false);
},[isLoading]);




const renderItem = ({ item }) => (
    <Tutorias
      idAsesoria = {item.idAsesoria}
      nombreMateria = {item.nombreMateria}
      nombreDocente= {item.nombreDocente}
      fecha= {item.fecha}
      hora= {item.hora}
    />
)
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: "white",
      }}>
      <Text>Tutorias!</Text>
      <FlatList
        style={{marginTop:15}}
        data={listTutorias}
        renderItem={renderItem}
        keyExtractor={item => item.idAsesoria}
      />
    </View>
  )
}
