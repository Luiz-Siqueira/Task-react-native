import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { CheckBox,StyleSheet, Text, View,TextInput,TouchableOpacity,FlatList} from 'react-native';

import Lista from './pages/Lista';

export default function App() {

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'primeira nota',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28be',
      title: 'segunda nota',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bi',
      title: 'terceira nota',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bo',
      title: 'quarta nota',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.container_flex}>
      <TextInput style={styles.input}
          placeholder="Digite uma tarefa"
      />
      <TouchableOpacity style={styles.button_plus}
        onPress={()=>alert('Falta funcao de enviar')}
      >
        <Text style={styles.textButton}>+</Text>
      </TouchableOpacity>
      </View>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Lista style={styles.item} data={item}/>}
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
    borderColor:'#104E8B',
    fontSize:18
  },
  button_plus:{
    width:'20%',
    borderBottomRightRadius: 15,
    borderTopRightRadius:15,
    borderWidth:2,
    alignItems: 'center',
    borderColor:'#104E8B',
    justifyContent: 'center',
    backgroundColor:'#104E8B',
    
  },
  textButton:{
    fontSize:25,
    color:'white',
  },
  item:{
    width:400,
    height:60,
    backgroundColor:'gray',
    marginBottom:10,
    borderRadius:15,
  }

});
