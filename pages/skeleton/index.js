import { StatusBar } from 'expo-status-bar';
import React,{ useEffect} from 'react';
import {StyleSheet , View,Animated} from 'react-native';



export default function Skeleton({ visible, children }) {

const AnimatedValue = new Animated.Value(0);

useEffect(()=>{
    circleAnimated();


    return () => circleAnimated();
},[]);

const translateX = AnimatedValue.interpolate({
    inputRange:[0,1],
    outputRange:[-10,500]
});

const circleAnimated = ()=>{
        AnimatedValue.setValue(0)
        Animated.timing(AnimatedValue, {toValue: 1, duration: 350,useNativeDriver: false}).start( ()=>{
            setTimeout(()=>{
                circleAnimated()
            },1000)
            
        } )

}

    if(visible){
        return (
            <View style={styles.container}>
                <View style={styles.checkbox}>
                <Animated.View
                        style={{
                            width:'30%',
                            height:'100%',
                            opacity:0.3,
                            backgroundColor:'red',
                            transform:[{ translateX: translateX}]
                        }}
                    >
                    </Animated.View>
                </View>
                <View style={styles.item}>
                <Animated.View
                        style={{
                            width:'3%',
                            height:'100%',
                            opacity:0.3,
                            backgroundColor:'red',
                            transform:[{ translateX: translateX}]
                        }}
                    >
                    </Animated.View>
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
      backgroundColor:'#ECEFF1',
      overflow:'hidden',
  },


});
