import React from 'react';
import { Text, TextInput, View } from 'react-native';

const Message = ({ see, changeMessage, message }) => (
  <View>
    <TextInput style={{ height: 40 }} placeholder="Type your message" onChangeText={changeMessage} />
    <Text>{see ? message : 'Message is hided'}</Text>
  </View>
);

export default Message;