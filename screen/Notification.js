
import React from 'react';
import { Text,Button,View ,StyleSheet,ImageBackground,  ScrollView,ActivityIndicator} from 'react-native';
import { useState, useEffect } from 'react';
import { Authaxios, URL } from '../API/API';
import Header from '../component/Header';


const notifications=(props)=> {

  const [notifications, setnotifications] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function getnotifications() {
  
      try {
        const result = await Authaxios.get(`${URL}/profile/notifications`)
        if (result.status === 200) {
          setnotifications(result.data.notifications)
          console.warn(result.data)   
        
      } else return
      } catch (e) {
        console.warn(e)
        setLoading(false)
        return
      }
      setLoading(false)
    }
    getnotifications()
  
  }, [])

  if(loading)return <View style={{flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center'}}><ActivityIndicator color='white' size={25}/></View>
  else 
    return (
      <ScrollView contentContainerStyle={styles.scrollviewstyle}
      showsVerticalScrollIndicator={true} >
        <View style={{backgroundColor:'#000'}}><Header /></View>

           {notifications.length > 0 && notifications.map(notification=>
              <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#fff',width:'80%',height:110,padding:15}}>

              <View style={{justifyContent:'center',right:30,}}>
                 <ImageBackground
                   source={require('../pic/logo.png')}
                   style={{width:45,height:45,borderRadius:25,borderColor:'#fff',borderWidth:1}}/>
                 
              </View>
              <View>
                   <Text style={{fontSize:19,fontWeight:'bold',color:'#fff',padding:5}}>{notification.title}</Text>
                  <Text style={{color:'#fff',fontSize:16,textAlign:'center'}}>
                     "{notification.content}"</Text>
 
                   <Text style={{color:'#fff',textAlign:'right',padding:5}}>{notification.createdAt}</Text>
               
              </View>
            
               
             </View>)}
     
      </ScrollView>
    );
  }

  const styles=StyleSheet.create({
    scrollviewstyle:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#000'
    
    }
  },
  )
  export default notifications;