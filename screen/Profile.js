import React, { useState } from 'react';
import { Text, View, Button, StyleSheet ,TextInput} from 'react-native';
import  {Profimg } from '../component/Images'
import BottomSheet from 'reanimated-bottom-sheet';
import HookTest from '../component/Hook'

export default function App() {
  const [ name, setName ] = useState({first: '', phone: '',Email:''})

  const changeFirst = (firstname)=>setName(preState=>({...preState, first: firstname}))
  const changePhone = (phone)=>setName(preState=>({...preState, phone}))
  const changeEmail = (Email)=>setName(preState=>({...preState, Email}))


  const renderContent = () => (
    <View
      style={{
        backgroundColor: '#000',
        padding: 20,
        height: 450,
      }}
    >
      
      <View style={{alignSelf:'center',alignItems:'center',width:"100%",height:150}}>
        <View style={{alignItems:'center'}}><Text style={{color:'#fff',fontSize:20,width:'100%' }}>Change Your Information</Text></View>
     
        <Profimg></Profimg>
        <View style={{width:'200%',height:'80%',alignItems:'center',justifyContent:'center'}} >
        <Text style={styles.txt}>{name.first}</Text>
        <Text style={styles.txt}>{name.phone}</Text>
        <Text style={styles.txt}>{name.Email}</Text>
        </View>
       
      </View>
    </View>
  );

  const sheetRef = React.useRef(null);

  return (
  
    <>
      <View
        style={{
          flex: 1,
          borderColor:"red",
          backgroundColor: '#000',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View style={{bottom:"10%"}}>
          <HookTest
          changeFirst={changeFirst}
          changePhone={changePhone}
          changeEmail={changeEmail} />

       </View>        
        <Button
          title="Edit Peofile"
          onPress={() => sheetRef.current.snapTo(0)} />
      </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[450, 200, 0]}
        borderRadius={30}
        renderContent={renderContent}
      />
    </>
  );
}
const styles = StyleSheet.create({

  txt: {
    color:'#fff',
    fontSize:23
   },
})

