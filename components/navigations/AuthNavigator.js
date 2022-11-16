import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';


const Stack = createStackNavigator();
import LoginForm from '../auth/Login';
import Register from '../auth/Register';
import BottomTabNavigator from './BottomTabNavigator';
import DrawerNavigator from './DrawerNavigator';

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
    </Stack.Navigator>
  );
}

export default AuthNavigator;
