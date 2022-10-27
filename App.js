import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";

export default function App() {

  const StackNav = createNativeStackNavigator();
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StackNav.Navigator>
              <StackNav.Screen name="Login" component={Login}/>
              <StackNav.Screen name="Register" component={Register}/>
          </StackNav.Navigator> 
        </NavigationContainer>
    </NativeBaseProvider>
  )
}
