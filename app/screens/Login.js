/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Image, View, TextInput, Button, StyleSheet, Alert , TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native-paper';

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
      setEmail('');
      setPassword('');
      Alert.alert('Success!..', ' Login successfully !!', [
        {text: 'ok.'},
      ]);
          navigation.navigate('Profile');
    } else {
      setEmail('');
      setPassword('');
      Alert.alert('Not Success!..', ' Login not successfully !!', [
        {text: 'ok.'},
      ]);
    }
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  const handleRestPW = () => {
    navigation.navigate('ResetPW');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.MainText}> LogIn </Text>
      <Image source={require('../assets/LogIn.png')} style={styles.LoginImage} />
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
      <TouchableOpacity onPress={handleLogin}>
        <Text style={styles.LogButton}> Login </Text>
      </TouchableOpacity>
      <View style={styles.container1}>
        <TouchableOpacity onPress={handleRestPW}>
          <Text style={styles.ResetButton}> Reset Password </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.Text1}> Your haven't an Account  </Text>
      <TouchableOpacity onPress={handleSignUp}>
        <Text style={styles.SignUP}> Sign Up </Text>
      </TouchableOpacity>
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
  MainText: {
    fontSize: 35,
    top: -35,
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    height: 45,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
    paddingLeft: 10,
    bottom:45,
    fontSize: 15.5,
  },
  LoginImage: {
    width: 330,
    height: 330,
    resizeMode: 'contain',
    bottom: 50,
  },
  LogButton: {
    bottom: 30,
    fontSize: 20.5,
    borderWidth: 1,
    backgroundColor: '#87CEFA',
    borderRadius: 5,
    marginRight: 250,
  },
  ResetButton: {
    top: -50,
    fontSize: 16,
    textDecorationLine: 'underline',
    marginLeft: 200,
  },
  Text1: {
    marginRight: 120,
    fontSize: 18,
    top: -10,
  },
  SignUP: {
    marginLeft: 140,
    fontSize:15,
    color: 'blue',
    textDecorationLine: 'underline',
    top: -10,
  },
});

export default LoginScreen;

