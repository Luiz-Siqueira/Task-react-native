import React  from 'react';
import {StyleSheet , View} from 'react-native';

import Skeleton from "rn-skeleton-loader";


export default function Skeleto({ visible, children }) {


    if(visible){
        return (
            <View>
            <View style={styles.container}>
                <View style={styles.checkbox}>    
                <Skeleton loading={true}  height={30} width={1000}>
                </Skeleton>
                </View>
                <View style={styles.item}>
                <Skeleton loading={true}  height={100} width={1000} >
                <View style={styles.item}>
                </View>
                </Skeleton>
                </View>
            </View>

            <View style={styles.container}>
                <View style={styles.checkbox}>    
                <Skeleton loading={true}  height={30} width={1000}>
                </Skeleton>
                </View>
                <View style={styles.item}>
                <Skeleton loading={true}  height={100} width={1000} >
                <View style={styles.item}>
                </View>
                </Skeleton>
                </View>
            </View>

            <View style={styles.container}>
                <View style={styles.checkbox}>    
                <Skeleton loading={true}  height={30} width={1000}>
                </Skeleton>
                </View>
                <View style={styles.item}>
                <Skeleton loading={true}  height={100} width={1000} >
                <View style={styles.item}>
                </View>
                </Skeleton>
                </View>
            </View>

            <View style={styles.container}>
                <View style={styles.checkbox}>    
                <Skeleton loading={true}  height={30} width={1000}>
                </Skeleton>
                </View>
                <View style={styles.item}>
                <Skeleton loading={true}  height={100} width={1000} >
                <View style={styles.item}>
                </View>
                </Skeleton>
                </View>
            </View>

            <View style={styles.container}>
                <View style={styles.checkbox}>    
                <Skeleton loading={true}  height={30} width={1000}>
                </Skeleton>
                </View>
                <View style={styles.item}>
                <Skeleton loading={true}  height={100} width={1000} >
                <View style={styles.item}>
                </View>
                </Skeleton>
                </View>
            </View>

            </View>
        );
    }

    return(
        <>
        {children}
        </>
    );


  
}

const styles = StyleSheet.create({
  container: {
      width:'90%',
    flexDirection:'row',
    justifyContent:'center',
  },
  item:{
    width:'85%',
    height:60,
    backgroundColor:'#ECEFF1',
    marginBottom:10,
    borderRadius:15,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    justifyContent:'center',
    overflow:'hidden',
    
  },
  checkbox:{
      alignSelf:'center',
      width:'7%',
      height:30,
      marginRight:15,
      marginBottom:10,
      overflow:'hidden',
      borderRadius:5
  },


});
