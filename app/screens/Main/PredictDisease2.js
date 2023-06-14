/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const PredictDisease2 = () => {
    return (
    <View style={styles.container}>
      <Text style= {styles.PDMainText}> Your Disease prediction Results.</Text>
      <Image source={require('../../assets/Home1.jpg')} style={styles.PDImage} />

        <Text style= {styles.PDText}> It seems like you suffered from ............ disease. </Text>

      <Text style= {styles.SymptomMainText}>You have following Symptoms : </Text>

        <Text style = {styles.SymptomText}>  Symptom 1 </Text>
        <Text style = {styles.SymptomText}>  Symptom 2 </Text>
        <Text style = {styles.SymptomText}>  Symptom 3 </Text>
        <Text style = {styles.SymptomText}>  Symptom 4 </Text>
        <Text style = {styles.SymptomText}>  Symptom 5 </Text>
        <Text style = {styles.SymptomText}>  Symptom 6 </Text>

    </View>
    );
  };

  export default PredictDisease2;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
      backgroundColor: '#ffff',
      padding: 30,
    },
    PDImage: {
      width: 350,
      height: 350,
      resizeMode: 'contain',
      top: -30,
      marginLeft: 15,
    },
    PDMainText: {
      fontSize: 24 ,
      color: 'black',
      textAlign: 'center',
      fontWeight: 600,
      bottom: 5,
      top: 15,
      backgroundColor: '#87cefa',
    },
    PDText: {
      fontSize: 19 ,
      color: 'black',
      bottom: 10,
      borderWidth: 1,
      textAlign: 'center',
      height: 50,
      top: -70,
    },
    SymptomText: {
      fontSize: 18 ,
      color: 'gray',
      bottom: 20,
      marginBottom: 15,
      borderWidth: 1,
      textAlign: 'center',
      height: 35,
      borderRadius: 10,
    },
    SymptomMainText: {
      fontSize: 20 ,
      color: 'black',
      bottom: 8,
      top: -40,
      textAlign: 'center',
      backgroundColor: '#add8e6',
    },
  });
