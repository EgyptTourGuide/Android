
import React, { useState } from "react";
import { View, Picker, StyleSheet, Dimensions, Text, Button } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';

const Plan = () => {
  const { height, width } = Dimensions.get("window")
  const [selectedValue, setSelectedValue] = useState("Place");
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff", fontSize: 22, paddingBottom: 5 }}>Destination</Text>
      <View style={{ height: 40, borderColor: '#fff', borderWidth: 1, borderRadius: 15, backgroundColor: '#fff' }}>
        <Picker
          selectedValue={selectedValue}
          style={{ height: 40, width: width / 1.3, color: '#000', }}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}

        >
          <Picker.Item label="Place" value="disabled" color='#aaa' />
          <Picker.Item label="Cairo" value="Cairo" />
          <Picker.Item label="Alex" value="Alex" />
          <Picker.Item label="Aswan" value="Aswan" />
          <Picker.Item label="Luxor" value="Luxor" />
          <Picker.Item label="Dahab" value="Dahab" />
        </Picker>
      </View>
      <View>
        <View>
          <Button onPress={showDatepicker} title="Show date picker!" />
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: 'black'
  }
});

export default Plan;