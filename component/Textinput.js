import React from 'react'
import {  StyleSheet,TextInput, View  } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
 

export const Mytxt=(props)=>{

  
    return(
        <TextInput style = {styles.input}
                  underlineColorAndroid = "transparent"
                  placeholder ={props.placeholder} 
                  placeholderTextColor = "#bbbbbb"
                  autoCapitalize = "none"
                  secureTextEntry={props.secureTextEntry}
                  
        />

    )
    
}


export const Search=(props)=>{

  
    return(
        
        <View>
           <Icon  name="filter" size={30} color="#000"/>
                <TextInput style = {styles.searchbar}
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
        width:'70%',
        margin: 5,
        height: 40,
        top:190,
        color:'black',
        backgroundColor:'white',
        borderColor: '#fff',
        borderRadius:15,
        borderWidth: 1,
     },
     searchbar: {
        color:'#000',
        borderColor:'#fff',
        top:30,
        backgroundColor:'#fff',
        width:230,
        height:32,
        borderRadius:20,
        padding:10,
        fontWeight:'bold',
        fontSize:12
        
     },


})