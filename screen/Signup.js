import React from 'react';
import { View , ImageBackground, Text,TouchableOpacity,StyleSheet, ActivityIndicator} from 'react-native';
import { MyButton,MyButtonImage } from '../component/Button'
import { Input } from '../component/Textinput';
import {Logo} from '../component/Images'
import  { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons'
import { URL } from '../API/API'
import { launchImageLibrary } from 'react-native-image-picker'
import axios from 'axios';
        const Registerition=(props)=>{
          const [username, setUsername] = useState('')
          const [FullName,setFullName]=useState('');
          const [loading, setLoading] = useState(false)
          const [Email,setEmail]=useState('');
          const [Country,setCountry]=useState('');
          const [PhoneNumber,setPhoneNumber]=useState('');
          const [Password,setPassword]=useState('');
          const [ pic, setPic ] = useState(null)
          const [ isRegistraionSuccess,setIsRegistraionSuccess ] = useState(false);

          let options = {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
          }


  const _onPress = ()=>{
     
    try{
      launchImageLibrary({mediaType: 'photo' } , response=>{
      console.warn('response = '+JSON.stringify(response))
      setPic({uri: response.uri, type: response.type, name: response.fileName})
    })
    
  }catch(e){
    console.warn(e)
  }
      
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
              setLoading(true)
            if(pic !== null){
                const fd = new FormData()
                fd.append('avatar', pic)
                fd.append('fullname', FullName)
                fd.append('email', Email)
                fd.append('country', Country)
                fd.append('phone', PhoneNumber)
                fd.append('password', Password)
                fd.append('username', username)

                const response = await axios.post(`${URL}/signup`, fd)
                if(response.status === 201){
                  alert('Account Created')
                  props.navigation.navigate('Login')
                }else{
                  let errors = await response.json()
                  alert(errors.errors[0])
                }
     
            }else{
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
        }
        }catch(e){
          alert(e)
          setLoading(false)
        }
        setLoading(false)
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
         <View style={{flex:1,justifyContent:'center',alignItems:'center',}}>
              <ScrollView contentContainerStyle={styles.scrollviewstyle} 
                showsVerticalScrollIndicator={false}> 

                  <Logo></Logo>
                  <TouchableOpacity onPress={_onPress} style={{backgroundColor: 'rgba(0,0,0,0.3)', borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginBottom: 12 ,borderWidth: 1, borderColor: 'white'}}>
                     <ImageBackground  resizeMode='cover' source={{uri: pic !== null && pic.uri}} style={{justifyContent: 'flex-end', alignContent: 'flex-end', width: 100, height: 100, borderRadius: 50}} imageStyle={{borderRadius: 50}}>
                        <View style={{borderWidth: 1, borderRadius: 35 / 2, justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-end' ,width: 35, height: 35, backgroundColor: 'white'}}>
                        <Icon name='camera-outline' size={25} color='black' />
                        </View>
                      </ImageBackground>
                  </TouchableOpacity>
                  <Input placeholder = 'FullName' onChangeText={(FullName)=>setFullName(FullName)}/>
                  <Input placeholder = 'Username' onChangeText={(username)=>setUsername(username)}/>
                  <Input placeholder = 'Email'onChangeText={(Email)=>setEmail(Email)}  keyboardType='email-address'/>
                  <Input placeholder = 'Country' onChangeText={(Country)=>setCountry(Country)}/>
                  <Input placeholder = 'PhoneNumber'onChangeText={(PhoneNumber)=>setPhoneNumber(PhoneNumber)} keyboardType="numeric"/>
                  <Input placeholder = 'Password' onChangeText={(Password)=>setPassword(Password)}  secureTextEntry={true} />
                  <Input placeholder = 'Confirm Password'  onChangeText={(Password)=>setPassword(Password)} secureTextEntry={true}/>
                  {loading ? <ActivityIndicator size={40} color='white' style={{marginTop: 15}} /> : (<View>
                  <MyButton onPress={()=>handelSubmitRegister()}>Register</MyButton>
                  <MyButtonImage onPress={()=>alert('google')}>Google</MyButtonImage>
                  <TouchableOpacity onPress={()=>props.navigation.navigate('Login')}
                  style={{ margin:2,}} >
                      <Text style={{fontSize:15,fontWeight:'bold',color:'#000',}}>Don't have an account ?Sign up
                      </Text>
                  </TouchableOpacity> 
                  </View>)}
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




