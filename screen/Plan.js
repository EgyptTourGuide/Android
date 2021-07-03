

import React from 'react';
import { Text,TouchableOpacity,View ,StyleSheet,Dimensions,TextInput,ImageBackground} from 'react-native';
import DateField from 'react-native-datefield';

const Ticket=(props)=> {
  const { width, height } = Dimensions.get('screen')

    return (
      <View style={styles.contain}>
        <DateField
                  labelDate="DD"
                  labelMonth="MM"
                  labelYear= "YYYY"
                  onSubmit={(value) => console.warn(value)}
                  styleInput={styles.styleInput}
                  containerStyle={styles.containerStyle}
                />
      </View>
    );
  }
  const styles=StyleSheet.create({

    contain:{
        height:100,
        flex:1,
        backgroundColor:'#000',

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
      width:180,
      borderColor: '#fff',
      borderRadius: 15,
      borderWidth: 1,
      alignSelf:'center',
    }
  },
  )
  export default Ticket;