import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,FlatList,Animated} from 'react-native';
import firebase from './services/firebaseConnection';
import Lista from './pages/Lista';

import Skeleto from './pages/skeleton';

export default function App() {

  const [valInput,setValInput] = useState();
  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(true);

  
  useEffect(() => {

    async function dados(){
        await firebase.database().ref('task').on('value',(snapshot) => {
          setData([]);
            snapshot.forEach((chilItem) => {
                let lista = {
                    key:chilItem.key,
                    text: chilItem.val().text,
                    checked: chilItem.val().checked
                }
                setData(oldArray => [lista,...oldArray])
            });
        })           
    }

    dados()
    console.log(data)

    let timer = setInterval(()=>{
      setLoading(false);
    }, 3000)
},[])


  async function sendInputList(){
    let listas = await firebase.database().ref('task')
    let chave = listas.push().key;
    await firebase.database().ref('task').child(chave).set({
      key:chave,
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

      <Skeleto visible={loading}>
      
      <FlatList
        data={data}
        renderItem={({item}) => <Lista style={styles.item}  data={item}/>}
        keyExtractor={item => item.key}
      />
      </Skeleto>
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
