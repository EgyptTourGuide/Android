
import React from 'react';
import { View ,StyleSheet, Text} from 'react-native';
import MapView, { Marker, } from 'react-native-maps'

const Plan=()=> {
    return (
      <View style={styles.contain}>
        <MapView
          style={styles.map} 
          region={{
          latitude:30.045833 ,
          longitude:31.224444 ,
          latitudeDelta:0.0922,
          longitudeDelta: 0.0421,
       }}
       moveOnMarkerPress={false}
     > 
     <Marker
          coordinate={{ 
            latitude:30.045833 ,
            longitude:31.224444 ,}} 
          title='Hi'
          description='lets go to this place'
          opacity={0.7}
         />

     </MapView>
       
      </View>
    );
  }
  const styles=StyleSheet.create({
    contain:{
         
         backgroundColor: '#fff',
         width:'100%',
         height:'100%',
         alignItems: 'center',
         justifyContent: 'center', 
      
    },
    map:{
    
      alignItems:'center',
      justifyContent:'flex-start',
      width:"100%",
      height:"100%",
      
    }
  },
  )
  export default Plan;