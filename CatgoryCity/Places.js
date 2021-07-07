
import React,{useEffect} from 'react';
import { Text,View ,TouchableOpacity, Dimensions,ScrollView,ImageBackground} from 'react-native';

import { useState } from 'react';
import { URL } from '../API/API'

const Card = (props)=>{
    const { width, height } = Dimensions.get('window')
    return(
        <TouchableOpacity style={{width: width / 2.2, height: height / 4, backgroundColor: 'gray', borderRadius: 15, margin: 5}}
         onPress={props.onPress}
         activeOpacity={0.8}>

            <ImageBackground  source={props.image && {uri: props.image}} style={{ resizeMode: 'cover',  flex: 1, padding: 10, justifyContent: 'flex-end'}} imageStyle={{borderRadius: 15}}>
             <Text style={{backgroundColor: 'rgba(0,0,0,0.5)', color: 'white', alignSelf: 'flex-start', fontSize: 22, width: '100%', padding: 2}}>{props.name}</Text>

             </ImageBackground>
        </TouchableOpacity>
    )
}

const Places =(props)=>{
  const [Places,setPlaces] =useState([])
 
  useEffect(()=>{
   async function getPlaces(){
    const response=await fetch(`${URL}/Places?city=${props.route.params.id}`)
    let result = await response.json()
    setPlaces(result.places)
    
   }

   getPlaces()

  },[])
    return (
        
      <View style={{flex:1, backgroundColor: '#000'}}>
           <ScrollView contentContainerStyle={{flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center'}}>
            {Places.length  > 0 && Places.map(Place=> 
            <Card 
                name={Place.name}
                image={Place.media[0]}
                onPress={()=>props.navigation.navigate('Place', { Place: { name: Place.name, id: Place.id, media: Place.media, description: Place.description } })}
            />)}
          </ScrollView>
         </View>
    
      );
}
 
  export default Places ;