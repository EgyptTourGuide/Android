import React from 'react'
import { useState, useEffect } from 'react';
import { ImageBackground, View, TouchableOpacity, Text, ScrollView, Image, Dimensions, ActivityIndicator, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { URL } from '../API/API'
import StarRating from 'react-native-star-rating';
import MapView, { Marker } from 'react-native-maps'
import axios from 'axios';
import Header from '../component/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { height, width } = Dimensions.get("window")


const Discrption = (props) => {
  const [liked, setLiked] = useState(false);
  
  const handleLike =  ()=>{
    if (liked ==true|| liked ==false) {
     setLiked((!liked))
     AsyncStorage.setItem('love', JSON.stringify(liked));
     console.warn(liked)
    }
 }
 useEffect(() => {

   async function getLiked() {
     try {
      
       const result = await Authaxios.post(`${URL}/profile/favourites`)
       if (result.status === 200) {
        

       } else return
     } catch (e) {
       setLoading(false)
       return
     }
     setLoading(false)
   }

   getLiked()

 }, [])

  return (
    <ScrollView style={{ backgroundColor: "#000", width: "100%", }} contentContainerStyle={{ alignItems: 'center', }}>
      <View style={{ width: width / 1, flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ marginLeft: 5, justifyContent: 'center', }}>
          <StarRating
            disabled={true}
            activeOpacity={0.5}
            emptyStar={'star-o'}
            fullStar={'star'}
            halfStar={'star-half-full'}
            iconSet={'FontAwesome'}
            maxStars={5}
            starSize={18}
            rating={props.rate}
            fullStarColor={'#fdb827'}
          />

        </View>

        <View style={{flexDirection:'row',paddingTop:10,height:50,}}>
          <Text style={{ color: "#fff", fontSize: 23, textAlign: 'center', fontWeight: 'bold', marginRight: 5}}>{props.title}</Text>
          <Text style={{ color: "#fdb827", fontSize: 25, textAlign: 'center', fontWeight: 'bold', marginRight: 12 }}>{props.stars}</Text>
          <View style={{margin:7,right:15}}>
          <StarRating
            disabled={true}
            activeOpacity={0.5}
            emptyStar={'star-o'}
            fullStar={'star'}
            halfStar={'star-half-full'}
            iconSet={'FontAwesome'}
            maxStars={1}
            starSize={16}
            rating={1}
            fullStarColor={'#fdb827'}
          />

          </View>
          
        </View>
        <View style={{ justifyContent: 'center' ,marginRight: 10, }}>
        <TouchableOpacity onPress={() => handleLike()}>
                <AntDesign
                  name={liked ? "heart" : "hearto"}
                  size={25}
                  color={liked ? "red" : "#fff"}
                />
              </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.Discrptions}>"{props.dis}"</Text>
    </ScrollView>
  )
}
const Location = (props) => {
  if (props.lat)
    return (

      <View style={styles.MapView}>
        <MapView
          style={styles.map}
          showsCompass={true}
          toolbarEnabled={false}
          scrollEnabled={false}
          region={{
            latitude: props.lat,
            longitude: props.long,
            latitudeDelta: 0.0122,
            longitudeDelta: 0.033,
          }}
          moveOnMarkerPress={false}
        >
          <Marker
            coordinate={{
              latitude: props.lat,
              longitude: props.long,
            }}
            title='Hi'
            description='lets go to this Hotel'
            opacity={1}
            style={{ backgroundColor: 'red', width: 10, height: 10 }}

          />
        </MapView>
      </View>
    )
  else return <View />

}
const Feature = (props) => {
  return (
    <View>
      <Text style={{ color: "#fff", fontSize: 25, fontWeight: 'bold', marginLeft: 10 }}>Features</Text>
       <View style={{flexDirection:'column',width:150,}}>
         <View style={{ flexDirection:'row',flexWrap:'wrap-reverse',paddingHorizontal :10,width:180}}>
           {props.FeHotel.length > 0 && props.FeHotel.map(features =><Text style={styles.txt}>#{features}</Text>)}
            </View>
       </View>
    </View>
  )
}

const Rate = (props) => {
  return (
    <View style={styles.RateBox}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: "100%", padding: 15 }}>
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
const Card = (props) => {
  
  const { width, hight } = Dimensions.get('window')
  const [Room ,setroom]=useState(null)
  return (
    <View style={{ width: width, justifyContent: 'center', alignItems: 'center', marginBottom: 12 }}>
      <View style={{ width: width - 30, height: height / 4, borderRadius: 30, }}>
        <ImageBackground style={{width:width-30 ,height:height/4,backgroundColor:'gray',borderRadius:30,flexDirection:'row'}} imageStyle={{borderRadius:30}} source={{uri:props.media[0]}}>
          <View style={{flexDirection:'row',justifyContent:"space-between",alignSelf:'flex-end',width:'90%',margin:15,alignItems:'center'}}>
            <Text style={styles.txtroom}>{props.number}</Text><View style={{marginRight:25}}><FontAwesome5 name='list-ol' color="#fdb827" size={20}></FontAwesome5></View>
            <Text style={styles.txtroom}>{props.bed}</Text><View style={{marginRight:25}}><FontAwesome5 name='bed' color="#fdb827" size={23}></FontAwesome5></View>
            <Text style={styles.txtroom}>{props.food}</Text><View style={{marginRight:25}}><FontAwesome5 name='utensils' color="#fdb827" size={23}></FontAwesome5></View>
             <TouchableOpacity
              style={styles.button}
              onPress={() => props.navigation.navigate('Room',{
                id:props.id ,
                HotelId: props.HotelId,
                media:props.media ,
                price:props.price,
                number:props.number,
                bed:props.bed,
                food:props.food
                })}>
              <Text style={{color:'#fff',fontSize:22}}>{props.price}$</Text>
             </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </View>
  )
}
const Rooms = (props) => {



  return (
    <View style={{ flexDirection: 'column' }}>
      <View><Text style={{ color: 'white', fontSize: 24, fontWeight: "bold", marginLeft: 15 ,paddingVertical:10}}>Rooms</Text></View>
      <View>
       {props.Hotelrooms.length > 0 && props.Hotelrooms.map(room=><Card
              {...props}
              id={room.id}
              bed={room.bed}
              number={room.number}
              price={room.price}
              media={room.media}
              food={room.food}
          />)}
      </View>
    </View>
  )
}
export default function Hotel(props) {

  const [hotel, sethotel] = useState(null)
  const [loading, setLoading] = useState(true)
  const [scrollContainer, setScroll] = useState(true)

  useEffect(() => {

    async function gethotel() {

      try {
        const id = props.route.params.hotel.id
        const result = await axios.get(`${URL}/hotels/${id}`)
        if (result.status === 200) {
          sethotel(result.data)

        } else return
      } catch (e) {
        setLoading(false)
        return
      }
      setLoading(false)
    }

    gethotel()

  }, [])


  if (loading) return <View style={{ flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }}><ActivityIndicator color='white' size={25} /></View>
  else
    return (

      <View style={styles.Container}>
        <ScrollView scrollEnabled={scrollContainer}>
          <ImageBackground style={styles.imgbackground} source={{ uri: hotel && hotel.media[0] }}>
            <Header />
          </ImageBackground>
          <Discrption title={hotel && hotel.name} dis={hotel && hotel.description}  rate={hotel && hotel.rate} stars={hotel && hotel.stars} />
          <Feature FeHotel={hotel && hotel.features} />
          <Rooms {...props} scrollContainer={scrollContainer} setScroll={setScroll} HotelId={hotel.id} Hotelrooms={hotel && hotel.rooms} />
          <Location lat={hotel && hotel.location.coordinates[0]} long={hotel && hotel.location.coordinates[1]} />


          <View style={{ height: 50, flexDirection: 'row', justifyContent: 'space-between', padding: 12 }}>
            <View style={{ width: 60, }}>
              <Text style={{ color: '#fdb827', fontSize: 25, fontWeight: "bold" }}>Rate</Text>
            </View>
            <View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => hotel && props.navigation.navigate('ReviewHotel', { questions: hotel.questions, id: hotel.id })}
              >
                <Text style={{color:'#fff', fontWeight: 'bold',fontSize: 15,}}>Add Review</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Rate rate={hotel && hotel.rate} reviews={hotel && hotel.reviews} />
        </ScrollView>

      </View>
    )
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#000',
  },
  imgbackground: {
    height: height / 3.2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 12, width: '100%',
    resizeMode: 'cover'
  },
  MapView: {

    width: '90%',
    alignSelf: 'center',
    height: height / 4
  },
  map: {
    alignItems: 'center',
    width: "100%",
    height: height / 4

  },
  RateBox: {
    width: '90%',
    height: height / 5
    , borderRadius: 25,
    borderColor: "#fff",
    borderWidth: 2,
    alignSelf: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#16c79a',
    width: 120,
    borderRadius: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'

  },
  txt: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fdb827',
  },
  timetable: {
    color: 'white',
    textTransform: 'capitalize',
    textDecorationLine: 'underline',
    paddingLeft: 10,
  },
  Discrptions: {
    width: '100%',
    backgroundColor: '#000',
    color: '#fff',
    padding: 5,
    textTransform: "lowercase",
    fontStyle: 'italic',
    fontSize: 17
  },
  txtroom:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:20
  }
})