import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity} from 'react-native';

export default function App() {
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
    borderWidth:1,
    fontSize:18
  },
  button_plus:{
    width:'20%',
    borderBottomRightRadius: 15,
    borderTopRightRadius:15,
    borderWidth:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton:{
    fontSize:25
  },

});
