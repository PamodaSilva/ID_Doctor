/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { useNavigation } from '@react-navigation/native';

const data1 = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];

const data2 = [
  { label: 'Item 1', value: '9' },
  { label: 'Item 2', value: '10' },
  { label: 'Item 3', value: '11' },
  { label: 'Item 4', value: '12' },
  { label: 'Item 5', value: '13' },
  { label: 'Item 6', value: '14' },
  { label: 'Item 7', value: '15' },
  { label: 'Item 8', value: '16' },
];

const data3 = [
  { label: 'Item 1', value: '17' },
  { label: 'Item 2', value: '18' },
  { label: 'Item 3', value: '19' },
  { label: 'Item 4', value: '20' },
  { label: 'Item 5', value: '21' },
  { label: 'Item 6', value: '22' },
  { label: 'Item 7', value: '23' },
  { label: 'Item 8', value: '24' },
];

const data4 = [
  { label: 'Item 1', value: '25' },
  { label: 'Item 2', value: '26' },
  { label: 'Item 3', value: '27' },
  { label: 'Item 4', value: '28' },
  { label: 'Item 5', value: '29' },
  { label: 'Item 6', value: '30' },
  { label: 'Item 7', value: '31' },
  { label: 'Item 8', value: '32' },
];

const data5 = [
  { label: 'Item 1', value: '33' },
  { label: 'Item 2', value: '34' },
  { label: 'Item 3', value: '35' },
  { label: 'Item 4', value: '36' },
  { label: 'Item 5', value: '37' },
  { label: 'Item 6', value: '38' },
  { label: 'Item 7', value: '39' },
  { label: 'Item 8', value: '40' },
];

const data6 = [
  { label: 'Item 1', value: '41' },
  { label: 'Item 2', value: '42' },
  { label: 'Item 3', value: '43' },
  { label: 'Item 4', value: '44' },
  { label: 'Item 5', value: '45' },
  { label: 'Item 6', value: '46' },
  { label: 'Item 7', value: '47' },
  { label: 'Item 8', value: '48' },
];

const DropdownComponent = () => {
  const navigation = useNavigation();

  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  const [value5, setValue5] = useState('');
  const [value6, setValue6] = useState('');
  const [isFocus, setIsFocus] = useState(false);

  const handleSubmit = () => {
    setValue1('');
    setValue2('');
    setValue3('');
    setValue4('');
    setValue5('');
    setValue6('');
    navigation.navigate('PredictDisease2');
  };

  return (
    <View style={styles.container}>
      <Text style = {{
        color: 'black',
        textAlign: 'center',
        fontSize: 30,
        bottom: 70,
        fontWeight: 'bold'}}>
          Check Your Disease. </Text>
      <Text style = {{
        color: 'black',
        fontSize: 15,
        bottom: 30}}>Choose 6 Unique Symptoms for predicting your disease !!!</Text>
      <View style={{backgroundColor: '#ffff', padding: 20, borderRadius:15, bottom:8}}>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data1}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select Symptom' : '...'}
        searchPlaceholder="Search..."
        value={value1}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue1(item.value);
          setIsFocus(false);
        }}
      />
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data2}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select Symptom' : '...'}
        searchPlaceholder="Search..."
        value={value2}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue2(item.value);
          setIsFocus(false);
        }}
      />
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data3}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select Symptom' : '...'}
        searchPlaceholder="Search..."
        value={value3}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue3(item.value);
          setIsFocus(false);
        }}
      />
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data4}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select Symptom' : '...'}
        searchPlaceholder="Search..."
        value={value4}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue4(item.value);
          setIsFocus(false);
        }}
      />
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data5}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select Symptom' : '...'}
        searchPlaceholder="Search..."
        value={value5}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue5(item.value);
          setIsFocus(false);
        }}
      />
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data6}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select Symptom' : '...'}
        searchPlaceholder="Search..."
        value={value6}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue6(item.value);
          setIsFocus(false);
        }}
      />
      <TextInput
        style={styles.dropdown}
        placeholder="Special Note"
      />
      <TouchableOpacity  onPress={handleSubmit}
        style= {{
          backgroundColor:'#73C2FB',
          padding: 15,
          borderRadius: 15,
          alignItems: 'center',
        }}>
        <Text style = {{fontSize:20}}>
          Submit
        </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4682B4',
    padding: 15,
    justifyContent: 'center',
    alignContent: 'center',
  },
  dropdown: {
    height: 50,
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 15,
    fontSize: 18,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});