/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ProfilePage = () => {
  return (
    <View style={styles.container}>
    <LinearGradient
          colors={['#B7E9F7', '#92DFF3', '#7AD7F0' ]}
          style={styles.linearGradient}>
      <Text style={styles.MainTx}> MY PROFILE </Text>
      <Image source={require('../../assets/Person.png')} style={styles.profilePicture} />
      <View style={styles.View1}>
      <Text style={styles.name}>Name :-  John Doe</Text>
      <Text style={styles.email}>Email :-  john.doe@example.com</Text>
      <Text style={styles.bioText}> My Bio :- </Text>
      <TextInput style={styles.bio} placeholder="Bio" secureTextEntry />
      </View>
      <TouchableOpacity>
        <Text style={styles.EProfile}> EDIT PROFILE </Text>
      </TouchableOpacity>
    </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 1000,
    width: 450,
  },
  MainTx: {
    fontSize: 35,
    color: '#00008D',
    bottom: 40,
    fontWeight: '500',
    fontStyle: 'italic',
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
    top: -20,
  },
  View1: {
    backgroundColor: '#ffff',
    padding: 30,
    borderRadius:15,
    top: -12,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
    color: 'black',
  },
  email: {
    fontSize: 20,
    marginBottom: 16,
    color: 'black',
  },
  bioText: {
    fontSize: 20,
    color: 'black',
    marginTop: 10,
    marginBottom : 40,
    textAlign: 'left',
  },
  EProfile: {
    fontSize: 18,
    borderWidth: 2,
    borderRadius: 5,
    color: 'blue',
    top: 10,
  },
  bio: {
    height: 100,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
    paddingLeft: 10,
    bottom:30,
    fontSize: 15.5,
  },
});

export default ProfilePage;
