
import React from 'react';
import { Text,Button,View ,StyleSheet} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Favorite from '../categoryFav&Plan/Favorite'
import Myplans from '../categoryFav&Plan/Myplans'


const Tab = createMaterialTopTabNavigator();

/*Tab navigator (myplans & favorite)*/

const Favplans=({navigation})=> {
    return (
      <View style={styles.contain}>
        <Tabs></Tabs>
       
      </View>
    );
  }
  const Tabs = (props) => (
    <Tab.Navigator
      swipeVelocityImpact={0.5}
      swipeEnabled={true}
      tabBarOptions={{
        activeTintColor: "#fff",
        inactiveTintColor: 'gray',
        style: { backgroundColor: 'rgba(0,0,0,0.0)' }
      }}
    >
      <Tab.Screen name="Myplans" component={Myplans} />
      <Tab.Screen name="Favorite" component={Favorite} />
    </Tab.Navigator>
  )
  const styles=StyleSheet.create({

    contain:{
     
        flex:1,
        backgroundColor:'#000'
    }
  },
  )
  export default Favplans;