import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { CheckBox,StyleSheet, Text, View,TextInput,TouchableOpacity,FlatList} from 'react-native';


export default function Lista({data}) {


  return (
    <View style={styles.container}>
        
         <CheckBox
          // value={isSelected}
          // onValueChange={setSelection}
          style={styles.checkbox}
          tintColors={{ true: '#38A8E7' }}
        />
        <Text style={styles.item}>{data.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
  },
  item:{
    width:'85%',
    height:60,
    backgroundColor:'#38A8E7',
    marginBottom:10,
    borderRadius:15,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    textAlign:'center',
    textAlignVertical: "center",
    color:'white',
    fontWeight:'bold',
    fontSize:18,
  },
  checkbox:{
      alignSelf:'center',
      width:'5%',
      height:60,
      marginRight:20,
      marginBottom:10,

  }
});
