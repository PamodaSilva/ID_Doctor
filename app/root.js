/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './screens/SplashScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import Home from './screens/Main/home';
import DocChat from './screens/Main/DocChat';
import PredictDisease from './screens/Main/PredictDisease';
import PredictDisease2 from './screens/Main/PredictDisease2';
import Profile from './screens/Main/Profile';
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
          <PrimaryNavigator.Screen name="DocChat" component={DocChat} />
          <PrimaryNavigator.Screen name="PredictDisease" component={PredictDisease} />
          <PrimaryNavigator.Screen name="PredictDisease2" component={PredictDisease2} />
          <PrimaryNavigator.Screen name="Profile" component={Profile} />
          <PrimaryNavigator.Screen name="Login" component={Login} />
          <PrimaryNavigator.Screen name="SignUp" component={SignUp} />
          <PrimaryNavigator.Screen name="ResetPW" component={ResetPW} />
        </PrimaryNavigator.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
