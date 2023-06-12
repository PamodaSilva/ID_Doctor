/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Image, StyleSheet, Text} from 'react-native';
import OnboardingScreen from '../screens/OnboardingScreen';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoaded: true });
    }, 2500);
  }

  render() {
    const { isLoaded } = this.state;

    if (!isLoaded) {
      return (
        <View style={styles.splashContainer}>
          <Text style={styles.splash_heading}> ID-Doctor </Text>
          <Image source={require('../assets/Doctor.png')} style={styles.splashImage} />
          <Text style={styles.splashText}> - Prediction Infectious Disease - </Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <>
        <OnboardingScreen/>
        </>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#69E2FF',
  },
  splash_heading: {
    fontSize: 50,
    bottom: 10,
    fontWeight: 'bold',
    color: 'black',
  },
  splashImage: {
    width: 420,
    height: 420,
    resizeMode: 'contain',
  },
  splashText: {
    fontSize: 20,
    fontStyle: 'italic',
    color: 'black',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
