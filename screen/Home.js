
import React from 'react';
import {View ,StyleSheet, TouchableOpacity, Text,ScrollView, ImageBackground,Image} from 'react-native';
import { Search} from '../component/Textinput';
import Icon from 'react-native-vector-icons/FontAwesome';
import Advanture from '../categories/Advanture'
import Cities from '../categories/Cities'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import City from './City';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator()


const Homes=(props)=>{
  return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name='Home'component={Home} />
          <Stack.Screen name='City'component={City} />
        </Stack.Navigator>
  )
}
 const Home=(props)=> {
    return (
      <View style={styles.contain}>
           <View style={{bottom:40}}>
             <Search/>
               <View style={{left:190,top:4}}><Icon name="search" size={18} color="#393e46"/></View>
                 <View style={{right:70,bottom:25}}> 
                   <ImageBackground
                    source={require('../pic/logo.png')}
                    style={{width:45,height:45,}}/>
                 </View>
                 <TouchableOpacity style={{width:30,alignItems:'center',alignSelf:'flex-end',top:-63,right:-58}}>
                   <Icon  name="filter" size={27} color="white"/>
                 </TouchableOpacity>
           </View>
         <Text style={{color:'white',width:"100%",position:'absolute',top:70,left:20,fontSize:28,fontWeight:"bold"}}>Recommeded</Text>


       <View style={{bottom:40,height:170,}}>
          <ScrollView  
                horizontal={true} 
                pagingEnabled
                >
                   <View>
                           <TouchableOpacity style={{marginLeft:20,marginRight:20}}  onPress={()=>alert("hallo Diving")}>
                                <Image 
                                           source={require('../pic/Diving.jpeg')}
                                           style={styles.scrolimag}/>
                                <Text style={styles.txt}>#Diving</Text>
                            </TouchableOpacity>
                    </View>
                    <View>
                            <TouchableOpacity style={{marginLeft:35,marginRight:30}} onPress={()=>alert("hallo Ballon")}>
                                    <Image 
                                           source={require('../pic/ballon2.jpeg')}
                                           style={styles.scrolimag}/>
                                    <Text style={styles.txt}>#Ballon</Text> 
                            </TouchableOpacity>
                    </View>
                    <View>
                            <TouchableOpacity style={{marginLeft:14,marginRight:20}} onPress={()=>alert("hallo Running")} > 
                                    <Image 
                                            source={require('../pic/Diving.jpeg')}
                                            style={styles.scrolimag}/>
                                    <Text style={styles.txt}>#Running</Text>
                           </TouchableOpacity>
                   </View>
          </ScrollView>
          
       </View>
       <View style={{width:'100%',height:'100%'}}>
      
       <View style={{width:'100%',height:'100%',bottom:30,}}>
          <Tab.Navigator
                swipeVelocityImpact={0.5}
                swipeEnabled={false}
                tabBarOptions={{
                activeTintColor: "#fff",
                inactiveTintColor: 'gray',
                style:{backgroundColor:'rgba(0,0,0,0.0)'}}} 
       >
            <Tab.Screen name="Cities" component={Cities}/>
            <Tab.Screen name="Advanture" component={Advanture}/>
          </Tab.Navigator>
          </View>

         </View>
      </View>
                  
    );
  }
  const styles=StyleSheet.create({

    contain:{
        width:'100%',
        height:"100%",
        alignItems:'center',
        backgroundColor:'#000',
    },
    
    txt:{
        color:'#fff',
        fontSize:20,
        fontWeight:'bold',
        bottom:40,
        left:20
      },
      taptxt:{
        color:'#fff',
        fontSize:20,
        fontWeight:'bold',
      },
      scrolimag:{
        width:340,
        height:170,
        resizeMode:'cover',
        borderRadius:30
      },
      touchtap:{
        flex:1,
        alignItems:'center'

      }
  },
 
  )
 
  export default Homes ;