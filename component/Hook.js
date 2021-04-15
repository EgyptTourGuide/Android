
import React from 'react';
import {View,TextInput,Text,StyleSheet, Button} from 'react-native';
import  { useState } from 'react';

function HookTest(props) {
    const [name,setName] = useState({ fristName :'', Phone:'',Email:''})
    const { changeFirst, changePhone,changeEmail } = props
    
  const _onPress = ()=>{
       changeFirst(name.fristName)
       changePhone(name.Phone)
       changeEmail(name.Email)
    }
    return(
      <View style={{width:'100%'}}>
        <TextInput 
                    style = {styles.input}
                    placeholder ='Enter Name '
                    placeholderTextColor = "#bbbbbb"
                    value={name.fristName}
                    onChangeText={t=>setName({ ...name, fristName : t})}/>
          <TextInput 
                    style = {styles.input}
                    placeholder ='Enter phone '
                    placeholderTextColor = "#bbbbbb"
                    keyboardType="phone-pad"
                    value={name.Phone}
                    onChangeText={(t)=>setName( prevState=>({ ...prevState, Phone: t}) )} />
          <TextInput 
                    style = {styles.input}
                    placeholder ='Enter Email '
                    placeholderTextColor = "#bbbbbb"
                    keyboardType='email-address'
                    value={name.Email}
                    onChangeText={(t)=>setName( prevState=>({ ...prevState, Email: t}) )} />

                    <Button title="Enter" onPress={_onPress}></Button>
                
      </View>
    )
  }
  const styles = StyleSheet.create({

    input: {
        width:200,
        margin: 5,
        height: 40,
        color:'black',
        backgroundColor:'white',
        borderColor: '#000',
        borderRadius:15,
        borderWidth: 1,
     },
  })
  export default HookTest;