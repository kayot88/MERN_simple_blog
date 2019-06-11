import {
  REGISTER_REQUEST,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  LOGOUT,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from '../constants';
import { register, login } from '../utils/api';

export const registerAction = (username, password, email) => async dispatch => {
  dispatch({
    type: REGISTER_REQUEST
  });
  try {
    const token = await register(username, password, email);
    localStorage.setItem('token', token)
    dispatch({
      type: REGISTER_SUCCESS,
      payload: token
    })
  } catch (error) {
    // console.log(`${error}`);
    dispatch({
      type: REGISTER_ERROR,
      payload: error.message
    });
  }
};

export const loginAction = (password, username) => async dispatch => {
         dispatch({
           type: LOGIN_REQUEST
         });
         try {
           const token = await login(password, username);
           localStorage.setItem('token', token)
           dispatch({
             type:LOGIN_SUCCESS,
             payload: token
           })
         } catch (error) {
           dispatch({
             type: LOGIN_ERROR,
             payload: error.message
           })
         }
       };

export const logoutUser = () => dispatch => {
  localStorage.clear();
  dispatch({
    type: LOGOUT
  })

}
