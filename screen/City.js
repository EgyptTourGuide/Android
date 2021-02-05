import React from 'react'
import { ImageBackground, View, Text, TouchableOpacity ,} from 'react-native' ;
import Icon from 'react-native-vector-icons/FontAwesome';
import { AntDesign ,EvilIcons } from '@expo/vector-icons'; 
import { ImageCities } from '../component/Images'
import { Search} from '../component/Textinput';



export default function City ({navigation}){
    
    
    return(

        <View style={{flex:1,alignItems:'center',justifyContent:"center"}}> 
          <ImageCities/>
            <Search/>

              <View style={{left:90,top:4}}><Icon name="search" size={18} color="#393e46"/></View>
               
               <TouchableOpacity style={{flex:1,top:175,left:160}}>
                   <AntDesign name="heart" size={24} color="red" onPress={this.onPress} />
                </TouchableOpacity>

                <TouchableOpacity style={{flex:1,top:175}}>
                  <EvilIcons name="location" size={30} color="white" />
                </TouchableOpacity>

                <TouchableOpacity style={{top:178,left:-135 ,flexDirection:'row'}}>
                  <AntDesign name="staro" size={22} color="yellow" />
                  <AntDesign name="staro" size={22} color="yellow" />
                  <AntDesign name="staro" size={22} color="yellow" />
                  <AntDesign name="staro" size={22} color="yellow" />
                </TouchableOpacity>
           <View>
              <TouchableOpacity style={{alignItems:'center',left:163,bottom:35,}}>
                <Icon  name="filter" size={27} color="white"/>
              </TouchableOpacity>
          
                 <ImageBackground 
                   source={require('../pic/logo.png')}
                   style={{width:40,height:40,flex:1,right:161,bottom:70}}/>
            </View>
           
        
        </View>
    )
    }