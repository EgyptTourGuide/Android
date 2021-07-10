import React,{useEffect, useState} from 'react';
import { Text,TouchableOpacity,View ,StyleSheet,Dimensions,ImageBackground} from 'react-native';
import DateField from 'react-native-datefield';
import { Input } from '../component/Textinput';
import { Authaxios, URL } from '../API/API';
import Header from '../component/Header';



const { width, height } = Dimensions.get('screen')
const Check=(props)=> {
      const[valueTo,setvalueTo]=useState('')
      const[valueFrom,setvalueFrom]=useState('')
      const [numberadult, setNumberadult] = useState('');
      const [price ,setPrice]=useState({egyptian: props.route.params.ticket.egyptian, foreign: props.route.params.ticket.foreign})
    

      const handelSubmitReservePLan = async() => {
  
        if (!valueFrom || !valueTo) {
          alert(('Please Fill Date'));
          return;
        }
        if (!numberadult) {
            alert('Please fill numberadult');
            return;
          }
        
      
        let startDate = `${valueFrom.getFullYear()}-${valueFrom.getMonth()+1}-${valueFrom.getDate()}`
    
        let planId = props.route.params.id
    
        try{
        let result = await Authaxios.post(`${URL}/plans/${planId}/check`, {startDate, to, planId,numberadult })
        if(result.status=== 201){
          alert('Your request is send')
          
        }
      }catch(e){
        console.warn(e.response.data)
        alert('Error!')
      }
      }
    console.warn(props)
    return (
      <View style={styles.contain}>
                    <Header />  
              <ImageBackground style={styles.imgbackground} source={{uri: props.route.params.media }}>
              <View style={{backgroundColor:'rgba(0,0,0,0.5)',height:height /3.1,}}>
                  <View style={{alignItems:'center',justifyContent:'center',alignSelf:'center',alignContent:'center',flex:1}}>
                      <Text style={{color:"cornsilk",fontSize:17,textAlign:'center'}}>
                      ❁  { props.route.params.title}  ❁
                      </Text>
                  </View>
          
                 </View>
              </ImageBackground>
          <View>
        </View>  
        <Input placeholder='Number of Person                                       
         👥' onChangeText={(numb) =>
            { setNumberadult(numb); setPrice({egyptian: props.route.params.ticket.egyptian * numb, foreign:  props.route.params.ticket.foreign * numb})}}
               keyboardType="numeric" />
         <View style={{borderRadius:15,borderColor:'#fff',borderWidth:1,width:width/1.6,height:40,paddingHorizontal:10,backgroundColor:"#fff"}}>
          <Text style={{color:"#000",fontSize:16,fontWeight:'700'}}>Price: {price.egyptian} 🇪🇬</Text>
          <Text style={{color:"#000",fontSize:16,fontWeight:'700'}}>Price: {price.foreign} 🇺🇸</Text> 
        </View>      
      
       
      
        <View style={{alignSelf:'center',paddingVertical:10,flexDirection:'row'}}>
         <View style={{alignSelf:'center',right:30}}><Text style={{color:'#fff',fontSize:20}}>StartDate  📆 </Text></View>  
              <DateField
                    labelDate="DD"
                    labelMonth="MM"
                    labelYear= "YYYY"
                    onSubmit={(value) => setvalueFrom(value)}
                    styleInput={styles.styleInput}
                    containerStyle={styles.containerStyle}
                />
                

              </View>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={()=> handelSubmitReservePLan()}
                    >
                      <Text style={{textAlign:'center',fontSize:20}}>Reserve$</Text>
                  </TouchableOpacity>
      </View>
    );
  }
  
 
  const styles=StyleSheet.create({

    contain:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#000'
    },
    imgbackground:{
        height:  height /3.1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingBottom: 12, width: '100%',
        resizeMode: 'cover',
        
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
        right:20
      },
      button:{
        backgroundColor: '#16c79a',
        width:'65%',
        borderRadius: 15,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf:'center'
      }
  },
  )
  export default Check;