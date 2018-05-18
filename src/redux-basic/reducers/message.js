import { CHANGE_MESSAGE } from '../constants/actionsTypes';

function message(state = '', action) {
  switch (action.type) {
    case CHANGE_MESSAGE:
      return action.message;
    default: 
      return state;
  }
}

export default message;