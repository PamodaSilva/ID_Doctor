/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Image, StyleSheet} from 'react-native';
import OnboardingScreen from '../screens/OnboardingScreen';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false, // Flag to determine if the necessary tasks are completed
    };
  }

  componentDidMount() {
    // Perform any necessary tasks while the splash screen is displayed, such as data loading or app initialization.
    // You can use the `componentDidMount` lifecycle method to define the necessary logic.
    // Once you're done, update the state to indicate that the tasks are completed.

    // Simulating a delay of 3 seconds for demonstration purposes
    setTimeout(() => {
      this.setState({ isLoaded: true });
    }, 2500);
  }

  render() {
    const { isLoaded } = this.state;

    if (!isLoaded) {
      return (
        <View style={styles.splashContainer}>
          <Image source={require('../assets/Doc.png')} style={styles.splashImage} />
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
    backgroundColor: 'white',
  },
  splashImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
