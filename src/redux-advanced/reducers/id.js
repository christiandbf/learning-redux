import { SELECT_ID } from '../constants/actionsType';

function id(state = '1', action) {
  switch (action.type) {
    case SELECT_ID:
      return action.id;
    default:
      return state;
  }
}

export default id;