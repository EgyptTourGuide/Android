
import React from 'react';
import { Text,Button,View ,StyleSheet} from 'react-native';




const Profile=()=> {
    return (
      <View style={styles.contain}>
        <Text>Profil!</Text>
        <Button
          title="Go to Profile"
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
        backgroundColor:'#777'
    }
  },
  )
  export default Profile;