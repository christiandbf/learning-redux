import { SEE_MESSAGE, HIDE_MESSAGE } from '../constants/actionsTypes';

function messageVisibility(state = false, action) {
  switch(action.type) {
    case SEE_MESSAGE:
      return true;
    case HIDE_MESSAGE:
      return false;
    default:
      return state;
  }
}

export default messageVisibility;