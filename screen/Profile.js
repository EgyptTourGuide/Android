import React, { useEffect, useState } from 'react';
import { Text, View, Button, StyleSheet, TextInput, Dimensions, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { Input } from '../component/Textinput';
import { MyButton } from '../component/Button'
import Icon from 'react-native-vector-icons/Ionicons'
import { launchImageLibrary } from 'react-native-image-picker'
import { Authaxios, URL } from '../API/API';

const { width, height } = Dimensions.get('window')

const profile = (props) => {

  const [username, setUsername] = useState('')
  const [FullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false)
  const [Email, setEmail] = useState('');
  const [Country, setCountry] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [Password, setPassword] = useState('');
  const [pic, setPic] = useState(null)


  useEffect(() => {

    async function getProfile() {
      try {
        const response = await Authaxios.get(`${URL}/profile`)
        if (response.status === 200) {
          setUsername(response.data.username)
          setFullName(response.data.name)
          setEmail(response.data.email)
          setCountry(response.data.country)
          setPhoneNumber(response.data.phone)
          setPic(response.data.picture)
        }
        else {

          alert("Error")
        }
        console.warn(response.data)
      } catch (e) {
        console.warn(e)
      }
    }

    getProfile()

  }, [])



  const _onPress = () => {

    try {
      launchImageLibrary({ mediaType: 'photo' }, response => {
        setPic({ uri: response.uri, type: response.type, name: response.fileName })
      })

    } catch (e) {
      alert(('pic Error'))
    }
  }
  const _handelSubmitSave = () => {

    const response = Authaxios.post(`${URL}/profile`)
    if (response.status === 200) {
      setUsername
      setFullName
      setEmail
      setCountry
      setPhoneNumber

    }
    else {

      alert("Error")
    }
    console.warn(response.data)
  }

  return (
    <ImageBackground
      style={{ flex: 1, resizeMode: 'cover', backgroundColor: '#000' }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
        <ScrollView contentContainerStyle={styles.scrollviewstyle}
          showsVerticalScrollIndicator={false}>

          <TouchableOpacity onPress={_onPress} style={{ backgroundColor: 'rgba(0,0,0,0.3)', borderRadius: width / 3.8, justifyContent: 'center', alignItems: 'center', marginBottom: 12, borderWidth: 1, borderColor: 'white' }}>
            <ImageBackground resizeMode='cover' source={{ uri: pic !== null && pic.uri }} style={styles.ImageBackground} imageStyle={{ borderRadius: width / 3.8 }}>
              <View style={{ borderWidth: 1, borderRadius: 35 / 2, justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-end', width: 35, height: 35, backgroundColor: 'white', right: 10 }}>
                <Icon name='camera-outline' size={25} color='black' />
              </View>
            </ImageBackground>
          </TouchableOpacity>
          <Text style={styles.txt}>FullName</Text><Input value={FullName} onChangeText={(FullName) => setFullName(FullName)} />
          <Text style={styles.txtdisabled}>Username</Text><Input value={username} disabled={false} />
          <Text style={styles.txtdisabled}>Email</Text><Input value={Email} placeholderTextColor="red" disabled={false} keyboardType='email-address' />
          <Text style={styles.txt}>Country</Text><Input value={Country} onChangeText={(Country) => setCountry(Country)} />
          <Text style={styles.txt}>PhoneNumber</Text><Input value={PhoneNumber} onChangeText={(PhoneNumber) => setPhoneNumber(PhoneNumber)} keyboardType="numeric" />
          <Text style={styles.txt}>Password</Text><Input onChangeText={(Password) => setPassword(Password)} secureTextEntry={true} />
          <Text style={styles.txt}>Confirm Password</Text><Input onChangeText={(Password) => setPassword(Password)} secureTextEntry={true} />
          <MyButton onPress={_handelSubmitSave}>Save</MyButton>
        </ScrollView>
      </View>
    </ImageBackground>
  )

}
const styles = StyleSheet.create({
  scrollviewstyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    alignSelf: 'flex-start',
    color: '#fff'

  },
  txtdisabled: {
    alignSelf: 'flex-start',
    color: 'red'
  },
  ImageBackground: {
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    width: width / 2,
    height: width / 2,
    borderRadius: width / 3.8
  }
})
export default profile;

