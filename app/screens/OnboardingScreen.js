/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

export default class OnboardingScreen extends Component {
  handleSkip = () => {

    this.props.navigation.navigate('Home');
  };

  handleDone = () => {

    this.props.navigation.navigate('Home');
  };

  render() {
    const slides = [
      {
        title: 'Welcome to the App',
        description: 'This is an onboarding screen for your app.',
        image: require('../assets/Doc.png'),
      },
      {
        title: 'Feature 1',
        description: 'Describe the first feature of your app.',
        image: require('../assets/Doc.png'),
      },
      // Add more slides as needed
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
        <TouchableOpacity style={styles.skipButton} onPress={this.handleSkip}>
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.doneButton} onPress={this.handleDone}>
          <Text style={styles.buttonText}>Done</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slideContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
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
    color: 'blue',
  },
});
