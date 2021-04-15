
import React, { useEffect } from 'react';
import { useState } from 'react';
import { View ,TouchableOpacity, ScrollView, Dimensions, ImageBackground, Text} from 'react-native';
import { URL } from '../API/API'
import alex from '../pic/Alex.jpeg'
import City from '../screen/City';

const Card = (props)=>{
    const { width, height } = Dimensions.get('window')
    return(
        <TouchableOpacity style={{width: width / 2.2, height: height / 4, borderRadius: 15, backgroundColor: 'gray', margin: 5}}
         onPress={props.onPress}
         activeOpacity={0.8}>
         
          <ImageBackground  source={props.image && {uri: props.image}} style={{ resizeMode: 'cover',  flex: 1, padding: 10, justifyContent: 'flex-end'}} imageStyle={{borderRadius: 15}}>
           <Text style={{backgroundColor: 'rgba(0,0,0,0.5)', color: 'white', alignSelf: 'flex-start', fontSize: 22, width: '100%', padding: 2}}>{props.name}</Text>

             </ImageBackground>
        
        </TouchableOpacity>
    )
}


const Cities =(props)=>{

      const [ cities, setCities ] = useState([]) 

      useEffect(()=>{

        async function getCities(){

          const response = await fetch(`${URL}/cities`)
          let result = await response.json()
          setCities(result.cities)
          console.warn(result)
        }

        getCities()


      }, [])



    return (
        
      <View style={{flex: 1, backgroundColor: 'black'}}>
        <ScrollView contentContainerStyle={{flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center'}}>
             {cities.length > 0 && cities.map(city=><Card 
                name={city.name}
                image={city.media[0]}
                onPress={()=>props.navigation.navigate('City', { city: { name: city.name, id: city.id, media: city.media, description: city.description  } })}
             
             />)}
        </ScrollView>
      </View>
      );
}

  export default Cities ;