/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = () => {
    useEffect(() => {
      // Perform any necessary tasks while the splash screen is displayed, such as data loading or app initialization.
      // You can use the `useEffect` hook to define the necessary logic.
      // Once you're done, navigate to the next screen using a navigation library like React Navigation.
    }, []);
  
    return (
      <View style={styles.container}>
        <Image source={require('./path/to/your/splashImage.png')} style={styles.image} />
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: 200,
      height: 200,
      resizeMode: 'contain',
    },
  });
  
