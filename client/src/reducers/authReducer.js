import jwt_decode from 'jwt-decode';
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  LOGOUT,
  LOGIN_REQUEST,
  LOGIN_SUCCESS
} from '../constants';

const token = localStorage.getItem('token');
console.log(token);
const user = token && jwt_decode(token);
console.log(user);

const initialState = {
  loading: false,
  ...(token && { token }),
  ...(user && { user })
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        loading: false,
        user: null,
        token: null
      };
    case REGISTER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload,
        user: jwt_decode(action.payload).user
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload,
        user: jwt_decode(action.payload).user
      };
    default:
      return state;
  }
}
