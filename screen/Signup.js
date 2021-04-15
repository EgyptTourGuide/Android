import React from 'react';
import { View , ImageBackground, Text,TouchableOpacity,StyleSheet} from 'react-native';
import { MyButton,MyButtonImage } from '../component/Button'
import { Input } from '../component/Textinput';
import {Logo} from '../component/Images'
import  { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { URL } from '../API/API'

        const Registerition=(props)=>{
          const [username, setUsername] = useState('')
          const [FullName,setFullName]=useState('');
          const [Email,setEmail]=useState('');
          const [Country,setCountry]=useState('');
          const [PhoneNumber,setPhoneNumber]=useState('');
          const [Password,setPassword]=useState('');
          const [ isRegistraionSuccess,setIsRegistraionSuccess ] = useState(false);

          let options = {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
          }

  const handelSubmitRegister= async()=>{
            if(!FullName){
               alert(('Please Fill FullName'));
               return;
            }
            if(!username){
               alert(('Please Fill username'));
               return;
            }
            if (!Email) {
              alert('Please fill Email');
              return;
            }
            if (!Country) {
              alert('Please fill Country');
              return;
            }
            if (!Password) {
              alert('Please fill Password');
              return;
            }
            if (!PhoneNumber) {
              alert('Please fill PhoneNumber');
              return;
            }
            try{
            
           const response = await fetch(`${URL}/signup`, {
                 ...options,
                body: JSON.stringify(dataRegisterSend),
              })

          if(response.status === 201){ 
             alert('Account Created')
          }else{
            let errors = await response.json()
            alert(errors.errors[0])
          }
        }catch(e){
          alert(e)
        }
  }

  const dataRegisterSend= {
    fullname: FullName,
    email: Email,
    country: Country,
    phone: PhoneNumber,
    password: Password,
    username
  };

  if(Registerition){
    return(
    
        <ImageBackground 
           source={require('../pic/sea.jpeg')} style={{flex:1, resizeMode:'cover',}}>
         <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <ScrollView contentContainerStyle={styles.scrollviewstyle} 
                showsVerticalScrollIndicator={false}> 

                  <Logo></Logo>
                  <Input placeholder = 'FullName' onChangeText={(FullName)=>setFullName(FullName)}/>
                  <Input placeholder = 'Username' onChangeText={(username)=>setUsername(username)}/>
                  <Input placeholder = 'Email'onChangeText={(Email)=>setEmail(Email)}  keyboardType='email-address'/>
                  <Input placeholder = 'Country' onChangeText={(Country)=>setCountry(Country)}/>
                  <Input placeholder = 'PhoneNumber'onChangeText={(PhoneNumber)=>setPhoneNumber(PhoneNumber)} keyboardType="numeric"/>
                  <Input placeholder = 'Password' onChangeText={(Password)=>setPassword(Password)}  secureTextEntry={true} />
                  <Input placeholder = 'Confirm Password'  onChangeText={(Password)=>setPassword(Password)} secureTextEntry={true}/>
                  <MyButton onPress={()=>handelSubmitRegister()}>Register</MyButton>
                  <MyButtonImage onPress={()=>alert('google')}>Google</MyButtonImage>
                  <TouchableOpacity onPress={()=>props.navigation.navigate('Login')}
                  style={{ margin:2,}} >
                      <Text style={{fontSize:15,fontWeight:'bold',color:'#000',}}>Don't have an account ?Sign up
                      </Text>
                  </TouchableOpacity> 
                </ScrollView>
                </View>
       </ImageBackground>
    )
  }
}
const styles = StyleSheet.create({
scrollviewstyle:{
  flex: 1,
  justifyContent:'center',
  alignItems:'center',
}
})

export default Registerition;




