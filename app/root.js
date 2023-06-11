/* eslint-disable prettier/prettier */

import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './screens/SplashScreen'; // Update the file path
import OnboardingScreen from './screens/OnboardingScreen'; // Update the file path
import Home from './screens/Main/home'; // Update the file path

const PrimaryNavigator = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <PrimaryNavigator.Navigator screenOptions={{ headerShown: false }} initialRouteName="SplashScreen">
          <PrimaryNavigator.Screen name="SplashScreen" component={SplashScreen} />
          <PrimaryNavigator.Screen name="OnboardingScreen" component={OnboardingScreen} />
          <PrimaryNavigator.Screen name="Home" component={Home} />
        </PrimaryNavigator.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
