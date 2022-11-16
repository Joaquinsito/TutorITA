
import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, Image, View, Dimensions, Text, TouchableOpacity, Box, Center } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from "axios";

const { width } = Dimensions.get('screen');
const imageURI = require('../assets/fondo.jpg');

const CustomDrawer = props => {


  //const imageURI = require('../../assets/TecNM.png');
  const imageURI = require('../assets/fondo.jpg');
  const [isLoading, setLoading] = useState(true);
  const [formData, setFormData] = React.useState({});
  const [user, setUser] = React.useState({});
  //const { noControl } = route.params;

  useEffect(() => {
    setTimeout(() => {
      setFormData({ ...formData, action: 'select' })
      const formDataforRequest = new FormData()
      formDataforRequest.append("noControl", "18150339")
      formDataforRequest.append("action", formData.action)
      const response = axios.post(
        'http://192.168.50.12:80/Multiplataforma/TutorITA/api/api_alumno/select.php',
        formDataforRequest,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            "Access-control-Allow-origin": "*"
          },
          transformRequest: formData => formDataforRequest,
        }
      ).then((response) => {
        console.log(response.data);
        setLoading(false);
        setUser({
          ...user,
          noControl: response.data[0].noControl
        });
      })
    }, 100);
  }, [isLoading]);


  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <ImageBackground source={imageURI} style={{ height: 140 }}>
          <Image source={{
            uri: "https://pbs.twimg.com/media/EGPJ-LDXYAAik46?format=jpg&name=medium"
          }} style={styles.userImg} />
        </ImageBackground>
        <View style={styles.drawerListWrapper}>
        <Text color="#1b396a" fontSize="18" fontWeight="bold" alignItems="center"> {user.noControl}</Text>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
        <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5,
              }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  userImg: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
    position: 'absolute',
    left: width / 2 - 110,
    bottom: -110 / 2,
    borderWidth: 4,
    borderColor: "white",
  },
  drawerListWrapper: {
    marginTop: 65,
  },
});
