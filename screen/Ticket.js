

import React from 'react';
import { Text,TouchableOpacity,View ,StyleSheet,Dimensions,TextInput,ImageBackground} from 'react-native';




const Ticket=(props)=> {
  const { width, height } = Dimensions.get('screen')
    return (
      <View style={styles.contain}>
        <View style={{backgroundColor:'#fff',width:'90%',height:height/2,alignSelf:'center',borderColor:'#fff',borderRadius:20,borderWidth:1}}>
         <ImageBackground source={require('../pic/logo2.jpg')} style={{width:100,height:90,alignSelf:'center',margin:10}}></ImageBackground>
         <Text style={{textAlign:'center',fontSize:18}}>with Egypt tour guide everything is possible</Text>
        <View style={{padding:20,}}>
            <Text>Name : {}</Text>
            <Text>Date : {}</Text>
            <Text>HotelName : {}</Text>
            <Text>Cost : {}</Text>
            <Text>Room Features : {}</Text>
        </View>
     
        </View>
        <View style={{width:'90%',height:height/4,backgroundColor:'blue',alignSelf:'center',borderRadius:20,borderWidth:1}}>
       
        </View>
      
              
      </View>
    );
  }
  const styles=StyleSheet.create({

    contain:{
        width:'100%',
        height:100,
        flex:1,
        backgroundColor:'#000',
        
    },
   
  },
  )
  export default Ticket;