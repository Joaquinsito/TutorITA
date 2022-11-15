import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Platform, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';



import CustomTabBar from '../CustomTabBar';
import CustomTabBarButton from '../CustomTabBarButton';

import Home from '../alumno/Home';
import Main from '../alumno/Main';
import Profile from '../alumno/Profile';



const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={({route}) => ({
        headerShown: true,
        headerTintColor:"white",headerTitleAlign:"center", headerStyle: {backgroundColor: "#1b396a",headerBackTitleVisible: false},

        tabBarShowLabel: true,
        tabBarInactiveTintColor: "#1b396a",
        tabBarActiveTintColor: "white",
        tabBarIcon: ({color, size, focused}) => {
          let iconName;

          if (route.name === "Home2") {
            iconName = focused ? 'ios-home-sharp' : 'ios-home-outline';
          } else if (route.name === "Profile2") {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === "Carrers2") {
            iconName = focused ? 'md-notifications-sharp' : 'md-notifications-outline';

          }

          return <Icon name={iconName} size={22} color={color} />;
        },
      })}>
      <Tab.Screen
        name={"Home"}
        component={Home}
        options={{
          tabBarButton: props => <CustomTabBarButton route="home" {...props} />,
        }}
      />
      <Tab.Screen
        name={"Profile"}
        component={Profile}
        options={{
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name={"Carrers"}
        component={Main}
        options={{
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    backgroundColor: "transparent",
    borderTopWidth: 0,
    bottom: 15,
    right: 10,
    left: 10,
    height: 92,
  },
});