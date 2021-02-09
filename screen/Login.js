import React from 'react';
import { StyleSheet, View , ImageBackground, Text, TouchableOpacity,} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MyButton, MyButtonImage} from '../component/Button'
import { Mytxt } from '../component/Textinput'
import{Logo} from "../component/Images"




export default class Login extends React.Component {

      state = {
        email: '',
        password: '',
        google :'',
    }
       componentDidMount(){
       }

        handleEmail = (text) => { this.setState({ email: text })}
        handlePassword = (text) => {this.setState({ password: text })}
        login = (email, pass) => { alert('email: ' + email + ' password: ' + pass)}

  render() {
    return (
      <View style={{width:'100%',height:'100%',flex:1,}}>
        <ImageBackground
            source= { require('../pic/spencer-davis.jpg')}
            style={styles.image} >
              <LinearGradient
                  colors={['rgba(0,0,0,0)','rgba(0,0,0,7)','rgba(0,0,0,1)']}
                  style={styles.linearGradient}
                  start={{ x : 1 , y : 0.06 }} 
                  end={{ x : 1 , y : 0.99 }}
                  >

                   <View style={{margin:15,alignSelf:'flex-end',paddingBottom:50,}}>
                       <Text style={{color:"white",fontSize:18,bottom:45,right:30,}}>Skip</Text>
                         <View style={{alignItems:'flex-end',bottom:63,marginRight:17}}>
                           <Icon  name="angle-right" size={18} color="white"/>
                         </View>
                    </View>
            
                <Logo></Logo>
                <Text style={{color:'white', top:190,fontSize:25}}>Sign In</Text>

                <Mytxt placeholder = 'Email'></Mytxt>

                <Mytxt placeholder = 'Password'   secureTextEntry={true} ></Mytxt>

                <View  style={{flexDirection:'row',padding:5,top:190}}>
                    <Text style={{paddingRight:40,fontWeight:'bold',color:'white',margin:5}}> Remember Me</Text>
                    <Text style={{fontWeight:'bold',color:'white',margin:5}}>Forgot password?</Text>
                </View>
                
                <MyButton onPress={()=>this.props.route.params.changeUser()} >Login</MyButton>
                <MyButtonImage onPress={()=>alert('google')}>Google</MyButtonImage>

              
            <TouchableOpacity 
                onPress={()=>this.props.navigation.navigate('Signup')} 
                style={{ margin:5, top:100}} >
            <Text style={{fontWeight:'bold',color:'white'}}>Don't have an account ?Sign up</Text>
            </TouchableOpacity> 

           </LinearGradient>
         </ImageBackground>
       </View>
    );
  }
}
const styles = StyleSheet.create({
  image:{
    flex:1,
    justifyContent:'center',
    resizeMode:'center',
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    height:900,
    width: 395,
  },
});