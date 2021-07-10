
import React ,{useState} from 'react';
import { Text,TouchableOpacity,View ,StyleSheet,Dimensions,TextInput,ImageBackground} from 'react-native';
import { useEffect } from 'react';
import Header from '../component/Header';
import { URL } from '../API/API';
import axios from 'axios';

const Card = (props) => {
    const { width, hight } = Dimensions.get('window')
    
    return (
      <TouchableOpacity activeOpacity={0.7}
          style={{ width: width-30,height:height/6, justifyContent: 'center', 
             alignItems: 'center',borderColor:'#000',borderWidth:1,borderRadius:20 ,backgroundColor:'#fff',marginTop:10,marginBottom:10}}
             onPress={props.onPress} >
         
        <ImageBackground style={{width:width/2.3,height:height/6.8,alignSelf:'flex-start',resizeMode: 'cover'
         ,flex:1,margin:7}}
          source={props.image && { uri: props.image }} imageStyle={{ borderRadius:23}}>
            <View style={{}}>
                  <Text  style={{color:'#000',fontSize:14,fontWeight:'bold',paddingVertical:5}}>{props.id}</Text>
            </View>
        </ImageBackground>
        
        <View style={{alignSelf:'flex-end',width:width/2.2,height:height/6.8}}>
                 <Text style={{color:'#000',fontSize:14,fontWeight:'bold',}}>{props.title }</Text>
                 <View style={{width: width/2.2,height:30,alignSelf:'flex-end',flexDirection:'row',alignItems:'flex-end',flex:1,}}>
                   <View style={{backgroundColor:'#16c79a',width: width/2.2,borderTopLeftRadius:10,borderBottomLeftRadius:10}}>
                      <Text style={{color:'#000',fontSize:14,fontWeight:'bold',paddingVertical:5}}> {props.ticket.egyptian}EGP  {props.ticket.foreign}USD  {props.duration.hours}hours</Text>
                   </View>
                 </View>
              </View>
        
      </TouchableOpacity>
    )
  }
  
  const { width, height } = Dimensions.get('screen')
  const Package=(props)=> {
    
    const [tours ,settours] = useState ([]);
    const [loading ,setLoading] =useState (false);
   
     useEffect(() => {
       async function gettours() {
         try {
           const result = await axios.get(`${URL}/plans`)
           if (result.status === 200) {
            settours(result.data.plans)
            
   
           } else return
         } catch (e) {
           setLoading(false)
           return
         }
         setLoading(false)
       }
   
       gettours()
   
     }, [])
   
       return (
         <View style={styles.contain}>
           <Header />
           <View style={{}}>
             {tours.length > 0 && tours.map((e)=>
              <Card 
                image={e.media[0]} 
                title={e.title}
                ticket={e.ticket} 
                duration={e.duration}
                id={e.id}
                {...props}
                onPress={() => props.navigation.navigate('Plan',{ id: e.id, })}
                />)} 
           </View>
         </View>
       );
     
    }
    const styles=StyleSheet.create({          
  
      contain:{
         
          flex:1,
          backgroundColor:'#000',
          alignItems:'center'
      },
     
    },
    )
  export default Package;