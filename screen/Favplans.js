
import React from 'react';
import { Text,Button,View ,StyleSheet} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Favorite from '../categoryFav&Plan/Favorite';
import Myplans from '../categoryFav&Plan/Myplans';
import Package from '../categoryFav&Plan/Package';
import Plan from '../categoryFav&Plan/Plan';
import Check from '../categoryFav&Plan/Check';
import { createStackNavigator } from '@react-navigation/stack';


const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator()


const Homes = (props) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Favplans' component={Favplans} />
       <Stack.Screen name='Myplans' component={Myplans} />
       <Stack.Screen name='Package' component={Package} />
       <Stack.Screen name='Plan' component={Plan} />
       <Stack.Screen name='Check' component={Check} />
   
    </Stack.Navigator>
  )
}



/*Tab navigator (myplans & favorite)*/

const Favplans=(props)=> {
  console.warn(props)
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
      <Tab.Screen name="Myplans"  initialParams={{city: props.city}} component={Myplans}  />
      <Tab.Screen name="Favorite" initialParams={{city: props.city}} component={Favorite} />
    </Tab.Navigator>
  )
  const styles=StyleSheet.create({

    contain:{
     
        flex:1,
        backgroundColor:'#000'
    }
  },
  )
  export default Homes;