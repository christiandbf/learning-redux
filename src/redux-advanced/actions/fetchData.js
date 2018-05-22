import { FETCH_DATA } from '../constants/actionsType';

import fetchDataRequest from './fetchDataRequest';
import fetchDataSuccess from './fetchDataSuccess';
import fetchDataFailure from './fetchDataFailure';

function fetchData(id) {
  return function(dispatch) {
    dispatch(fetchDataRequest(id))

    return fetch('https://api.coinmarketcap.com/v2/ticker/' + id + '/')
      .then(response => response.json())
      .then(json => dispatch(fetchDataSuccess(id, json.data)))
      .catch(error => dispatch(fetchDataFailure(id, error)));
  }
}

export default fetchData;
