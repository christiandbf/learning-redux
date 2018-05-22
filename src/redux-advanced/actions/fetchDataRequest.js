import { FECTH_DATA_REQUEST } from '../constants/actionsType';

function fetchDataRequest(id) {
  return {
    type: FECTH_DATA_REQUEST,
    id
  };
}

export default fetchDataRequest;