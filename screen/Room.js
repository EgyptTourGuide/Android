

import React, { useEffect, useState } from 'react';
import { Text,TouchableOpacity,View ,StyleSheet,Dimensions,TextInput,ImageBackground, ScrollView} from 'react-native';
import { Search } from '../component/Textinput';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DateField from 'react-native-datefield';

const Header = (props) => {
  
  return (
    <View style={{ alignSelf: 'flex-start' ,backgroundColor:'#000'}}>
      <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', padding: 12, justifyContent: 'space-between' }}>
        <ImageBackground
          source={require('../pic/logo.png')}
          style={{ width: 45, height: 45, backgroudColor: 'blue' }} />
        <Search />
        <Icon name="filter" size={30} color="white" />
      </View>
    </View>
  )
}
const Room=(props)=> {
  const { width, height } = Dimensions.get('screen')
  const [media, setMedia] = useState([])
  console.warn(props.route.params.media)
  console.warn(props)
  const uri=props.route.params.media

  useEffect(()=>{
      setMedia(props.route.params.media)
  },[])
  
    return (

      <View style={styles.contain}>
    <ScrollView>
          <Header />  
          {media.map(image=>
          <ImageBackground style={[styles.imgbackground,{ height: height / 3.7, margin: 3,}]}  source={{uri: image}}>        
          </ImageBackground>)}
      
        <View style={{alignContent:'flex-end',padding:15,}}>
            <Text style={styles.txt}>Room Info</Text>
            <Text style={{fontSize:18,color:'#fff'}}>Number : {props.route.params.number}</Text>
            <Text style={{color:"#fdb827",fontSize:20}}>Price : {props.route.params.price}$ </Text>
            <Text style={styles.txt}>Room characteristics</Text>


            <View style={{flexDirection:'row',justifyContent:"space-between",alignSelf:'flex-end',width:'90%',margin:15,alignItems:'center'}}>
            <Text style={styles.txtroom}>{props.route.params.number}</Text><View style={{marginRight:30}}><FontAwesome5 name='list-ol' color="#fdb827" size={20}></FontAwesome5></View>
            <Text style={{color:'#fff',fontSize:30}}>|</Text>
            <Text style={styles.txtroom}>{props.route.params.bed}</Text><View style={{marginRight:30}}><FontAwesome5 name='bed' color="#fdb827" size={23}></FontAwesome5></View>
            <Text style={{color:'#fff',fontSize:30}}>|</Text>
            <Text style={styles.txtroom}>{props.route.params.food}</Text><View style={{marginRight:30}}><FontAwesome5 name='utensils' color="#fdb827" size={23}></FontAwesome5></View>
            
          </View>



            <Text style={styles.txt}>Duration</Text>
        </View>
              <View style={{flexDirection:'row',alignSelf:'center',paddingVertical:10,}}>
              <DateField
                    labelDate="DD"
                    labelMonth="MM"
                    labelYear= "YYYY"
                  onSubmit={(valueFrom) => console.warn(valueFrom)}
                  styleInput={styles.styleInput}
                  containerStyle={styles.containerStyle}
                />
                <Text style={{color:'#fff',alignSelf:'center'}}>To</Text>
                  <DateField
                   labelDate="DD"
                   labelMonth="MM"
                   labelYear= "YYYY"
                  onSubmit={(valueTo) => console.warn(valueTo)}
                  styleInput={styles.styleInput}
                  containerStyle={styles.containerStyle}
                />
              </View>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={()=>props.navigation.navigate('Ticket')}
                    >
                      <Text style={{textAlign:'center',fontSize:20}}>Reserve</Text>
                  </TouchableOpacity>
                  </ScrollView>
      </View>
    );
  }
  const styles=StyleSheet.create({

    contain:{
        flex:1, 
        backgroundColor:'#000'   
    },
    button:{
      backgroundColor: '#16c79a',
      width:'93%',
      borderRadius: 50,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf:'center'
    },
      txt:{
        fontSize:25,
        color:'#fff'
      },
      imgbackground: {
       
        justifyContent: 'space-between',
        width: '100%',
       resizeMode: 'cover'
      },
      txtroom:{
        fontSize:19,
        color:'#fff',
        marginHorizontal:15
      },
      styleInput:{
        backgroundColor:'#fff',
        color:'red',
        borderColor: '#fff',
        borderRadius: 15,
        borderWidth: 1,
        flex:1
  
      },
      containerStyle:{
        backgroundColor:'#fff',
        width:170,
        borderColor: '#fff',
        borderRadius: 15,
        borderWidth: 1,
        alignSelf:'center',
        marginHorizontal:5
      }
  },)
  export default Room;