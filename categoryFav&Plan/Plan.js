

import React ,{useEffect, useState} from 'react';
import { Text,TouchableOpacity,View ,StyleSheet,Dimensions,ImageBackground, ActivityIndicator,ScrollView,Image} from 'react-native';
import Header from '../component/Header';
import { URL } from '../API/API';
import axios from 'axios';
import StarRating from 'react-native-star-rating';


const Detelis =(props)=>{
  return(
   <View style={{flexDirection:'row',justifyContent:'space-evenly',borderWidth:0,borderColor:"#fff",width:"100%",alignSelf:'center',padding:2}}>
       <Text style={{color:'#fff',fontSize:25,right:35}}>Tickets</Text>
      <View style={{width:70,flexDirection:'row',alignItems:'center'}}>
      <ImageBackground
        resizeMode='cover'
        source={require('../pic/egypt.png')}
        style={{width:30,height:30,marginRight:6}}>
        </ImageBackground>
        <Text style={{color: '#fff',fontSize:17,}}>: {props.ticket.egyptian} EGP</Text>
      </View>
     <View style={{width:70,flexDirection:'row',alignItems:'center'}}>
     <ImageBackground
        resizeMode='cover'
        source={require('../pic/globe.png')}
        style={{width:30,height:30,marginRight:6}}>
        </ImageBackground>
     <Text style={{color: 'white',fontSize:17}}>: {props.ticket.foreign} USD</Text>
     </View>
   </View>
  )}

  const Duration =(props)=>{
    return(
     <View style={{padding:10}}>
        <Text style={{color:'#fff',fontSize:25,}}>Duration</Text>
        <Text style={{color:'#fff'}}>Days : {props.duration.days} 📆</Text>
        <Text style={{color:'#fff'}}>Hours : {props.duration.hours} ⌚️</Text>
     </View>
    )}

    const Features =(props)=>{
      return(
        <View style={{padding:10}}>
        <Text style={{color:'#fff',fontSize:25,}}>Features</Text>
        <Text style={{color:'#fff'}}>"{props.features}"</Text>
       </View>

      )
    }
    const Program =(props)=>{
      return(
        <View style={{padding:10 ,flex:1,justifyContent:'center',alignItems:'center'}}>

       {props.tour && props.tour.map(h=>
       <ImageBackground
         source={{uri : h.place.media[0]}}
         style={{width:width/1.2,height:height/4,marginRight:6,margin:10,}}
         imageStyle={{borderRadius:20 }}>
       <View style={{backgroundColor:'rgba(0,0,0,0.5)',alignItems:'center',flex:1,justifyContent:'center'}}>
         <Text  style={{color:'cornsilk',fontWeight:'500',fontSize:20}}>✾ {h.place.name} ✾</Text>
         <Text style={{color:'cornsilk',fontWeight:'500',fontSize:20}}>✾ {h.from} to {h.to} ✾</Text>
       </View>
       </ImageBackground>
      )}
      </View>
      )
    }

    const Rate = (props) => {
      return (
        <View style={styles.RateBox}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between',padding: 15 ,width:'100%'}}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={{ uri: props.reviews.length > 0 && props.reviews[0].user.picture }} style={{ width: 60, height: 60, borderRadius: 30, }} />
              <Text style={{ color: '#fff', marginLeft: 5 }}>{props.reviews.length > 0 && props.reviews[0].user.name}</Text>
            </View>
            <View style={{ alignSelf: 'center', }}>
              <StarRating
                disabled={false}
                activeOpacity={0.5}
                emptyStar={'star-o'}
                fullStar={'star'}
                halfStar={'star-half-full'}
                iconSet={'FontAwesome'}
                maxStars={5}
                starSize={20}
                rating={props.reviews.length > 0 && props.reviews[0].rate}
                fullStarColor={'#fdb827'}
              />
            </View>
          </View>
          <View>
            <Text style={{ color: 'white', fontSize: 18 }}>"{props.reviews.length > 0 && props.reviews[0].comment}"</Text>
          </View>
        </View>
      )
    }

const { width, height } = Dimensions.get('screen')

const Plan=(props)=> {
  const [plan ,setPlan] = useState (null);
  const [loading ,setLoading] =useState (true);
  useEffect(()=>{
    async function getPlan(){
     const id = props.route.params.id
      try {
        const result = await axios.get(`${URL}/plans/${id}`)
        if (result.status === 200) {
          setPlan(result.data.plan)
        } else return
      } catch (e) {
         console.log(e)
        setLoading(false)
        return
      }
      setLoading(false)
    }

    getPlan()
   
  },[])
     
     if(loading)return (<View style={{flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center'}}><ActivityIndicator color='white' size={25}/></View>)
  
     return (
       <View style={styles.contain}>
          <ScrollView>

          
            <ImageBackground style={styles.imgbackground} source={{uri: plan && plan.media[0] }}>
              
            </ImageBackground>
            
            
              <View style={{alignItems:'flex-end',flexDirection:'row',justifyContent:'space-between'}}> 
                <Text style={{color:'#fff' ,padding:10,width:width/1.7,fontSize:16}}>{plan.title}</Text>
                <View style={{alignSelf:'center',width:100,marginHorizontal:15,paddingVertical:5}}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=> props.navigation.navigate('Check',{id :plan.id,ticket:plan.ticket,media:plan.media[0],title :plan.title})}
                    >
                      <Text style={{textAlign:'center',fontSize:20,color:'#fff',fontWeight:'600'}}>Check</Text>
                  </TouchableOpacity>
                </View>
               
              </View>
           
            <Text style={{color:'#fff',padding:10,fontSize:16}}>{plan.description}</Text>
      <Detelis ticket={plan && plan.ticket} />
      <Duration duration={plan && plan.duration} />
      <Features  features={plan && plan.features}/>
            <Text style={{color:'#fff',fontSize:25,textAlign:'left',padding:10}}>Tour✈︎</Text>
      <Program  tour={plan && plan.tour}/>

            <View style={{ height: 50, flexDirection: 'row', justifyContent: 'space-between', padding: 12 }}>
            <View style={{ width: 60, }}>
              <Text style={{ color: '#fdb827', fontSize: 25, fontWeight: "bold" }}>Rate</Text>
            </View>
             <View style={{width:width/4,alignSelf:'center'}}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => plan && props.navigation.navigate('ReviewPlan', { questions: plan.questions, id: plan.id })} >
                <Text style={{color:'#fff', fontWeight: 'bold',fontSize: 15,textAlign:'center'}}>Add Review</Text>
                </TouchableOpacity>
                </View>
             </View>
               <View style={{alignSelf:'center',justifyContent:'center',paddingVertical :10}}>
               <Rate  rate={plan && plan.rate} reviews={plan && plan.reviews} />
               </View>
               
           

           </ScrollView>
       </View>
     );
  }
  const styles=StyleSheet.create({          

    contain:{

        flex:1,
        backgroundColor:'#000',
        alignItems:'center'
    },
    imgbackground:{
      height:  height /4,
      flexDirection: 'column',
      justifyContent: 'space-between',
      paddingBottom: 12, width: '100%',
      resizeMode: 'cover'
   },
   button:{
    backgroundColor: '#16c79a',
    borderRadius: 50,
    height: 40,
    justifyContent:'center'
  },
  RateBox: {
    width:width/1.1,
    height: height / 5,
    borderRadius: 25,
    borderColor: "#fff",
    borderWidth: 2,
    alignSelf: 'center',
    alignItems: 'center'
  },
   
  },
  )
  export default Plan;