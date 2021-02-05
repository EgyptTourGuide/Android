import React from 'react';
import { View , ImageBackground, Text,TouchableOpacity,} from 'react-native';
import { MyButton,MyButtonImage } from '../component/Button'
import { Mytxt } from '../component/Textinput';
import{Logo} from '../component/Images'


export default class Signup extends React.Component{

    render(){

        return(
        
                <View style={{width:'100%',height:'100%',flex:1}}>
                  <ImageBackground 
                  source={require('../pic/sea.jpeg')} style={{flex:1,justifyContent:'center', resizeMode:'center',}}>

                    <View style={{flex:1,justifyContent:'center',alignItems:'center',bottom:40}}>  
                      <Logo></Logo>
                    <Text style={{top:185,fontSize:22,fontWeight:'bold',alignSelf:'center'}}>Signup</Text>
              
                        <Mytxt placeholder = 'FullName'/>
                        <Mytxt placeholder = 'Email'/>
                        <Mytxt placeholder = 'Country'/>
                        <Mytxt placeholder = 'PhoneNumber'/>
                        <Mytxt placeholder = 'Password'   secureTextEntry={true} /> 
                        <Mytxt placeholder = 'Confirm Password'  secureTextEntry={true}/>

                        <Text style={{margin:1}}></Text>
                
                        <MyButton onPress={()=>this.props.navigation.navigate('City')}>Register</MyButton>
                        <MyButtonImage onPress={()=>alert('google')}>Google</MyButtonImage>

                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')}
                        style={{ margin:2, top:100}} >
                            <Text style={{fontSize:15,fontWeight:'bold',color:'#000',padding:5}}>Don't have an account ?Sign up
                            </Text>
                        </TouchableOpacity> 
               </View>
              </ImageBackground>
             </View>
          
        )
    }
}