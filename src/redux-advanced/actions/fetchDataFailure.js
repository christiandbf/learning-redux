import { FETCH_DATA_FAILURE } from '../constants/actionsType';

function fetchDataFailure(id, data) {
  return {
    type: FETCH_DATA_FAILURE,
    id,
    data
  };
}

export default fetchDataFailure;