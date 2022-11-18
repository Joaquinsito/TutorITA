import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';


const Stack = createStackNavigator();
import LoginForm from '../auth/Login';
import Register from '../auth/Register';

import DrawerNavigator from './DrawerNavigator';
import DrawerProfessor from './DrawerProfessor';

import BottomTabNavigator from './BottomTabNavigator';
import TabProfessor from './TabProfessor';
import TabAdmin from './TabAdmin';

function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{}} initialRouteName={"Login"}>
      <Stack.Screen
        name={"Login"}
        component={LoginForm}
        options={{headerShown: false, headerTitleAlign:"center",headerTintColor:"white", headerStyle: {backgroundColor:"#1b396a"}}}
      />
      <Stack.Screen 
      name={"Register"} 
      component={Register} 
      options={() => ({headerShown: false,headerTintColor:"white",headerTitleAlign:"center", headerStyle: {backgroundColor: "#1b396a",headerBackTitleVisible: false}})}/>
      <Stack.Screen 
      name={"Home"} 
      component={DrawerNavigator}
      options={{headerShown: false}} //quitar titulo de componente
      /> 
      <Stack.Screen 
      name={"HomeProfessor"} 
      component={DrawerProfessor}
      options={{headerShown: false}} //quitar titulo de componente
      /> 
      <Stack.Screen 
      name={"HomeAdmin"} 
      component={TabAdmin}
      options={{headerShown: false}} //quitar titulo de componente
      /> 
    </Stack.Navigator>
    
  );
}

export default AuthNavigator;
