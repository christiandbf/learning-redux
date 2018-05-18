import { combineReducers } from 'redux';

import { SEE_MESSAGE, HIDE_MESSAGE } from '../constants/actionsTypes';

import messageVisibility from './messageVisibility';
import message from './message';

const reducer = combineReducers({
  messageVisibility,
  message
});

export default reducer;