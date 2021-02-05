
import React from 'react';
import { Text,Button,View ,StyleSheet} from 'react-native';




const Plan=()=> {
    return (
      <View style={styles.contain}>
        <Text>Home!</Text>
        <Button
          title="Go to plan"
          onPress={() => {this.onPress}}
        />
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