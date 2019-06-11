import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import authReducer from './authReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
  form: reduxFormReducer,
  auth: authReducer,
  err: errorReducer
});

export default rootReducer;
