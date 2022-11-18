import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Platform, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

import CustomTabBar from '../CustomTabBar';
import CustomTabBarButton from '../CustomTabBarButton';

import HomeProfessor from '../Professor/HomeProfessor';
import MainProfessor from '../Professor/MainProfessor';
import ProfileProfessor from '../Professor/ProfileProfessor';


const Tab = createBottomTabNavigator();

function TabProfessor() {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={({route}) => ({
        headerShown: false,
        
        tabBarShowLabel: true,
        tabBarInactiveTintColor: "#1b396a",
        tabBarActiveTintColor: "white",
        tabBarIcon: ({color, size, focused}) => {
          let iconName;

          if (route.name === "HomeProfesor") {
            iconName = focused ? 'ios-home-sharp' : 'ios-home-outline';
          } else if (route.name === "Profile") {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === "Carrers") {
            iconName = focused ? 'md-notifications-sharp' : 'md-notifications-outline';

          }

          return <Icon name={iconName} size={20} color={color} />;
        },
      })}>
      <Tab.Screen
        name={"Home"}
        component={HomeProfessor}
        options={{
          tabBarButton: props => <CustomTabBarButton route="home" {...props} />,
        }}
      />
      <Tab.Screen
        name={"Profile"}
        component={ProfileProfessor}
        options={{
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name={"Carrers"}
        component={MainProfessor}
        options={{
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default TabProfessor;

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