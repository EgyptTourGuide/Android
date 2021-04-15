import React from 'react'
import  { useState,useEffect } from 'react';
import { ImageBackground, View,TouchableOpacity, SafeAreaView ,Text,ScrollView,StyleSheet, Dimensions, Image, ActivityIndicator} from 'react-native' ;
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView, { Marker } from 'react-native-maps'
import { Search} from '../component/Textinput';
import Star from '../component/StarRating';
import { URL } from '../API/API'



const{height,width}=Dimensions.get("window")

const Header = (props)=>{

  return(
    <View style={{width: '100%',alignItems: 'center', flexDirection: 'row', padding: 12, justifyContent: 'space-between'}}>
               <ImageBackground
                source={require('../pic/logo.png')}
                style={{width:45,height:45,backgroudColor:'blue'}}/>
              <Search/>
              <Icon  name="filter" size={30} color="white"/>
    </View>
  )}
const Discrption=(props)=>{
  return(
    <ScrollView style={{backgroundColor: 'white', width:"100%",}} contentContainerStyle={{alignItems:'center',}}>
      <Text style={{ width: '100%', backgroundColor: '#000',color:'#fff',padding:10,textTransform:"lowercase",fontStyle:'italic',fontSize:17}}>
        {props.dis}
      </Text>
    </ScrollView>
  )}

const Detelis =(props)=>{

  useEffect(()=>{

    console.warn(props.hours[0].day)
    console.warn(props.ticket)
  }, [])

  return(
  <View style={{backgroundColor:'blue',height:height/4,}}>
   <View>
   if ({props.ticket.lenght > 0}) {
     <Text style={{color: 'white',backgroundColor:'red'}}>{props.ticket.egyptioan}</Text>
   }
   
   </View>

   <Text style={{color:'#fff'}}>TimeTable</Text>
   <View>
     {props.hours && props.hours.map(h=><Text style={{color: 'white'}}>{h.day} from {h.from}, to {h.to}</Text>) }
   </View>
  </View>
  )}
   
const Location=(props)=>{
  if(props.lat)
  return(
    <View style={styles.MapView}>
    <MapView
      style={styles.map} 
      region={{
      latitude: props.lat ,
      longitude: props.long ,
      latitudeDelta: 0.0122,
      longitudeDelta: 0.033,
   }}
   moveOnMarkerPress={false}
 > 
 <Marker
      coordinate={{ 
      latitude:props.lat ,
      longitude:props.long ,
      }} 
      title='Hi'
      description='lets go to this place'
      opacity={1}
      style={{backgroundColor: 'red', width: 10, height: 10}}

     />
 </MapView>
  </View>)
  else return <View />
  
}  

  const Rate=(props)=>{


  return(
   <View style={styles.RateBox}>
      <View style={{flexDirection:'row',justifyContent:'space-between',width:"100%", padding: 15}}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
             <Image source={{uri: props.reviews.length > 0 && props.reviews[0].user.picture}} style={{width:60,height:60,borderRadius:30,}}/>
             <Text style={{color:'#fff', marginLeft: 5}}>{props.reviews.length > 0 && props.reviews[0].user.name}</Text>
          </View>
          <View style={{alignSelf:'center',}}>
             <Star rate={props.reviews.length > 0 && props.reviews[0].rate}></Star>
           </View>
      </View>
      <View>
           <Text style={{color: 'white', fontSize: 18}}>"{props.reviews.length > 0 && props.reviews[0].comment}"</Text>
      </View>
   </View>
  )}

   

export default function Place (props){

      const [ place, setPlace ] = useState(null)
      const [ loading, setLoading ] = useState(true)
     
     useEffect(()=>{

      async function getPlace(){

        try{
          const id = props.route.params.Place.id
        const result = await fetch(`${URL}/places/${id}`)
        if(result.status === 200){
        const jsonData = await result.json()
        setPlace(jsonData.place)
        }else console.warn(result)
        }catch(e){
          console.warn(e)
        }
        setLoading(false)
      }
 
      getPlace()

     }, [])


    if(loading)return <View style={{flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center'}}><ActivityIndicator color='white' size={25}/></View>
    else
    return(

       <View style={styles.Container}> 
         <ScrollView>
            <ImageBackground style={styles.imgbackground} source={{uri: place && place.media[0] }}>
             <Header />
            </ImageBackground>
            <Discrption dis={place && place.description} />
            <Detelis hours={place && place.hours} ticket={place && place.ticket} />
            <Location long={place && place.location.coordinates[0]} lat={place && place.location.coordinates[1]} />

             <View style={{height:50,flexDirection:'row',justifyContent:'space-between',padding:12}}>
               <View style={{width:60,}}><Text style={{color:'#fdb827',fontSize:25,fontWeight:"bold"}}>Rate</Text></View> 
              <View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>props.navigation.navigate('Review')}
                    >
                    <Text style={styles.txt}>Add Review</Text>
                </TouchableOpacity>
                </View>
             </View>
            <Rate rate={place && place.rate} reviews={place && place.reviews} />
          
         </ScrollView>
                  
        </View>
    )
    }
  

    const styles=StyleSheet.create({
      Container:{
         flex:1, 
         backgroundColor:'#000',
      },
      imgbackground:{
         height:  height / 3.2,
         flexDirection: 'column',
         justifyContent: 'space-between',
         paddingBottom: 12, width: '100%',
         resizeMode: 'cover'
      },
      MapView:{
         
        backgroundColor: '#fff',
        width:'90%',
        alignItems: 'center',
        justifyContent: 'center', 
        alignSelf:'center',
        height:height/4
   },
       map:{
        alignItems:'center',
        width:"100%",
        height:height/4
        
   },
      RateBox:{
        width:'90%',
        height:height/5
        ,borderRadius:25,
        borderColor:"#fff",
        borderWidth:2,
        alignSelf:'center',
        alignItems: 'center'
   },
      button:{
        backgroundColor:'#16c79a',
        width:120,
        borderRadius:30,
        height:30,
        alignItems:'center',
        justifyContent:'center'

   },
      txt:{
        fontWeight:'bold',
        fontSize:18,
        color:'#fff',
   }
    })