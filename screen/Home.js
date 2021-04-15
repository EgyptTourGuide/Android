
import React from 'react';
import {View ,StyleSheet, TouchableOpacity, Text,ScrollView, ImageBackground,Image, Dimensions} from 'react-native';
import { Search} from '../component/Textinput';
import Icon from 'react-native-vector-icons/FontAwesome';
import Advanture from '../categories/Advanture'
import Cities from '../categories/Cities'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import City from './City';
import Place  from '../screen/Place';
import Review from './Review'

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator()


const Homes = (props)=>{
  return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name='Home'component={Home} />
          <Stack.Screen name='City'component={City} />
          <Stack.Screen name='Place'component={Place} />
          <Stack.Screen name='Review' component={Review}  />
        </Stack.Navigator>
  )
}

const Header = (props)=>{

  return(
    <View style={{width: '100%',alignItems: 'center', flexDirection: 'row', padding: 12, justifyContent: 'space-between'}}>
               <ImageBackground
                source={require('../pic/logo.png')}
                style={{width:45,height:45,backgroudColor:'blue'}}/>
              <Search/>
              <Icon  name="filter" size={30} color="white"/>
    </View>
  )
}


const Card = (props)=>{
  const { width, hight } = Dimensions.get('window')

  return(
    <View style={{width: width, justifyContent: 'center', alignItems: 'center'}}>
    <View style={{width: width-30, height: 150, borderRadius: 30, backgroundColor: 'gray'}}>
   
    </View>
  </View>
  )
}

 const Home=(props)=> {

    const { height } = Dimensions.get('window')

  
    return (
      <View style={{flex: 1, backgroundColor: 'black'}}>
        <Header/>  
        <View>   
          <Text style={{color:'white',fontSize:24,fontWeight:"bold", marginLeft: 15}}>Recommended</Text>
        </View>
       <View style={{height: height / 4}}>
          <ScrollView  
                horizontal={true} 
                contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
                >
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                
          </ScrollView>
       </View>
        <Tabs />
      </View>
                  
    );
  }
  


  const Tabs =(props)=> (
       <Tab.Navigator
             swipeVelocityImpact={0.5}
             swipeEnabled={true}
             tabBarOptions={{
             activeTintColor: "#fff",
             inactiveTintColor: 'gray',
             style:{backgroundColor:'rgba(0,0,0,0.0)'}}} 
    >
         <Tab.Screen name="Cities" component={Cities}/>
         <Tab.Screen name="Advanture" component={Advanture}/>
       </Tab.Navigator>
  )


  export default Homes;