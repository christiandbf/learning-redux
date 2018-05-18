import { CHANGE_MESSAGE } from '../constants/actionsTypes';

const changeMessage = (message) => ({
  type: CHANGE_MESSAGE,
  message
});

export default changeMessage;
