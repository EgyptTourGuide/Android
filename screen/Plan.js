
import React from 'react';
import { Text,Button,View ,StyleSheet} from 'react-native';
import Star from '../component/StarRating';



const Plan=()=> {
    return (
      <View style={styles.contain}>
        <Text>Home!</Text>
        <Button
          title="Go to plan"
          onPress={() => {this.onPress}}
        />
       <View style={{width:200,}}><Star></Star></View> 
      </View>
    );
  }
  const styles=StyleSheet.create({

    contain:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'black'
    
    }
  },
  )
  export default Plan;