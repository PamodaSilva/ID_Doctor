/* eslint-disable prettier/prettier */

import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './screens/SplashScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import Home from './screens/Main/home';
import TabNavigationBar from './navigation/TabNavigationBar';
import Login from './screens/Login';
import SignUp from './screens/Register Page';
import ResetPW from './screens/ResetPW';

const PrimaryNavigator = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <PrimaryNavigator.Navigator screenOptions={{ headerShown: false }} initialRouteName="SplashScreen">
          <PrimaryNavigator.Screen name="SplashScreen" component={SplashScreen} />
          <PrimaryNavigator.Screen name="OnboardingScreen" component={OnboardingScreen} />
          <PrimaryNavigator.Screen name="Home" component={Home} />
          <PrimaryNavigator.Screen name="TabNavigationBar" component={TabNavigationBar} />
          <PrimaryNavigator.Screen name="Login" component={Login} />
          <PrimaryNavigator.Screen name="SignUp" component={SignUp} />
          <PrimaryNavigator.Screen name="ResetPW" component={ResetPW} />
        </PrimaryNavigator.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
