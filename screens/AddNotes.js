import { Text, StyleSheet, TouchableOpacity, View, TextInput, Keyboard } from 'react-native'
import React,{ useState, useEffect } from 'react'
import { firebase } from '../config'

const AddNotes=()=>{

    const [title,setTitle] = useState('');
    const [body, setBody] = useState('')

    const addNote=()=>{
        firebase.firestore().collection(firebase.auth().currentUser.uid).add({
            title:title,
            body:body
        })
    }

    


    return(
        <View>
            <View style={styles.container}>
                <TextInput 
                    placeholder='Title'
                    onChangeText={(x)=>{setTitle(x)}}
                    value={title}
                    multiline={true}
                    style={styles.input}
                />
                <TextInput 
                    placeholder='Take a Note...'
                    onChangeText={(x)=>{setBody(x)}}
                    value={body}
                    multiline={true}
                    style={styles.input}
                />
                <TouchableOpacity
                    onPress={()=>{addNote()}}
                    style={styles.button}
                >
                    <Text>Add</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      marginTop:100,
  
    },
    input:{
      paddingTop:20,
      paddingBottom:10,
      width:400,
      fontSize:20,
      borderBottomWidth:1,
      borderBottomColor:'#000',
      marginBottom:10,
      textAlign:'center',
      marginTop:25
    },
    button:{
      marginTop:50,
      height:70,
      width:250,
      backgroundColor:'#00e4d0',
      alignItems:'center',
      justifyContent:'center',
      borderRadius:50,
    }
  })





export default AddNotes