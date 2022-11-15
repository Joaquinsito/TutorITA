import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AuthNavigator from "./components/navigations/AuthNavigator";


export default function App() {

  const StackNav = createNativeStackNavigator();
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  )
}
