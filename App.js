import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Profile from "./components/alumno/Profile";
import Main from "./components/alumno/Main";
import Asesorias from "./components/alumno/Asesorias";

const Tab = createBottomTabNavigator();
//const StackNav = createNativeStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator initialRouteName="Profile">
      <Tab.Screen name="profile" component={Profile} />
      <Tab.Screen name="main" component={Main} />
      <Tab.Screen name="asesorias" component={Asesorias} />
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </NativeBaseProvider>
  )
}

export default App;