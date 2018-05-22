import { FETCH_DATA_SUCCESS } from '../constants/actionsType';

function fetchDataSuccess(id, data) {
  return {
    type: FETCH_DATA_SUCCESS,
    id,
    data
  };
}

export default fetchDataSuccess;