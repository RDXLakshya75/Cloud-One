import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createMaterialBottomTabNavigator();

import AddNotes from '../screens/AddNotes';
import Notes from '../screens/Notes';
import Profile from '../screens/Profile';


export default function TabNavigator(){
  return(
    <Tab.Navigator
    activeColor="white"
    inactiveColor="#d4d4d4">
    <Tab.Screen name="Add Notes" component={AddNotes} />
    <Tab.Screen name="Notes" component={Notes} />
    <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}