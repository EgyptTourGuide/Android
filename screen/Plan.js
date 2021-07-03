

import React from 'react';
import { Text,TouchableOpacity,View ,StyleSheet,Dimensions,TextInput,ImageBackground} from 'react-native';
import DateField from 'react-native-datefield';

const Ticket=(props)=> {
  const { width, height } = Dimensions.get('screen')

    return (
      <View style={styles.contain}>
                  <View style={{flexDirection:'row',borderRadius:20,borderBottomWidth:1,borderBottomColor:'#fff',width:'80%',height:110,padding:15}}>

             <View style={{justifyContent:'center',right:30}}>
                <ImageBackground
                  source={require('../pic/logo.png')}
                  style={{width:45,height:45,backgroundColor:'red'}}/>
                
             </View>
             <View>
                  <Text style={{fontSize:19,fontWeight:'bold',color:'#fff',padding:5}}>Hotel NAme</Text>
                 <Text style={{color:'#fff',fontSize:16,textAlign:'center'}}>
                    "Hi hossam hlloe in egypt tour guide team project in Cs"</Text>

                  <Text style={{color:'#fff',textAlign:'right',padding:5}}>09.00AM</Text>
              
             </View>
           
              
            </View>
      </View>
    );
  }
  const styles=StyleSheet.create({          

    contain:{
       
        flex:1,
        backgroundColor:'#000',
        alignItems:'center'

    },
    styleInput:{
      backgroundColor:'#fff',
      color:'red',
      borderColor: '#fff',
      borderRadius: 15,
      borderWidth: 1,
      flex:1

    },
    containerStyle:{
      backgroundColor:'#fff',
      width:180,
      borderColor: '#fff',
      borderRadius: 15,
      borderWidth: 1,
      alignSelf:'center',
    }
  },
  )
  export default Ticket;