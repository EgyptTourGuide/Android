
import React from 'react';
import { Text,Button,View ,StyleSheet} from 'react-native';




const Notification=()=> {
    return (
      <View style={styles.contain}>
        <Text>Notification!</Text>
        <Button
          title="Go to Settings"
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
  export default Notification;