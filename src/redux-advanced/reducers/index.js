import { combineReducers } from 'redux';

import id from './id';
import dataByID from './dataByID';

const rootReducer = combineReducers({
  id,
  dataByID
});

export default rootReducer;