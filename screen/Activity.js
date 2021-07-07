import React,{useState,useEffect} from 'react';
import { Text,Button,View ,StyleSheet,ImageBackground,Dimensions,ActivityIndicator,TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { URL } from '../API/API';
import axios from 'axios';
import Header from '../component/Header';
import { ScrollView } from 'react-native-gesture-handler';
const{height,width}=Dimensions.get("window")


  const Discrption=(props)=>{
    const [liked, setLiked] = useState(false);
    return(
      <View style={{backgroundColor:'#000',flex:1}}>

        <View style={{flexDirection:'row',width:"100%",justifyContent:'space-between'}}>
          <Text style={{color:'#fff',padding:10,fontSize:25,fontWeight:'bold'}}>{props.name}</Text>
          <View style={{alignSelf:'center'}}>
             <TouchableOpacity style={{marginEnd:10}} onPress={() => setLiked((isLiked) => !isLiked)}>
                <AntDesign
                  name={liked ? "heart" : "hearto"}
                  size={28}
                  color={liked ? "red" : "#fff"}
                />
              </TouchableOpacity>
          </View>
        </View>
        
        <Text style={{color:'#fff',padding:10 ,fontSize:15}}>
          {props.des}
        </Text>
        
        <Text style={{color:'#fdb827',padding:10 ,fontSize:15}}>
          #{props.tags}
        </Text>
      </View>
    )
  }
  const Detelis =(props)=>{
    return(
    <ScrollView style={{height:height/3.8,backgroundColor:'#000'}}>
     <View style={{flexDirection:'row',justifyContent:'space-evenly',borderWidth:0,borderColor:"#fff",width:"100%",alignSelf:'center',padding:2}}>
     <Text style={{color:'#fff',fontSize:25,right:35}}>Tickets</Text>
    
        <View style={{width:70,flexDirection:'row',alignItems:'center'}}>
        <ImageBackground
          resizeMode='cover'
          source={require('../pic/egypt.png')}
          style={{width:30,height:30,marginRight:6}}>
  
          </ImageBackground>
       <Text style={{color: 'white',fontSize:18,}}>: {props.ticket.egyptian.price} EGP</Text>
        </View>
      
       <View style={{width:70,flexDirection:'row',alignItems:'center'}}>
       <ImageBackground
          resizeMode='cover'
          source={require('../pic/globe.png')}
          style={{width:30,height:30,marginRight:6}}>
  
          </ImageBackground>
       <Text style={{color: 'white',fontSize:18}}>: {props.ticket.foreign.price} USD</Text>
       </View>
    
     </View>
     <Text style={{color:'#fff',fontSize:25,marginLeft:10}}>TimeTable</Text>
     <View>
       {props.hours && props.hours.map(h=>
       <Text style={styles.timetable}> {h.day} from <Text style={{color:"#fdb827"}}>{h.from}</Text> to <Text style={{color:'#fdb827'}}>{h.to}</Text></Text>)}
     </View>
    
    
    </ScrollView>
    )}
    const Card = (props) => {
      const { width, height } = Dimensions.get('window')
      return (
        <TouchableOpacity style={{ width: width / 2.2, height: height / 4, borderRadius: 15, backgroundColor: 'gray', margin: 5 }}
          onPress={props.onPress}
          activeOpacity={0.8}>
    
          <ImageBackground source= {{ uri: props.image }} style={{ resizeMode: 'cover', flex: 1, padding: 10, justifyContent: 'flex-end' }} imageStyle={{ borderRadius: 15 }}>
            <Text style={{ backgroundColor: 'rgba(0,0,0,0.5)', color: 'white', alignSelf: 'flex-start', fontSize: 22, width: '100%', padding: 2 }}>{props.name}</Text>
    
          </ImageBackground>
    
        </TouchableOpacity>
      )
    }
    

export default function Activity (props){

  const [ activity, setActivity ] = useState(null)
  const [ loading, setLoading ] = useState(true)
  const [placeactivity ,setPlaceActivity]=useState([])

  useEffect(()=>{
    
    async function getActivity(){

      try{
      const id = props.route.params.activity.id
      const name =props.route.params.activity.name
      const result = await axios.get(`${URL}/activity/${id}`)
      const res = await axios.get(`${URL}/places?tag=${name}`)

      if(result.status === 200 && res.status===200){
        
      setActivity(result.data.activity)
      setPlaceActivity(res.data.places)
      console.warn(res.data.places)

      }else return
      }catch(e){
        console.warn(e)
       return
      }
      setLoading(false)
    }

    getActivity()

   }, [])
   if(loading)return <View style={{flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center'}}><ActivityIndicator color='white' size={25}/></View>
   else 
   return (
      <View style={styles.contain}>
        <ScrollView>
             <ImageBackground style={styles.imgbackground} source={{uri: activity.media[0]}}>
               <Header />
             </ImageBackground>
              <Discrption name={activity.name} des={activity.description} tags={placeactivity[0].tags} />
              <Detelis hours={ placeactivity[0].hours} ticket={ placeactivity[0].ticket} />
              <View style={{bottom:25,}}>
                <Text style={{color:'#fff',fontSize:25,padding:10}}>Requirements</Text>
                <Text style={{color:'#fdb827',fontSize:15,paddingLeft:10}}> '{placeactivity[0].requirements}' </Text>
              </View>
              <Text style={{color:'#fff',fontSize:25,padding:10,bottom:15}}>Where Can Do It</Text>
              <Card image={placeactivity[0].media[0]} name={placeactivity[0].name} />
           
            </ScrollView>
      </View>

    );
  }
  
 
  const styles=StyleSheet.create({

    contain:{
        flex:1,
        backgroundColor:'#000'
    },
    imgbackground:{
      height:  height / 3.2,
      flexDirection: 'column',
      justifyContent: 'space-between',
      paddingBottom: 12, width: '100%',
      resizeMode: 'cover'
   },
   timetable:{
    color: 'white',
    textTransform:'capitalize',
    textDecorationLine:'underline',
    paddingLeft:10,
   }
  },
  )
