import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';

import rootReducer from './reducers';

import Title from './components/Title';

import InputIDContainer from './containers/InputIDContainer';
import FetchContainer from './containers/FetchContainer';
import StoreContainer from './containers/StoreContainer';

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <ScrollView>
            <Title />
            <InputIDContainer />
            <FetchContainer />
            <StoreContainer />
          </ScrollView>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50
  },
});
