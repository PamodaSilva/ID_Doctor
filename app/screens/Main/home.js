/* eslint-disable prettier/prettier */
import React from 'react';
import { View, ScrollView, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomePage = () => {
  const navigation = useNavigation();

  const handleSearch = () => {
    navigation.navigate('PredictDisease');
  };

  const handleChat = () => {
    navigation.navigate('DocChat');
  };

  const handleProfile = () => {
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
      <Text style={styles.heading}>Welcome to the ID-Doctor </Text>
      <Text style={styles.heading2}> Infectious Disease Prediction App </Text>
      <Image source={require('../../assets/Home3.png')} style={styles.Image} />

      <View style={styles.section1}>
        <Text style={styles.sectionText1}>
          This app is designed to help predict infectious diseases based on the symptoms provided by the user.
          It utilizes a machine learning algorithm to analyze the symptoms and provide a prediction.
          Please provide accurate and detailed information for the best prediction results.
        </Text>
      </View>

        <View style={styles.section2}>
          <Text style={styles.sectionHeading2}>Instructions</Text>
          <Text style={styles.sectionText2}>
            1. Enter your symptoms in the Symptoms page.
            {'\n'}
            2. Provide any additional notes or information regarding your symptoms.
            {'\n'}
            3. The app will analyze the data and provide a prediction for the infectious disease.
            {'\n'}
            4. The prediction will be displayed on the Results page along with any additional information or recommendations.
          </Text>
        </View>

        <Image source={require('../../assets/Disease.png')} style={styles.Image2} />
        <View style={styles.section3}>
          <Text style={styles.sectionHeading3}>These are the Infectious Disease Predicted by this app.</Text>
          <View style={styles.section3View}>
            <Text style={styles.sectionText3}>
              ● Common cold {'\n'}
              ● Normal flu  {'\n'}
              ● Covid-19 {'\n'}
              ● Monkeypox {'\n'}
              ● Hepatitis (A,B,C)
            </Text>
            <Text style={styles.sectionText3}>
            ● Bird Flu {'\n'}
            ● SARS {'\n'}
            ● Zika {'\n'}
            ● Nipah {'\n'}
            ● Malaria {'\n'}
            ● Dengue {'\n'}
            ● Cholera {'\n'}
            ● Measles {'\n'}
            ● Yellow Flu{'\n'}
            ● Influenza
            </Text>
          </View>
          <Image source={require('../../assets/Chat.jpg')} style={styles.Image3} />
        </View>
        
      </ScrollView>
      <View style = { styles.IconContainer}>
        <TouchableOpacity onPress={handleSearch}>
          <Image source={require('../../assets/SearchIcon.png')} style={styles.Icon1} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleChat}>
          <Image source={require('../../assets/ChatIcon.png')} style={styles.Icon2} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleProfile}>
          <Image source={require('../../assets/Person.png')} style={styles.Icon3} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  IconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 60,
    paddingRight: 60,
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: '#89CFF0',
    width: 340,
    height: 65,
    marginLeft: 32,
    borderRadius :50,
  },
  Icon1: {
    width: 40,
    height: 40,
  },
  Icon2: {
    width: 40,
    height: 40,
  },
  Icon3: {
    width: 40,
    height: 40,
  },
  contentContainer: {
    flexGrow: 1,
    top: 15,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 30,
    bottom: 5,
    textAlign: 'center',
    color: '#00008B',
  },
  heading2: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: 'black',
  },
  Image: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
    top: -30,
    marginLeft: 25,
  },
  section1: {
    marginBottom: 24,
    padding: 8,
  },
  sectionText1: {
    fontSize: 16,
    top: -60,
    textAlign: 'justify',
    color: 'black',
  },
  section2: {
    marginBottom: 24,
    padding: 8,
  },
  sectionHeading2: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    top: -70,
    color: 'black',
    backgroundColor: 'yellow',
    width: 110,
  },
  sectionText2: {
    fontSize: 16,
    top: -70,
    color: 'black',
    textAlign: 'justify',
  },
  Image2: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
    top: -130,
  },
  Image3: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
    top: -100,
  },
  section3: {
    marginBottom: 24,
    padding: 8,
    marginTop: -50,
  },
  sectionText3: {
    fontSize: 16,
    marginBottom: 20,
    paddingLeft: 30,
    color: 'black',
  },
  sectionHeading3: {
    marginTop: -120,
    marginBottom: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    fontStyle: 'italic',
  },

});

export default HomePage;

