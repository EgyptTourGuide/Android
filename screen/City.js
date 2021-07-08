import React, { useEffect } from 'react'
import { ImageBackground, View,TouchableOpacity, SafeAreaView, Dimensions} from 'react-native' ;
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Places from '../CatgoryCity/Places'
import Hotels from '../CatgoryCity/Hotels'
import Delight from '../CatgoryCity/Delight'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Star from '../component/StarRating';
import Header from '../component/Header';


const Tab = createMaterialTopTabNavigator();


const Footer =(props)=>{
return(
 
          <View style={{justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 15}}>
              <Star></Star>
              <TouchableOpacity style={{right: 30}}><FontAwesome5 name="map-marker-alt" size={24} color="#fff" /></TouchableOpacity> 
              <TouchableOpacity style={{}}><AntDesign name="hearto" size={24} color="red" /></TouchableOpacity> 
           </View>

)
}

export default function City (props) {

    const { height, width } = Dimensions.get('window')

    
    
    return(

       <View style={{backgroundColor: 'black', flex: 1}}>
         <ImageBackground
                source={{uri:props.route.params.city.media[0]}}
                style={{height:  height / 3.2, flexDirection: 'column', justifyContent: 'space-between', paddingBottom: 12, width: '100%', resizeMode: 'cover'}}>
         <Header></Header>
          <Footer />
           </ImageBackground>
          <Tabss city={props.route.params.city}></Tabss>
        </View>
    )
    }

    const Tabss =(props)=>(

   <Tab.Navigator
      swipeVelocityImpact={0.5}
      swipeEnabled={false}
      tabBarOptions={{
      activeTintColor: "#fff",
      inactiveTintColor: 'gray',
      style:{backgroundColor:'#000'}}} 
      
     >
    <Tab.Screen name="Places" initialParams={props.city} component={Places}/>
    <Tab.Screen name="Hotels"  initialParams={props.city} component={Hotels}/>
    <Tab.Screen name="Delight"  initialParams={props.city} component={Delight}/>
  </Tab.Navigator>

    )