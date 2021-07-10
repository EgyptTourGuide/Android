import React, { useState ,useEffect} from 'react';
import { Text,Button,View ,StyleSheet,Dimensions,ImageBackground,TouchableOpacity} from 'react-native';
import axios from 'axios';
import { URL } from '../API/API'
import Package from './Package';
import Plan from './Plan'
import ReviewPlan from './ReviewPlan';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()


const { width, hight } = Dimensions.get('window')

const Card = (props) => {
  const { width, hight } = Dimensions.get('window')
  return (
    <TouchableOpacity activeOpacity={1} style={{ width: width, justifyContent: 'center', alignItems: 'center', height: 200 }}>
      <ImageBackground style={{ width: width - 30, backgroundColor: 'gray', resizeMode: 'cover', flex: 1, padding: 10, justifyContent: 'flex-end', borderRadius: 30 }}
        source={props.image && { uri: props.image }} imageStyle={{ borderRadius: 30 }}>
          <View style={{justifyContent:'space-between',flexDirection:'row'}}>
            <View style={{}}>
               <Text style={{color:'#fff',fontSize:25,fontWeight:'bold',paddingHorizontal :10}}>{props.name}</Text>
            </View>
            <View style={{}}>
            <TouchableOpacity
                    style={styles.button}
                    onPress={()=> props.navigation.navigate('Plans')}
                    >
                      <Text style={{textAlign:'center',fontSize:20,color:'#fff',fontWeight:'bold'}}>Go</Text>
                  </TouchableOpacity>
          </View>
          </View>
      </ImageBackground>
    </TouchableOpacity>
  )
}

const Myplans=(props)=> {
 const [citiespalns ,setCitiesPlans] = useState ([]);
 const [loading ,setLoading] =useState (false);

  useEffect(() => {
    async function getCitiesPlans() {
      try {
        const result = await axios.get(`${URL}/cities/plan/all`)
        if (result.status === 200) {
          setCitiesPlans(result.data.cities)

        } else return
      } catch (e) {
        setLoading(false)
        return
      }
      setLoading(false)
    }

    getCitiesPlans()

  }, [])

    return (
      <View style={styles.contain}>
        <View style={{paddingVertical:10}}>
          {citiespalns.length > 0 && citiespalns.map((e)=> <Card {...props} image={e.media[0]} name={e.name}/>)} 
        </View>
     
      </View>
    );
  }

  const CityPlans = (props)=>{

    return(
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='cityPlans'>
      <Stack.Screen name='cityPlans' component={Myplans} />
      <Stack.Screen name='Plans' component={Package} />
      <Stack.Screen name='Plan' component={Plan} />
      <Stack.Screen name='ReviewPlan' component={ReviewPlan} />
      </Stack.Navigator>
    )
  }
  
 
  const styles=StyleSheet.create({

    contain:{
        flex:1,
        backgroundColor:'#000'
    },
    button:{
      backgroundColor: '#16c79a',
      width:width /5,
      borderRadius: 50,
      height: 40,
      justifyContent:'center'
    },
  },
  )
  export default CityPlans;