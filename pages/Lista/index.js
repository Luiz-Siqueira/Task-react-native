import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { CheckBox,StyleSheet, Text, View} from 'react-native';


export default function Lista({data}) {

const [isSelected,setisSelected] = useState(false);


function setSelection(){
  isSelected ? setisSelected(false) : setisSelected(true);
  // apagar item se entrar aqui
}



  return (
    <View style={styles.container}>
        
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
            tintColors={{ true: '#38A8E7' }}
          />
          <View style={styles.item}>
            <Text style={styles.textButton}>{data.text}</Text>
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    justifyContent:'center',
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
    justifyContent:'center',
  },
  checkbox:{
      alignSelf:'center',
      width:'5%',
      height:60,
      marginRight:15,
      marginBottom:10,
  },
  textButton:{
    textAlign:'left',
    color:'white',
    fontWeight:'bold',
    fontSize:18,
    paddingLeft:15
  }

});
