/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Image, StyleSheet, Text} from 'react-native';
import OnboardingScreen from '../screens/OnboardingScreen';
import LinearGradient from 'react-native-linear-gradient';

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
    }, 3000);
  }

  render() {
    const { isLoaded } = this.state;

    if (!isLoaded) {
      return (
        <View style={styles.splashContainer}>
          <LinearGradient colors={['#29C5F6', '#3A9BDC', '#5579C6', '#1260CC' ]}
          style={styles.linearGradient}>
            <Text style={styles.splash_heading}> ID-Doctor </Text>
            <Image source={require('../assets/Doctor.png')} style={styles.splashImage} />
            <Text style={styles.splashText}> - Prediction Infectious Disease - </Text>
          </LinearGradient>
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
  },
  splash_heading: {
    fontSize: 55,
    bottom: 10,
    fontWeight: 'bold',
    color: 'black',
  },
  splashImage: {
    width: 380,
    height: 380,
    resizeMode: 'contain',
  },
  splashText: {
    fontSize: 22,
    fontStyle: 'italic',
    color: 'black',
    top: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 1000,
    width: 450,
  },
});
