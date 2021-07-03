
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { Search } from '../component/Textinput';
import Icon from 'react-native-vector-icons/FontAwesome';
import Advanture from '../categories/Advanture'
import Cities from '../categories/Cities'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import City from './City';
import Place from '../screen/Place';
import Review from './Review'
import ReviewHotel from './ReviewHotel'
import Hotel from './Hotel';
import axios from 'axios';
import { URL } from '../API/API';
import Room from './Room';
import Ticket from './Ticket';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator()

const Homes = (props) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='City' component={City} />
      <Stack.Screen name='Place' component={Place} />
      <Stack.Screen name='Review' component={Review} />
      <Stack.Screen name='ReviewHotel' component={ReviewHotel} />
      <Stack.Screen name='Hotel' component={Hotel} />
      <Stack.Screen name='Room' component={Room} />
      <Stack.Screen name='Ticket' component={Ticket} />
    </Stack.Navigator>
  )
}
const Header = (props) => {
  return (
    <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', padding: 12, justifyContent: 'space-between' }}>
      <ImageBackground
        source={require('../pic/logo.png')}
        style={{ width: 45, height: 45, backgroudColor: 'blue' }} />
      <Search />
      <Icon name="filter" size={30} color="white" />
    </View>
  )
}
const Card = (props) => {
  const { width, hight } = Dimensions.get('window')
  return (
    <TouchableOpacity activeOpacity={0.5} style={{ width: width, justifyContent: 'center', alignItems: 'center', height: 200 }}>
      <ImageBackground style={{ width: width - 30, backgroundColor: 'gray', resizeMode: 'cover', flex: 1, padding: 10, justifyContent: 'flex-end', borderRadius: 30 }} source={props.image && { uri: props.image }} imageStyle={{ borderRadius: 30 }}>

      </ImageBackground>
    </TouchableOpacity>
  )
}

const Home = (props) => {
  const { height } = Dimensions.get('window')
  const [activities, setActivities] = useState([])

  useEffect(() => {
      async function getActivity() {
        const res = await axios.get(`${URL}/activity`)
        console.warn(res.data)
        setActivities(res.data)
    }
    getActivity()
  }, [])

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <Header />
      <View>
        <Text style={{ color: 'white', fontSize: 24, fontWeight: "bold", marginLeft: 15 }}>Recommended</Text>
      </View>
      <View style={{ height: height / 4 }}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
          showsHorizontalScrollIndicator={false}
        >
          {activities.length > 0 && activities.map((activity) => <Card image={activity.media[0]} key={activity.id} />)}
        </ScrollView>
      </View>
      <Tabs />
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
    <Tab.Screen name="Cities" component={Cities} />
    <Tab.Screen name="Advanture" component={Advanture} />
  </Tab.Navigator>
)

export default Homes;