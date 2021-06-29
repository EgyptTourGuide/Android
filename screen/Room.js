
import React from 'react';
import { Text,Button,View ,StyleSheet} from 'react-native';




const Room=({navigation})=> {
    return (
      <View style={styles.contain}>
        <Text>Favplans!</Text>
        <Button
          title="Go Room"
          onPress={() =>{navigation.navigate('Home')}}
        />
      </View>
    );
  }
  const styles=StyleSheet.create({

    contain:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#777'
    }
  },
  )
  export default Room;