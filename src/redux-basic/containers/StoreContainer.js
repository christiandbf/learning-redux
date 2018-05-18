import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  data: JSON.stringify(state, null, 2)
});

export default connect(
  mapStateToProps,
  null
)(props => <Text>{props.data}</Text>);
