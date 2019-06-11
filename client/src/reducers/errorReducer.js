import { REGISTER_ERROR, LOGIN_ERROR } from '../constants';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case REGISTER_ERROR:
      return {
        error: action.payload
      };
    case LOGIN_ERROR:
      return {
        error: action.payload
      };
    default:
      return state;
  }
}
