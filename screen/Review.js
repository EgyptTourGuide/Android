import React ,{ useState,useEffect }from 'react';
import { Text,View ,StyleSheet, Dimensions,ImageBackground,TouchableOpacity,TextInput, ScrollView} from 'react-native';
import { RadioButton } from 'react-native-paper';
import Star from '../component/StarRating';
import StarRating from 'react-native-star-rating';



const { width, height } = Dimensions.get('window')

 const Card =(props)=>{
     const { width, height } = Dimensions.get('window')
     const [Add , setAdd] = useState(false)   
     const [checked, setChecked] = useState(null);


 return(
   
   <View style={{width:width,justifyContent:'center',alignItems:'center',paddingTop:20,}}>
     <View style={{width:width/1.2,height:height/6.5,borderRadius:25,backgroundColor:"#fbeeac"}}>
       
    
       <View style={styles.continerques}>
          <Text style={styles.ques}>{props.ques}</Text></View>

            <View  style={{width:width/1.6,alignItems:'center',justifyContent:'space-around',alignSelf:'center',flexDirection:'row',marginTop:30}}>
              <RadioButton
                value={checked}                
                status={ checked && checked === true ? 'checked' : 'unchecked' }
                onPress={() => setChecked(true)}
              />
                <Text style={{textAlign:'left',right:20,fontWeight:'bold'}}>Yes</Text>

              <RadioButton
                value={checked}
                status={ checked && checked === false ? 'checked' : 'unchecked' }
                onPress={() => setChecked(false)}
              />
                 <Text style={{textAlign:'right',right:20,fontWeight:'bold'}}>No</Text>
          </View>
       
     </View>
   </View>
  )
 }

 const CardComment=(props)=>{

   const [ rate, setRate ] = useState(0)
         

       
      
      return(
          <View style={{width:width,justifyContent:'center',alignItems:'center',paddingTop:20,}}>
          <View style={{width:width/1.2,height:height/8,borderRadius:20,backgroundColor:'#fbeeac',}}>
            <View style={{alignSelf:"flex-end",padding:10}}>
            <StarRating
            disabled={false}
            activeOpacity={0.5}
            emptyStar={'star-o'}
            fullStar={'star'}
            halfStar={'star-half-full'}
            iconSet={'FontAwesome'}
            maxStars={5}
            starSize={18}
            rating={rate}
            selectedStar={(rating) => setRate(rating)}
            fullStarColor={'#fdb827'}
          />
            </View>
           <TextInput style = {styles.input} placeholder="Comment ..."
            maxLength = {60}></TextInput>
          </View>
         
        </View>
       
      )
 }

 

function Review(props) {
  
      const [ questions, setQ ] = useState([])

      useEffect(()=>{
        console.log(props.route.params)
        setQ(props.route.params.questions)
      }, [])
 
  return (
 
         <View style={{backgroundColor:'#fff',flex:1,justifyContent:'center',alignItems:'center'}}>
           <ScrollView
                contentContainerStyle={styles.scrollviewstyle} 
                showsVerticalScrollIndicator={true} > 
            {questions.length > 0 && questions.map(q=><Card ques={q} key={q}/>) }
            <CardComment />
            <MainButton children='Submit' />
            
            </ScrollView>
         </View>
 )
}
const MainButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  ques:{
     fontSize:18,
     fontWeight:"bold",
     textAlign:'left',
     color:'#000'
  },
  continerques:{

     height:45,
     width:"90%",
     justifyContent:'center',
     alignSelf:'center'
  },
  button: {
    backgroundColor: "#16c79a",
    borderRadius: 25,
    width:140,
    height:45, 
    alignSelf:'center',
    marginTop:9
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'open-sans',
    fontSize: 20,
    textAlign:'center',
    marginTop:9
  },
  input:{
    width: "90%",
    height: 40,
    color:'#000',
    alignSelf:'center',
    borderBottomWidth: 0.5,
  },
  scrollviewstyle:{
  justifyContent:'center',
  alignItems:'center',
  }
})
 
export default Review