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
import Main from './components/alumno/Main';
import Profile from './components/alumno/Profile';

import LoginForm from './components/auth/Login';
import Register from './components/auth/Register';

import HomeProfessor from './components/Professor/HomeProfessor';
import MainProfessor from './components/Professor/MainProfessor';
import ProfileProfessor from './components/Professor/ProfileProfessor';

import ProfileAdmin from './components/Admin/ProfileAdmin';
import MainAdmin from './components/Admin/MainAdmin';
import HomeAdmin from './components/Admin/HomeAdmin';


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
          tabBarColor: "#1b396a",
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
          tabBarColor: "#1b396a",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={26} />
          ),
        }}
      >
        {(props) => <Asesorias {...props} data={route.params.data} />}
      </Tab.Screen>
      <Tab.Screen
        name="Main"
        options={{
          tabBarColor: "#1b396a",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bookshelf" color={color} size={26} />
          ),
        }}
      >
        {(props) => <Main {...props} data={route.params.data}/>}
      </Tab.Screen>
      <Tab.Screen
        name="Profile"
        options={{
          tabBarColor: "#1b396a",
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
          tabBarColor: "#1b396a",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      >
        {(props) => <HomeProfessor {...props} data={route.HomeProfessor} />}
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
        {(props) => <MainProfessor {...props} data={route.MainProfessor} />}
      </Tab.Screen>
      <Tab.Screen
        name="Main"
        options={{
          tabBarColor: "#041C32",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bookshelf" color={color} size={26} />
          ),
        }}
      >
        {(props) => <ProfileProfessor {...props} data={route.ProfileProfessor} />}
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
            data={route.params.noControl}
            noControl = {route.params.noControl}
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
        name="Home"
        options={{
          tabBarColor: "#041C32",
          header: false, 
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      >
        {(props) => <HomeAdmin {...props} data={route.HomeAdmin} />}
      </Tab.Screen>
      <Tab.Screen
        name="Asesorias"
        options={{
          tabBarColor: "#041C32",
          headerShown: false, 
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={26} />
          ),
        }}
      >
        {(props) => <MainAdmin {...props} data={route.MainAdmin} />}
      </Tab.Screen>
      <Tab.Screen
        name="Main"
        options={{
          tabBarColor: "#041C32",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bookshelf" color={color} size={26} />
          ),
        }}
      >
        {(props) => <ProfileAdmin {...props} data={route.ProfileAdmin} />}
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
          <ProfileAdmin
            {...props}
            data={route.params.noControl}
            noControl = {route.params.noControl}
          />
        )}
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
              //component={LoginForm}
              component={Asesorias}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{
                title: "Register",
                headerShown: true
              }}
            />
            <Stack.Screen
              name="TabStudent"
              component={TabStudent}
              options={{
                headerBackVisible: false
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