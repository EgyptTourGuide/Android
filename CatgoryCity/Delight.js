
import React from 'react';
import { Text,View ,StyleSheet,TouchableOpacity,ImageBackground, ScrollView,Dimensions} from 'react-native';
import { useEffect, useState } from 'react';
import {  URL } from '../API/API';
import axios from 'axios';

const Card = (props)=>{
    const { width, height } = Dimensions.get('window')
    return(
        <TouchableOpacity style={{width: width / 2.2, height: height / 4, backgroundColor: 'gray', borderRadius: 15, margin: 5}}
         onPress={props.onPress}
         activeOpacity={0.8}>
             <ImageBackground source={props.image && { uri: props.image }} style={{ resizeMode: 'cover', flex: 1, padding: 10, justifyContent: 'flex-end' }} 
            imageStyle={{ borderRadius: 15 }}>
             <Text style={{ backgroundColor: 'rgba(0,0,0,0.5)', color: 'white',alignSelf:'flex-end', fontSize: 22, width: '100%',padding:5}}>
              {props.name}</Text>
           </ImageBackground>
        
        </TouchableOpacity>
    )
}
const Delight =(props)=>{
    const [activities, setActivities] = useState([])
    const { width, height } = Dimensions.get('window')
  useEffect(() => {
     const id = props.route.params.id
      async function getActivity() {
        const res = await axios.get(`${URL}/activity?city=${id}`)
        setActivities(res.data.activities)
    }
    getActivity()
  }, [])

    return (
        
        <View style={{flex: 1, backgroundColor: 'black'}}>
        <ScrollView contentContainerStyle={{flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center'}}>
        <View style={{ height: height / 4 }}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
          showsHorizontalScrollIndicator={false}
        >
          {activities.length > 0 && activities.map((activity) => 
          <Card 
                image={activity.media[0]} 
                id={activity.id}
                name={activity.name}
                description={activity.description}
                key={activity.id}

             onPress={()=>props.navigation.navigate('Activity',{ activity: { 
               id:activity.id, name:activity.name,
               description:activity.description , media:activity.media[0],}})}
          />)}
        </ScrollView>
      </View>
        </ScrollView>
           
      </View>
  
      );
}
  const styles=StyleSheet.create({

   
  },
  )
  export default Delight ;