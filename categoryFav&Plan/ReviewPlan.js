import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { RadioButton } from 'react-native-paper';
import StarRating from 'react-native-star-rating';
import { Authaxios, URL } from '../API/API'
import { AuthContext } from '../Auth/AuthProvider';

const { width, height } = Dimensions.get('window')

const Card = (props) => {
  const { width, height } = Dimensions.get('window')
  const [checked, setChecked] = useState(null);
  const onChangeRadio = (value) => {
    if (true) {
      let ans = props.Answars
      ans[props.index] = value
      props.setAnsw(ans)
    }
  }
  return (

    <View style={{ width: width, justifyContent: 'center', alignItems: 'center', paddingTop: 20, }}>
      <View style={{ width: width / 1.2, height: height / 6.5, borderRadius: 25, backgroundColor: "#fbeeac" }}>

        <View style={styles.continerques}>
          <Text style={styles.ques}>{props.ques}</Text></View>
        <View style={{ width: width / 1.6, alignItems: 'center', justifyContent: 'space-around', alignSelf: 'center', flexDirection: 'row', marginTop: 30 }}>
          <RadioButton
            value={checked}
            status={checked && checked === true ? 'checked' : 'unchecked'}
            onPress={() => { setChecked(true); onChangeRadio(true) }}
          />
          <Text style={{ textAlign: 'left', right: 20, fontWeight: 'bold' }}>Yes</Text>
          <RadioButton
            value={checked}
            status={checked !== null && checked === false ? 'checked' : 'unchecked'}
            onPress={() => { setChecked(false); onChangeRadio(false) }}
          />
          <Text style={{ textAlign: 'right', right: 20, fontWeight: 'bold' }}>No</Text>
        </View>
      </View>
    </View>
  )
}

const CardComment = (props) => {
  const _onChangeText = (text) => {
    props.setcomment(text)
  }
  return (
    <View style={{ width: width, justifyContent: 'center', alignItems: 'center', paddingTop: 20, }}>
      <View style={{ width: width / 1.2, height: height / 8, borderRadius: 20, backgroundColor: '#fbeeac', }}>
        <View style={{ alignSelf: "flex-end", padding: 10 }}>
          <StarRating
            disabled={false}
            activeOpacity={0.5}
            emptyStar={'star-o'}
            fullStar={'star'}
            halfStar={'star-half-full'}
            iconSet={'FontAwesome'}
            maxStars={5}
            starSize={18}
            rating={props.Rate}
            selectedStar={(rating) => props.setRate(rating)}
            fullStarColor={'#fdb827'}
          />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Comment ..."
          value={props.comment}
          onChangeText={_onChangeText}
        >

        </TextInput>
      </View>

    </View>
  )
}
function Review(props) {

  const [questions, setQ] = useState([])
  const [Answars, setAnsw] = useState([null, null, null, null])
  const [comment, setcomment] = useState('')
  const [Rate, setRate] = useState(0)

  const context = useContext(AuthContext)
  useEffect(() => {
    console.log(props.route.params)
    setQ(props.route.params.questions)
  }, [])

  const _onPress = async () => {
    if (Answars.every(value => value !== null)) {
      if (Rate !== 0 && comment.trim() !== '') {
        console.warn(`Answers: ${Answars}\nRate; ${Rate}\ncomment: ${comment}`)
        try {
          const response = await Authaxios.post(`${URL}/plan/${props.route.params.id}/review`, { answers: Answars, rate: Rate, comment: comment })

          if (response.status === 201) {
            alert('Comment Created!')
            props.navigation.goBack()
          }
        } catch (err) {
          context.logout()
          console.warn(err)
          console.log(err)
        }
      }
      else {
        alert('Massing Comment Or Rate ')
      }
    } else {
      alert('Missing Answers!')
    }
  }
  return (

    <View style={{ backgroundColor: '#fff', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ScrollView
        contentContainerStyle={styles.scrollviewstyle}
        showsVerticalScrollIndicator={true} >
        {questions.length > 0 && questions.map((q, index) => <Card Answars={Answars} setAnsw={setAnsw} index={index} ques={q} key={q} />)}
        <CardComment comment={comment} setcomment={setcomment} Rate={Rate} setRate={setRate} />
        <TouchableOpacity activeOpacity={0.6} onPress={_onPress}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  ques: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: 'left',
    color: '#000'
  },
  continerques: {

    height: 45,
    width: "90%",
    justifyContent: 'center',
    alignSelf: 'center'
  },
  button: {
    backgroundColor: "#16c79a",
    borderRadius: 25,
    width: 140,
    height: 45,
    alignSelf: 'center',
    marginTop: 9
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'open-sans',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 9
  },
  input: {
    width: "90%",
    height: 40,
    color: '#000',
    alignSelf: 'center',
    borderBottomWidth: 0.5,
  },
  scrollviewstyle: {
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default Review