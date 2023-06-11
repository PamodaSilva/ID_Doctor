/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from '../app/screens/SplashScreen';
import OnboardingScreen from '../app/screens/OnboardingScreen';
import Home from '../app/screens/home';


const PrimaryNavigator = createStackNavigator();
class App extends Component {
    render() {
        return (
            <NavigationContainer>
                <PrimaryNavigator.Navigator headerMode="none" initialRouteName="SplashScreen">
                    <PrimaryNavigator.Screen name="SplashScreen" component={SplashScreen} />
                    <PrimaryNavigator.Screen name="OnboardingScreen" component={OnboardingScreen}/>
                    <PrimaryNavigator.Screen name="Home" component={Home}/>
                </PrimaryNavigator.Navigator>
            </NavigationContainer>
        );
    }
}

export default App;
