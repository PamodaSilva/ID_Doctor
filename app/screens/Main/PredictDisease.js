/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet  } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import LinearGradient from 'react-native-linear-gradient';

const PredictDiseasesPage = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [predictedDiseases, setPredictedDiseases] = useState([]);

  const symptoms = [
    { name: 'High Fever', id: 1 },
    { name: 'Fever', id: 2, mainSymptom: 'Fever' },
    { name: 'Fatigue', id: 3 },
    { name: 'Headache', id: 4},
    { name: 'Mild Headache', id: 5, mainSymptom: 'Mild Headache' },
    { name: 'Muscle Aches', id: 6, mainSymptom: 'Muscle Aches'  },
    { name: 'Body Aches', id: 7, mainSymptom: 'Body Aches' },
    { name: 'Dry Cough', id: 8 },
    { name: 'Mild Cough', id: 9 },
    { name: 'Sore Throat', id: 10, mainSymptom: 'Sore Throat' },
    { name: 'Runny or stuffy nose', id: 11, mainSymptom: 'Runny or stuffy nose' },
    { name: 'Loss of appetite', id: 12 },
    { name: 'Abdominal pain or discomfort', id: 13 },
    { name: 'Rash (typically appearing two to five days after the onset of fever)', id: 14, mainSymptom: 'Rash2' },
    { name: 'Rash (typically starting on the face and spreading throughout the body)', id: 15 },
    { name: 'Rash (starts as small, raised bumps and progresses to vesicles or fluid-filled blisters)', id: 16, mainSymptom: 'Rash1' },
    { name: 'Rash (characterized by small, red spots that typically start on the face and spread to the rest of the body)', id: 17, mainSymptom: 'Rash3'  },
    { name: 'Swollen lymph nodes', id: 18, mainSymptom: 'Swollen lymph nodes' },
    { name: 'Joint pain', id: 19 },
    { name: 'Abdominal pain', id: 20, mainSymptom: 'Abdominal pain' },
    { name: 'Nausea and vomiting', id: 21 , mainSymptom: 'Nausea and vomiting' },
    { name: 'Diarrhea', id: 22, mainSymptom: 'Diarrhea' },
    { name: 'Chills and sweating', id: 23,  mainSymptom: 'Chills and sweating'},
    { name: 'Dehydration', id: 24, mainSymptom: 'Dehydration'  },
    { name: 'Low Blood Pressure', id: 25, mainSymptom: 'Low Blood Pressure'  },
    { name: 'Shortness of Breath', id: 26, mainSymptom: 'Shortness of Breath' },
    { name: 'Difficulty Breathing', id: 27, mainSymptom: 'Difficulty Breathing' },
    { name: 'Loss of taste', id: 28, mainSymptom: 'Loss of taste' },
    { name: 'Loss of smell', id: 29, mainSymptom: 'Loss of smell' },
    { name: 'Jaundice (yellowing of the skin and eyes)', id: 30, mainSymptom: 'Jaundice' },
    { name: 'Dark Urine', id: 31, mainSymptom: 'Dark Urine' },
    { name: 'Pale Stools', id: 32, mainSymptom: 'Pale Stools' },
    { name: 'Pain behind the eyes', id: 33, mainSymptom: 'Pain behind the eyes' },
    { name: 'Mild bleeding (such as nosebleeds or bleeding gums)', id: 34 },
    { name: 'Encephalitis (inflammation of the brain) symptoms like headache, confusion, drowsiness, and disorientation', id: 35, mainSymptom: 'Encephalitis'},
    { name: 'Conjunctivitis (red eyes)', id: 36, mainSymptom: 'conjunctivitis' },
    { name: "Koplik's spots (small white spots with bluish-white centers that appear inside the mouth)", id: 37, mainSymptom: "Koplik's spots" },

  ];

  const diseases = {
    'Covid-19': ['Loss of taste' , 'Loss of smell'],
    'Monkeypox': ['Rash1' , 'Swollen lymph nodes'],
    'Common cold': ['Runny or stuffy nose' , 'Sore Throat'],
    'Normal flu': ['Muscle Aches', 'Chills and sweating'],
    'Hepatitis': ['Jaundice', 'Dark Urine', 'Pale Stools'],
    'Dengue': ['Headache', 'Pain behind the eyes', 'Muscle aches','Joint pain', 'Mild bleeding'],
    'Bird Flu': ['Shortness of Breath' , 'conjunctivitis'],
    'SARS': ['Difficulty Breathing' , 'Low Blood Pressure'],
    'Zika': ['Rash2'],
    'Nipah': ['Encephalitis' , 'Fever'],
    'Malaria': ['Abdominal pain'],
    'Cholera': ['Diarrhea' , 'Dehydration'],
    'Measles': ["Koplik's spots" , 'Rash3'],
    'Yellow Fever': ['Pain behind the eyes' , 'Nausea and vomiting'],
    'Influenza' : ['Mild Headache' , 'Body Aches'],
  };

  const handleSelectSymptom = (symptom) => {

    const isSelected = selectedSymptoms.find((s) => s.id === symptom.id);


    if (isSelected) {
      setSelectedSymptoms(selectedSymptoms.filter((s) => s.id !== symptom.id));
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };


  const handlePredictDiseases = () => {

    const mainSymptoms = selectedSymptoms.map((symptom) => symptom.mainSymptom).filter(Boolean);


    const predictedDiseases = Object.entries(diseases)
      .filter(([disease, symptoms]) => symptoms.every((symptom) => mainSymptoms.includes(symptom)))
      .map(([disease]) => disease);


    setPredictedDiseases(predictedDiseases);
  };

  return (
    <ScrollView>
      <LinearGradient colors={['#C5F1FF', '#AAE5FC' , '#8ED3F3']}>
      <View>
      <View style={styles.container}>
        <Text style={styles.MainText}> Select the symptoms you are experiencing: </Text>

        {symptoms.map((symptom) => (
          <TouchableOpacity
            key={symptom.id}
            onPress={() => handleSelectSymptom(symptom)}
            style={styles.checkbox} >

            <CheckBox
              value={!!selectedSymptoms.find((s) => s.id === symptom.id)}
              onValueChange={() => handleSelectSymptom(symptom)}
            />
            <Text style= {styles.symptomName} >{symptom.name}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity onPress={handlePredictDiseases} style = {styles.ButtonView}>
          <Text style= {styles.ButtonText}> Predict </Text>
        </TouchableOpacity>
        </View>

        {predictedDiseases.length > 0 && (
          <View style ={styles.OutputView }>
            <Text style= {styles.OutputText1}> Predicted Diseases: </Text>
            {predictedDiseases.map((disease, index) => (
              <Text key={index} style= {styles.OutputText2} > /  {disease}  / </Text>
            ))}
          </View>
        )}
      </View>
    </LinearGradient>
    </ScrollView>
  );
};

export default PredictDiseasesPage;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    justifyContent: 'center',
    alignContent: 'center',
  },
  MainText: {
    fontSize : 25,
    margin: 10,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  symptomName: {
    color: 'black',
    fontSize: 20,
    margin: 8,
    marginRight: 30,
  },
  ButtonView: {
    height: 50,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 15,
    width: 300,
    marginLeft:50,
  },
  ButtonText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  OutputView: {
    height: 120,
    backgroundColor: 'white',
    borderColor: 'black',
    padding: 10,
    margin:20,
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 50,
  },
  OutputText1: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 23,
    color: '#0066FF',
  },
  OutputText2:{
    textAlign: 'center',
    fontSize: 21,
    color: 'black',
    marginTop: 20,
  },
});
