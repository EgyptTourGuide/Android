import React from 'react'
import {  Dimensions, StyleSheet,TextInput, View  } from 'react-native'
  
export const Input=(props)=>{

  
    return(
        <TextInput style = {styles.input}
                  onChangeText={props.onChangeText}
                  underlineColorAndroid = "transparent"
                  placeholder ={props.placeholder} 
                  placeholderTextColor = "#bbbbbb"
                  autoCapitalize = "none"
                  secureTextEntry={props.secureTextEntry}
                  keyboardType={props.keyboardType}
                  
        />

    )
    
}


export const Search=(props)=>{
  
    return(
        
        <View>
                <TextInput 
                    style = {styles.searchbar}
                    underlineColorAndroid = "transparent"
                    placeholder = "Search"
                    placeholderTextColor = "#000"
                    autoCapitalize = "none"         
                />
        </View>

    )
}

const styles = StyleSheet.create({

    input: {
        width: 250,
        margin: 5,
        height: 40,
        color:'black',
        backgroundColor:'white',
        borderColor: '#fff',
        borderRadius:15,
        borderWidth: 1,
     },
     searchbar: {
        color:'#000',
        borderColor:'#fff',
        backgroundColor:'#fff',
        width:230,
        height:32,
        borderRadius:20,
        padding:10,
        fontWeight:'bold',
        fontSize:12
        
     },
})