/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet , Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {
    const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    if (name && email && password && confirmPassword) {
      if (password === confirmPassword) {
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        Alert.alert('Signup successful', 'Signup successful.', [{ text: 'OK' }]);
        navigation.navigate('Login');
      } else {
        Alert.alert('Passwords do not match', 'Passwords do not match.', [{ text: 'OK' }]);
      }
    } else {
      Alert.alert('Please fill in all fields', 'Please fill in all fields.', [{ text: 'OK' }]);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={setName}
        value={name}
      />
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
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        onChangeText={setConfirmPassword}
        value={confirmPassword}
      />
      <Button title="Signup" onPress={handleSignup} />
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

export default SignupScreen;
