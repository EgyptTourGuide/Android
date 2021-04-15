import React ,{ useState }from 'react';
import { Text,View ,StyleSheet, Dimensions,ImageBackground,TouchableOpacity,TextInput, ScrollView} from 'react-native';
import { RadioButton } from 'react-native-paper';
import Star from '../component/StarRating';



const { width, height } = Dimensions.get('window')

 const Card =(props)=>{
     const { width, height } = Dimensions.get('window')
     const [Add , setAdd] = useState(false)   
     const [checked, setChecked] = React.useState('first');
 return(
   
   <View style={{width:width,justifyContent:'center',alignItems:'center',paddingTop:20,}}>
     <View style={{width:width/1.2,height:height/6.5,borderRadius:25,backgroundColor:"#fbeeac"}}>
       
    
       <View style={styles.continerques}>
          <Text style={styles.ques}>{props.ques}</Text></View>

            <View  style={{width:width/1.6,alignItems:'center',justifyContent:'space-around',alignSelf:'center',flexDirection:'row',marginTop:30}}>
              <RadioButton
                value="first"
                status={ checked === 'first' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('first')}
              />
                <Text style={{textAlign:'left',right:20,fontWeight:'bold'}}>Yes</Text>

              <RadioButton
                value="second"
                status={ checked === 'second' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('second')}
              />
                 <Text style={{textAlign:'right',right:20,fontWeight:'bold'}}>No</Text>
          </View>
       
     </View>
   </View>
  )
 }

 const CardComment=()=>{
      
      return(
          <View style={{width:width,justifyContent:'center',alignItems:'center',paddingTop:20,}}>
          <View style={{width:width/1.2,height:height/8,borderRadius:20,backgroundColor:'#fbeeac',}}>
            <View style={{alignSelf:"flex-end",padding:10}}><Star></Star></View>
           <TextInput style = {styles.input} placeholder="Comment ..."
            maxLength = {60}></TextInput>
          </View>
         
        </View>
       
      )
 }

 

function Review() {
 
  return (
 
         <View style={{backgroundColor:'#fff',flex:1,justifyContent:'center',alignItems:'center'}}>
           <ScrollView
                contentContainerStyle={styles.scrollviewstyle} 
                showsVerticalScrollIndicator={true} > 
            <Card ques='* Did you like this place ?'/>
            <Card  ques='* Did you like this place ?'/>
            <Card  ques='* Did you like this place ?'/>
            <Card  ques='* Did you like this place ?'/>
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