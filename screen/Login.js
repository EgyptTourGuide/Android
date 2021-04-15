import React, { useContext, useEffect } from 'react';
import { StyleSheet, View , ImageBackground, Text, TouchableOpacity, SafeAreaView, Dimensions, ActivityIndicator} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { MyButton, MyButtonImage} from '../component/Button'
import { Input } from '../component/Textinput'
import { Logo } from "../component/Images"
import { useState } from 'react';
import { AuthContext } from '../Auth/AuthProvider'
import { URL } from '../API/API'
import { ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'react-native-vector-icons'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Login=(props)=>
{


  const context = useContext(AuthContext)
  const [username,setusername]=useState('');
  const [Password,setPassword]=useState('');
  const [loading, setLoading] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  
  
  const handelSubmitLogin= async()=>{
   
    setLoading(true)

    if (!username) {
      alert('Please fill Username');
      setLoading(false)
      return;
    }
    if (!Password) {
      alert('Please fill Password');
      setLoading(false)
      return;
    }
    const dataRegisterSend= {
      username: username,
      password: Password,
    };

    const options = {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataRegisterSend),
    }
    try{
      const response = await fetch(`${URL}/login`, options)
      const result =  await response.json()
      if(response.status === 200){
        context.saveUser(result)
      }else{
        console.warn(result)
      }
    }catch(err){
      console.log(err)
    }

    setLoading(false)

  }

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  
    return (
      
        <ImageBackground
            source= { require('../pic/spencer-davis.jpg')}
            style={styles.image} >
           
              <LinearGradient
                  colors={['rgba(0,0,0,0)','rgba(0,0,0,7)','rgba(0,0,0,1)']}
                  style={styles.linearGradient}
                  start={{ x : 1 , y : 0.12 }} 
                  end={{ x : 1 , y : 0.99 }}
                  >
                    
                      <View style={styles.container}>
                     
                           <View style={{alignItems:'center'}}><Logo></Logo></View> 
                              <Text style={styles.txt}>Sign In</Text>
                             
                                <Input placeholder = 'Username' onChangeText={(username)=>setusername(username)}  keyboardType="default"/>
                                <Input placeholder = 'Password' onChangeText={(Password)=>setPassword(Password)}  secureTextEntry={true} />
                              
                                 

                                <View style={{width: '100%', height: 100,}}>
                                  {loading ? <ActivityIndicator size={40} color='white' style={{marginTop: 15}} /> : <View style={styles.butview}>
                                   <MyButton onPress={()=>handelSubmitLogin()} >Login</MyButton>
                                   <MyButtonImage onPress={()=>alert('google')}>Google</MyButtonImage>
                                  </View>}
                                </View>
                              <TouchableOpacity 
                                onPress={()=>props.navigation.navigate('Signup')}  >
                              <Text style={styles.btntouch}>Don't have an account ?Sign up</Text>
                             </TouchableOpacity>
                    </View>
                 </LinearGradient>
              </ImageBackground>
    );
  }


const styles = StyleSheet.create({
  image:{
    resizeMode:'center',
  },
  linearGradient: {
    height:windowHeight,
    width: windowWidth,
  },
  container:{
    flex: 1,
    justifyContent:"center",
    alignItems:'center',
    marginTop:30,
  },
  txt:{
    color:'white',
    fontSize:25,
  },
  butview:{
    width:'100%',
    alignItems:'center',
  },
  btntouch:{
    fontWeight:'bold',
    color:'white',
    textAlign:'center',
    marginTop:10
  }
});


export default Login;