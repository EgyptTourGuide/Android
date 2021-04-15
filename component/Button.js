import React from 'react'
import { TouchableOpacity, StyleSheet, Text, Image,View } from 'react-native'


export const MyButton =  (props)=>{
    return(
        <TouchableOpacity
            style = {[styles.submitButton, props.style]}
            onPress = {props.onPress}
        >
        <Text style = {styles.submitButtonText}>{props.children}</Text>
        </TouchableOpacity>
    )
}
export const MyButtonImage = (props)=>{
    return(
        <TouchableOpacity
           style = {styles.GooglesubmitButton}
           onPress = {props.onPress}
          >
          <Image source={require('../pic/google_PNG19635.png')} style={{width:32,height:20,}}></Image>
         <Text style = {styles.GoogleButtonText}> {props.children} </Text>
       </TouchableOpacity>
    )
}
 export const MainButton = (props) => {
    return (
      <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{props.children}</Text>
        </View>
      </TouchableOpacity>
    );
  };

const styles = StyleSheet.create({
    submitButton: {
        backgroundColor: '#16c79a',
        width:240,
        height: 40,
        marginVertical:5,
        borderRadius:15,
        justifyContent: 'center',
        alignItems: 'center',
        
      },
       submitButtonText:{
          color: 'white',
          fontSize :18,
          fontWeight:'bold'
       },
       GoogleButtonText:{
        color: '#000',
        alignSelf:'center',
        alignContent:'center',
        fontSize :19,
        fontWeight:'bold',
        bottom:21
       },
       GooglesubmitButton:{
        backgroundColor: '#fff',
        width:240,
        height: 40,
        padding: 10,
        marginVertical:5,
        borderRadius:15,
      },
      button: {
        backgroundColor: "#16c79a",
        borderRadius: 25,
        width:100,
        height:30, 
      },
      buttonText: {
        color: 'white',
        fontFamily: 'open-sans',
        fontSize: 15,
        textAlign:'center',
       
      }
    
})

