import React from 'react';
import { View , Text,} from 'react-native'
import  Login from './screen/Login'
import  Signup from './screen/Signup'
import  City from './screen/City'
import  Notification from "./screen/Notification";
import  Plan from "./screen/Plan";
import  Profile from "./screen/Profile";
import  Homes from './screen/Homes'
import  { NavigationContainer } from '@react-navigation/native'
import  { createStackNavigator } from '@react-navigation/stack'
import  {createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'




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
  <Stack.Screen name="City" options={{headerShown:false}} component={City} />   
 </Stack.Navigator>
)

const Authorized = ()=>(
  <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({  color }) => {
            let iconName
            if(route.name === 'Homes') iconName = 'home' 
            if(route.name === 'Profile') iconName = 'user'
            if(route.name ==='Notification') iconName ='bell'
            if(route.name === 'Plan') iconName = 'plus'
          return <Icon name={iconName} size={25} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
  >
  <Tab.Screen name='Homes' component={Homes} />
  <Tab.Screen name='Plan' component={Plan} />
  <Tab.Screen name='Notification' component={Notification} options={{ tabBarBadge: 1}} />
  <Tab.Screen name='Profile' component={Profile} />
  
</Tab.Navigator>

)



