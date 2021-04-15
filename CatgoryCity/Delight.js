
import React from 'react';
import { Text,View ,StyleSheet,TouchableOpacity, ScrollView,Dimensions} from 'react-native';

const Card = (props)=>{
    const { width, height } = Dimensions.get('window')
    return(
        <TouchableOpacity style={{width: width / 2.2, height: height / 4, backgroundColor: 'gray', borderRadius: 15, margin: 5}}
         onPress={props.onPress}
         activeOpacity={0.8}>
        
        </TouchableOpacity>
    )
}
const Delight =()=>{

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
  const styles=StyleSheet.create({

   
  },
  )
  export default Delight ;