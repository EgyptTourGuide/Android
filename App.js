import  React from 'react';
import  Login from './screen/Login'
import  Signup from './screen/Signup'
import  City from './screen/City'
import  Notification from "./screen/Notification";
import  Plan from "./screen/Plan";
import  Profile from "./screen/Profile";
import  Home from './screen/Home'
import  { NavigationContainer } from '@react-navigation/native'
import  { createStackNavigator } from '@react-navigation/stack'
import  {createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import  Icon from 'react-native-vector-icons/FontAwesome'
import  { View } from 'react-native';
import  Favplans from './screen/Favplans';

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

let user = {
  username: "hossam",
  fullname: "Hossam",
  email: "hossam@gmail.com"
}

export default class App extends React.Component {
   
  render(){

    return(
    <NavigationContainer>
      { user !== null ? <Authorized /> : <Unauthorized /> }
    </NavigationContainer>
    )

  }
} 

const Unauthorized = ()=>(
  <Stack.Navigator>
  <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
  <Stack.Screen name="Signup" options={{headerShown:false}} component={Signup} />
     
 </Stack.Navigator>
)

const Authorized = ()=>(
  <View style={{width:'100%',height:'110%',top:-3,borderWidth:1}}>
  <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({  color }) => {
            let iconName
            if(route.name === 'Home') iconName = 'home' 
            if(route.name === 'Profile') iconName = 'user'
            if(route.name ==='Notification') iconName ='bell'
            if(route.name === 'Plan') iconName = 'plus'
            if(route.name === 'Favplans') iconName = 'plane'
            
          return <Icon name={iconName} size={25} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#fff",
        inactiveTintColor: '#777',
        style:{backgroundColor:"#000"}}} 
   >
      
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Favplans' component={Favplans}   />
      <Tab.Screen name='Plan' component={Plan} />
      <Tab.Screen name='Notification' component={Notification} options={{ tabBarBadge: 1}} />
      <Tab.Screen name='Profile' component={Profile} />
  
  </Tab.Navigator>
</View>

)



