import React, { useEffect } from 'react'
import { ImageBackground, View,TouchableOpacity, SafeAreaView, Dimensions} from 'react-native' ;
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ImageCities } from '../component/Images'
import { Search} from '../component/Textinput';
import Places from '../CatgoryCity/Places'
import Hotels from '../CatgoryCity/Hotels'
import Delight from '../CatgoryCity/Delight'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Star from '../component/StarRating';



const Tab = createMaterialTopTabNavigator();

const Header = (props)=>{

  return(
    <View style={{width: '100%',alignItems: 'center', flexDirection: 'row', padding: 12, justifyContent: 'space-between',}}>
               <ImageBackground
                source={require('../pic/logo.png')}
                style={{width:45,height:45,marginLeft:10}}/>
              <Search/>
              <Icon  name="filter" size={30} color="white"/>
    </View>
  )
}
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

    useEffect(()=>{
    }, [])
    
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
    <Tab.Screen name="Hotels" component={Hotels}/>
    <Tab.Screen name="Delight" component={Delight}/>
  </Tab.Navigator>

    )