import React from 'react'
import { TouchableOpacity, StyleSheet, Text, Image } from 'react-native'


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

const styles = StyleSheet.create({
    submitButton: {
        backgroundColor: '#16c79a',
        width:'70%',
        height: 40,
        padding: 10,
        margin: 10,
        top:180,
        borderRadius:15,
      },
       submitButtonText:{
          color: 'white',
          flex:1,
          alignSelf:'center',
          alignContent:'center',
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
        width:'70%',
        height: 40,
        padding: 10,
        margin: 40,
        borderRadius:15,
        top:140,
      },
})

