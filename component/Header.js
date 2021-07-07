import React from 'react';
import { Text,Button,View ,StyleSheet,ImageBackground,  ScrollView} from 'react-native';
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
  export default Header;