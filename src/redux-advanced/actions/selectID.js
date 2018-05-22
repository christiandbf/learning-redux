import { SELECT_ID } from '../constants/actionsType';

function selectID(id) {
  return {
    type: SELECT_ID,
    id
  };
}

export default selectID;