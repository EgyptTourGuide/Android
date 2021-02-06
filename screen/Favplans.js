
import React from 'react';
import { Text,Button,View ,StyleSheet} from 'react-native';




const Favplans=({navigation})=> {
    return (
      <View style={styles.contain}>
        <Text>Favplans!</Text>
        <Button
          title="Go FavPlan"
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
  export default Favplans;