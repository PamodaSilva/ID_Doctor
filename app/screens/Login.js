/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if   (!email && !password ){
        Alert.alert(' Error!..', 'Your are not fill the Username or Password  !!', [
            {text: 'ok.'},
          ]);
    } else if (email === 'admin' && password === '123'){
        Alert.alert('Success!..', ' Login successfully !!', [
            {text: 'ok.'},
          ]);
          navigation.navigate('Home');
    } else {
        Alert.alert('Not Success!..', ' Login not successfully !!', [
            {text: 'ok.'},
          ]);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: '100%',
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingLeft: 8,
  },
});

export default LoginScreen;

