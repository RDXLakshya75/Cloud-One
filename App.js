import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React,{ useState, useEffect } from 'react';
import { firebase } from './config';

import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import Profile from "./screens/Profile";
import Header from "./components/Header";
import AddNotes from "./screens/AddNotes";
import TabNavigator from "./navigation/TabNavigator";

const Stack = createNativeStackNavigator();

function App(){
  const [init, setinit] = useState(true)
  const [user, setuser] = useState()

  //handle user state change
  function onAuthStateChanged(user){
    setuser(user);
    if(init) setinit(false)
  }

  useEffect(()=>{
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  },[])

  if(init) return null;

  if(!user){
    return (
      <Stack.Navigator>
        
        <Stack.Screen name="Login" component={LoginScreen} 
          options={{
            headerTitle:()=><Header name="Login" />,
            headerStyle: {
              borderBottomLeftRadius:50,
              borderBottomRightRadius:50,
              backgroundColor:'#00e4d0',
              shadowColor:'#000',
              elevation:25,
              height:150
            }
          }}
        />

        <Stack.Screen name="Register" component={RegisterScreen} 
          options={{
            headerTitle:()=><Header name="Register" />,
              headerStyle: {
              height:150,
              borderBottomLeftRadius:50,
              borderBottomRightRadius:50,
              backgroundColor:'#00e4d0',
              shadowColor:'#000',
              elevation:25,
              height:150
            }
          }}
        />
        <Stack.Screen name="Add-Notes" component={AddNotes} 
          options={{
            headerTitle:()=><Header name="Add Notes" />,
            headerStyle: {
              borderBottomLeftRadius:50,
              borderBottomRightRadius:50,
              backgroundColor:'#00e4d0',
              shadowColor:'#000',
              elevation:25,
              height:150
            }
          }}
        />
      </Stack.Navigator>
    )
  }

  return(
    <Stack.Navigator>
      <Stack.Screen name="TabNav" component={TabNavigator} 
          options={{
            headerTitle:()=><Header name="" />,
              headerStyle: {
              height:150,
              borderBottomLeftRadius:50,
              borderBottomRightRadius:50,
              backgroundColor:'#00e4d0',
              shadowColor:'#000',
              elevation:25
            }
          }}
        />

        
    </Stack.Navigator>
  )
}

export default ()=>{
  return(
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}