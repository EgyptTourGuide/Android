import * as React from 'react';
import { Text, View, Button, Image ,} from 'react-native';
import  { Logo,Profimg } from '../component/Images'
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
;

export default function App() {
  const renderContent = () => (
    <View
      style={{
        backgroundColor: '#000',
        padding: 20,
        height: 450,
      }}
    >
      <Text style={{color:'#fff',fontSize:20 }}>Change Your Information</Text>
      <View style={{alignSelf:'center',alignItems:'center',top:25,width:150,height:150}}>
        <Profimg></Profimg>
          <View style={{width:250,height:100,alignItems:'center'}}>
            <Text  style={{color:'#fff',fontSize:25,fontWeight:"bold"}}>Hossam Hassan hassan </Text>
            <Text style={{color:'#fff',fontSize:25,fontWeight:'bold'}}>01225153968 </Text>
            <Text style={{color:'#fff',fontSize:25,fontWeight:'bold'}}>Hossam@gmail.com </Text>
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
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Button
          title="Edit Peofile"
          onPress={() => sheetRef.current.snapTo(0)}
        />
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