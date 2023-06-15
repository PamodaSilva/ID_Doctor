/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet, Text } from 'react-native';

const DoctorChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim() !== '') {
      const newMessage = {
        id: messages.length + 1,
        text: inputText,
        sender: 'user',
      };

      setMessages([...messages, newMessage]);
      setInputText('');
    }
  };

  useEffect(() => {
    if (messages.length === 1 && messages[0].sender === 'user') {
      const timeout = setTimeout(() => {
        const doctorReply = {
          id: messages.length + 1,
          text: 'Hello, how can I assist you?',
          sender: 'doctor',
        };
        setMessages([...messages, doctorReply]);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [messages]);

  const renderItem = ({ item }) => (
    <View style={styles.messageContainer}>
      <View style={[
          styles.messageBubble,
          { alignSelf: item.sender === 'user' ? 'flex-start' : 'flex-end' }, ]} >
        <Text style={styles.messageText}>{item.text}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style= {{textAlign: 'center', fontSize: 20, color: 'black', top: 10}}> Future Development Part </Text>
      <Text style={styles.CText}> CHAT WITH DOCTOR</Text>
      <FlatList
        style={styles.chatContainer}
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        inverted
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          onChangeText={setInputText}
          value={inputText}
        />
        <Button title="Send" onPress={handleSend} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 16,
  },
  chatContainer: {
    flex: 1,
  },
  CText: {
    textAlign: 'center',
    fontSize: 30,
    color: 'black',
    top: 8,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 8,
    marginRight: 8,
  },
  messageContainer: {
    marginVertical: 8,
    alignSelf: 'flex-start',
  },
  messageBubble: {
    backgroundColor: '#ccc',
    padding: 8,
    borderRadius: 8,
  },
  messageText: {
    color: 'black',
  },
});

export default DoctorChatPage;
