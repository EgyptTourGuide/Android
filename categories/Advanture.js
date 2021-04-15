
import React from 'react';
import { View , ScrollView, Dimensions} from 'react-native';



const Card = ()=>{
    const { width, height } = Dimensions.get('window')
    return(
        <View style={{width: width / 2.2, height: height / 4, backgroundColor: 'gray', borderRadius: 15, margin: 5}}>
        
        </View>
    )
}


  const Advanture = ({navigation})=>{
    return (
        <View style={{flex: 1, backgroundColor: 'black'}}>
        <ScrollView contentContainerStyle={{flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center'}}>
             <Card />
             <Card />
             <Card />
             <Card />
             <Card />
             <Card />
        </ScrollView>
           
      </View>
  
      );
}
 
  
  export default Advanture;
  