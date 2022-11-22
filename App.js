import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import { View, Text } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
//importacion de los componentes
import Asesorias from './components/alumno/Asesorias';
import Home from './components/alumno/Home'; 
import Profile from './components/alumno/Profile';

import LoginForm from './components/auth/Login';
import Register from './components/auth/Register';

import HomeProfessor from './components/Professor/HomeProfessor';
import MainProfessor from './components/Professor/MainProfessor';
import ProfileProfessor from './components/Professor/ProfileProfessor';

import StudentsAdmin from './components/Admin/StudentsAdmin';
import MateriasAdmin from './components/Admin/MateriasAdmin';
import CarreasAdmin from './components/Admin/CarrerasAdmin';
import DocentesAdmin from './components/Admin/DocentesAdmin';
import LogOut from './components/Admin/LogOut';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
//menu tab students
function TabStudent({ navigation, route }) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#449e9d"
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarColor: "#041C32",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      >
        {(props) => <Home {...props} data={route.params.data} />}
      </Tab.Screen>
      <Tab.Screen
        name="Asesorias"
        options={{
          tabBarColor: "#041C32",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={26} />
          ),
        }}
      >
        {(props) => <Asesorias {...props} data={route.params.data} />}
      </Tab.Screen>
      <Tab.Screen
        name="Profile"
        options={{
          tabBarColor: "#041C32",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      >
        {(props) => (
          <Profile
          {...props} data={route.params.data}
          />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );

}
//menu Tab del profesor
function TabProfessor({ navigator, route }) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#449e9d"
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarColor: "#041C32",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      >
        {(props) => <HomeProfessor {...props} data={route.params.data} />}
      </Tab.Screen>
      <Tab.Screen
        name="Asesorias"
        options={{
          tabBarColor: "#041C32",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={26} />
          ),
        }}
      >
        {(props) => <MainProfessor {...props} data={route.params.data} />}
      </Tab.Screen>
      <Tab.Screen
        name="Profile"
        options={{
          tabBarColor: "#041C32",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      >
        {(props) => (
          <ProfileProfessor
            {...props}
            {...props} data={route.params.data}
          />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );

}

//menu Tab del Administrador
function TabAdmin({ navigator, route }) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#449e9d"
    >
      <Tab.Screen
        name="Students"
        options={{
          tabBarColor: "#041C32",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="pac-man" color={color} size={26} />
          ),
        }}
      >
        {(props) => <StudentsAdmin {...props} data={route.params.data} />}
      </Tab.Screen>
      <Tab.Screen
        name="Teachers"
        options={{
          tabBarColor: "#041C32",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-heart" color={color} size={26} />
          ),
        }}
      >
        {(props) => <DocentesAdmin {...props} data={route.params.data} />}
      </Tab.Screen>
      <Tab.Screen
        name="Materias"
        options={{
          tabBarColor: "#041C32",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="clipboard" color={color} size={26} />
          ),
        }}
      >
        {(props) => <MateriasAdmin {...props} data={route.params.data} />}
      </Tab.Screen>
        <Tab.Screen
        name="Carreras"
        options={{
          tabBarColor: "#041C32",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="numeric" color={color} size={26} />
          ),
        }}
      >
        {(props) => <CarreasAdmin {...props} data={route.params.data} />}
      </Tab.Screen>
      <Tab.Screen
        name="Status"
        options={{
          tabBarColor: "#041C32",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="numeric" color={color} size={26} />
          ),
        }}
      >
        {(props) => <LogOut/>}
      </Tab.Screen>
      
    </Tab.Navigator>
  );

}

const App = () => {
  return (
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Login"
          >
            <Stack.Screen
              name="Login"
              component={LoginForm}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{
                title: "LearnApp",
              }}
            />
            <Stack.Screen
              name="TabStudent"
              component={TabStudent}
              options={{
                headerBackVisible: true,
              }}
            />
             <Stack.Screen
              name="TabProfessor"
              component={TabProfessor}
              options={{
                headerBackVisible: true,
              }}
            />
            <Stack.Screen
              name="TabAdmin"
              component={TabAdmin}
              options={{
                headerBackVisible: true,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
  );
};

export default App;