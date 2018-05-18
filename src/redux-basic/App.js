import React from 'react';
import { View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';

import Title from './components/Title';

import MessageContainer from './containers/MessageContainer';
import ToggleContainer from './containers/ToggleContainer';
import StoreContainer from './containers/StoreContainer';

const store = createStore(rootReducer);

const App = () => (
  <Provider store={store} >
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }} >
      <Title />
      <ToggleContainer />
      <MessageContainer />
      <StoreContainer />
    </View>
  </Provider>
);

export default App;
