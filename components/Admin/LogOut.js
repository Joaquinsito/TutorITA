import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';

const LogOut = ({ navigation }) => {
    const navigate = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
      }}>
      <Button onPress={() => navigate.navigate("Login")}>Log Out</Button>
    </View>
  );
};

export default LogOut;