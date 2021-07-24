import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,FlatList} from 'react-native';
import firebase from './services/firebaseConnection';

import Lista from './pages/Lista';

export default function App() {

  const [valInput,setValInput] = useState();
  const [data,setData] = useState([]);



  async function sendInputList(){
    await firebase.database().ref('task').child(1).set({
      id:1,
      text:valInput,
      checked:false,
    })
  }


  return (
    <View style={styles.container}>
      <View style={styles.container_flex}>
      <TextInput style={styles.input}
          placeholder="Digite uma tarefa"
          onChangeText={(text)=>setValInput(text)}
          value={valInput}
      />
      <TouchableOpacity style={styles.button_plus}
        onPress={()=>sendInputList()}
      >
        <Text style={styles.textButton}>+</Text>
      </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => <Lista style={styles.item}  data={item}/>}
        keyExtractor={item => item.id}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  container_flex:{
    flexDirection:'row',
    padding:50
  },
  input: {
    height:60,
    width:'90%',
    padding:15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 15,
    borderWidth:2,
    borderColor:'#38A8E7',
    fontSize:18,
    borderRightWidth:0,
  },
  button_plus:{
    width:'20%',
    borderBottomRightRadius: 15,
    borderTopRightRadius:15,
    borderWidth:2,
    borderLeftWidth:0,
    alignItems: 'center',
    borderColor:'#38A8E7',
    justifyContent: 'center',
    backgroundColor:'#38A8E7',
    
  },
  textButton:{
    fontSize:25,
    color:'white',
  },

});
