import {
  FECTH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE
} from '../constants/actionsType';

function data(
  state = {
    isFetching: false,
    error: false,
    data: {}
  },
  action
) {
  switch (action.type) {
    case FECTH_DATA_REQUEST:
      return { ...state, isFetching: true };
    case FETCH_DATA_SUCCESS:
      return { ...state, isFetching: false, error: false, data: action.data };
    case FETCH_DATA_FAILURE:
      return { ...state, isFetching: false, error: true, data: action.data };
    default:
      return state;
  }
}

function dataById(state = {}, action) {
  switch (action.type) {
    case FECTH_DATA_REQUEST:
    case FETCH_DATA_SUCCESS:
    case FETCH_DATA_FAILURE:
      return { ...state, [action.id]: data(state[action.id], action) };
    default:
      return state;
  }
}

export default dataById;