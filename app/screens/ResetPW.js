/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Text, View, TextInput, Button, Alert, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ResetPasswordPage = () => {
    const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleResetPassword = () => {
    if (email && password && confirmPassword) {
      if (password === confirmPassword) {
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        Alert.alert('Password Reset Successful', 'Your password has been reset successfully.');
        navigation.navigate('Login');
      } else {
        Alert.alert('Passwords Do Not Match', 'Please make sure the passwords match.');
      }
    } else {
      Alert.alert('Missing Fields', 'Please fill in all the fields.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.ResetMainText}> Reset Your Password </Text>
      <Image source={require('../assets/ResetPW.png')} style={styles.ResetPWImage} />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="New Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm New Password"
        secureTextEntry
        onChangeText={setConfirmPassword}
        value={confirmPassword}
      />
      <Button title="Reset" onPress={handleResetPassword} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
  ResetMainText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    top: -40,
  },
  ResetPWImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    top: -30,
  },
  input: {
    width: '80%',
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
    paddingLeft: 8,
    fontSize: 14,
    top: -20,
  },
});

export default ResetPasswordPage;
