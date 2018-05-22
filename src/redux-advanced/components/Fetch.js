import React from 'react';
import { Button } from 'react-native';

const Fetch = props => (
  <Button 
    onPress={() => props.fetchData(props.id)}
    title="Press to fetch data"
  />
);

export default Fetch;