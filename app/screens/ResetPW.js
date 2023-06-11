/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
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

export default ResetPasswordPage;
