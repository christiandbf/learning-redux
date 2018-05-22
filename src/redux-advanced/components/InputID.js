import React from 'react';
import { TextInput } from 'react-native';

const InputID = props => (
  <TextInput
    style={{ borderColor: 'gray', borderWidth: 1 }}
    placeholder="Type only integer numebers"
    value={props.id.toString()}
    onChangeText={props.selectID}
  />
);

export default InputID;