import React from 'react';
import { Button } from 'react-native';

const Toggle = ({ seeMessage, hideMessage, isMessageVisible }) => (
  <Button
    onPress={ isMessageVisible ? hideMessage : seeMessage }
    title={ isMessageVisible ? 'Hide' : 'Show' }
  />
);

export default Toggle;