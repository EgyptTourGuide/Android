import React from 'react'
import { useState } from 'react';
import {
    StyleSheet,
    KeyboardAvoidingView,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


const FormReview = (props) => {
  const [name, setName] = useState('');

  return(
      <View style={{backgroundColor:"red",height:150,}}>
      <TextInput />
      <Text>{name}</Text>
      </View>
  );
}
const Place = (props) => {
  const [visible, setVisible] = useState(false);

  const getTitle = () => {
    setVisible(true);
  }

  return (
    <View>
      <View style={styles.button}>
        <TouchableOpacity style={styles.center} onPress={getTitle}>
          <Text style={styles.plusSign}>Hossam</Text>
        </TouchableOpacity>
        {
          visible && <FormReview />
        }
      </View>
    </View>
  );
};


const styles=StyleSheet.create({



})
export default Place;

