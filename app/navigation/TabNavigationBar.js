/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import Search from '../screens/Main/home';
import Amount from '../screens/Main/PredictDisease';
import About from '../screens/Main/DocChat';
import profile from '../screens/Main/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: [{ display: 'flex' }, null]
          }}
        >
                <Tab.Screen name="Search" component={Search} options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center', top:5}}>
                            
                            <Text style={{color: focused? 'red' : 'black',fontSize: 12,}}>
                                Search
                            </Text>
                        </View>
                    ),
                }}/>
                <Tab.Screen name="Amount" component={Amount} options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center', top:5}}>
                            
                            <Text style={{color: focused? 'red' : 'black',fontSize: 12,}}>
                                Amount
                            </Text>
                        </View>
                    ),
                }}/>
                <Tab.Screen name="About" component={About} options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center', top:5}}>
                            
                            <Text style={{color: focused? 'red' : 'black',fontSize: 12,}}>
                                About
                            </Text>
                        </View>
                    ),
                }}/>
                <Tab.Screen name="profile" component={profile} options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center', top:5}}>
                          
                            <Text style={{color: focused? 'red' : 'black',fontSize: 12,}}>
                                My Profile
                            </Text>
                        </View>
                    ),
                }}/>
            </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;

