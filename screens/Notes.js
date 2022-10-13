import { Text, StyleSheet, TouchableOpacity, View, FlatList, TextInput, ActivityIndicator } from 'react-native'
import React,{ useState, useEffect } from 'react'
import { firebase } from '../config'

export default function Notes(){

    // const noteRef = firebase.firestore().collection(firebase.auth().currentUser.uid)


        const [loading, setLoading] = useState(true); // Set loading to true on component mount
        const [users, setUsers] = useState([]); // Initial empty array of users

        useEffect(() => {
            const subscriber = firebase.firestore()
              .collection(firebase.auth().currentUser.uid)
              .onSnapshot(querySnapshot => {
                const users = [];
          
                querySnapshot.forEach(documentSnapshot => {
                  users.push({
                    ...documentSnapshot.data(),
                    key: documentSnapshot.id,
                  });
                });
          
                setUsers(users);
                setLoading(false);
              });
          
            // Unsubscribe from events when no longer in use
            return () => subscriber();
          }, []);
      
        if (loading) {
          return <ActivityIndicator />;
        }

        return (
            <FlatList
              data={users}
              renderItem={({ item }) => (
                <View style={{ height: 50, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                  
                    <View style={styles.card}>
                        <Text>{item.title}</Text>
                        <Text>{item.body}</Text>
                  </View>
                </View>
              )}
            />
          );

}

const styles = StyleSheet.create({
    card:{
        backgroundColor:'#00e4d0',
        margin:25,
        padding:25,
        borderRadius:20
    }
})