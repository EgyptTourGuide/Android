
import React from 'react';
import { Text,Button,View ,StyleSheet,ImageBackground} from 'react-native';
import { Search} from '../component/Textinput';
import Icon from 'react-native-vector-icons/FontAwesome';


const Header = (props)=>{

  return(
    <View style={{width: '100%',alignItems: 'center', flexDirection: 'row', padding: 12, justifyContent: 'space-between',}}>
               <ImageBackground
                source={require('../pic/logo.png')}
                style={{width:45,height:45,marginLeft:10}}/>
              <Search/>
              <Icon  name="filter" size={30} color="white"/>
    </View>
  )
}
const Notification=()=> {
    return (
      <View style={styles.contain}>
        <View style={{backgroundColor:'green'}}><Header /></View>
        

       <View style={{backgroundColor:'red',flexDirection:'row',}}>
       <View style={{backgroundColor:'blue',width:'20%'}}>

       </View>
           <View style={{alignItems:'center',width:'70%'}}>
                  <Text style={{color:"#fff"}}>Hi Hossam thanks for support Hi Hossam thanks for support
                     Hi Hossam thanks for support
                     Hi Hossam thanks for support
                  </Text>
            </View>
            <View style={{backgroundColor:'blue',width:'20%'}}>

       </View>
             
         </View> 
      </View>
    );
  }
  const styles=StyleSheet.create({

    contain:{
        flex:1,
       
        alignItems:'center',
        backgroundColor:'black'
    
    }
  },
  )
  export default Notification;