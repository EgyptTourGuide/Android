import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import { View } from 'react-native';
import {useState} from 'react'

 export const Check =()=>{
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

 return(

    <View style={{}}>

        
   <CheckBox
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
    />
    </View>
 )


}
