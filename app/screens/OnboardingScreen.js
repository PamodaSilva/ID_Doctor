/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';

export default function OnboardingScreen() {
  const navigation = useNavigation();

  const handleSkip = () => {
    navigation.navigate('Login');
  };

  const handleDone = () => {
    navigation.navigate('Login');
  };

  const slides = [
    {
      title: ' We are here to help ',
      description: 'Welcome to the App! We are here to help predict Infectious diseases ',
      image: require('../assets/Onboarding1.png'),
    },
    {
      title: 'Give Your Symptoms',
      description: 'Describe the first feature of your app.',
      image: require('../assets/Onboarding2.png'),
    },
    {
      title: 'Predict Infectious Disease',
      description: 'Describe the first feature of your app.',
      image: require('../assets/Onboarding3.png'),
    },
  ];

  return (
    <View style={styles.container}>
      <Swiper loop={false}>
        {slides.map((slide, index) => (
          <View key={index} style={styles.slideContainer}>
            <Image source={slide.image} style={styles.image} />
            <Text style={styles.title}>{slide.title}</Text>
            <Text style={styles.description}>{slide.description}</Text>
          </View>
        ))}
      </Swiper>
      <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
        <Text style={styles.buttonText}>Skip</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
  },
  slideContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'black',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 32,
  },
  skipButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  doneButton: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00008B',
  },
});
