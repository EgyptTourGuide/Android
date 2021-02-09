import React from 'react'
import { ImageBackground, View,TouchableOpacity, SafeAreaView ,} from 'react-native' ;
import Icon from 'react-native-vector-icons/FontAwesome';
import { AntDesign ,FontAwesome5  } from '@expo/vector-icons'; 
import { ImageCities } from '../component/Images'
import { Search} from '../component/Textinput';
import Places from '../CatgoryCity/Places'
import Hotels from '../CatgoryCity/Hotels'
import Delight from '../CatgoryCity/Delight'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Star from '../component/StarRating';
import MapView from 'react-native-maps';


const Tab = createMaterialTopTabNavigator();


export default function City () {
    
    return(

       <View>
         <View style={{width:'100%',height:'28%',alignItems:'center'}}>
           <ImageCities/>
           <SafeAreaView style={{position:'absolute'}}>
             <View style={{bottom:45}}><Search/></View>
             
               <View style={{left:190,bottom:40}}><Icon name="search" size={18} color="#393e46"/></View>
                 <View style={{right:70,position:'absolute'}}> 
                   <ImageBackground
                    source={require('../pic/logo.png')}
                    style={{width:45,height:45,right:180,top:15}}/>
                 </View>

                 <TouchableOpacity style={{width:30,alignItems:'center',alignSelf:'flex-end',top:-63,right:-58}}>
                   <Icon  name="filter" size={27} color="white"/>
                 </TouchableOpacity>

           </SafeAreaView>
           <View style={{flexDirection:'row',bottom:10}}>
            <TouchableOpacity style={{left:180}}><AntDesign name="hearto" size={24} color="red" /></TouchableOpacity> 
            <TouchableOpacity style={{left:7}} ><FontAwesome5 name="map-marker-alt" size={24} color="#fff" /></TouchableOpacity> 
           <Star></Star>

           </View>
           
         </View>
  
         <View style={{width:'100%',height:'100%'}}>
           <Tab.Navigator
                swipeVelocityImpact={0.5}
                swipeEnabled={false}
                tabBarOptions={{
                activeTintColor: "#fff",
                inactiveTintColor: 'gray',
                style:{backgroundColor:'#000'}}} 
       >
              <Tab.Screen name="Places" component={Places}/>
              <Tab.Screen name="Hotels" component={Hotels}/>
              <Tab.Screen name="Delight" component={Delight}/>
            </Tab.Navigator>
          </View>
        </View>
    )
    }