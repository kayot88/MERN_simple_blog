import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { reducer as reduxFormReducer } from 'redux-form';
import rootReducer from './reducers';

const composeEnhancers = composeWithDevTools({
  name: `Redux`,
  realtime: true,
  trace: true,
  traceLimit: 25
});

const store = createStore(combineReducers(
  {form: reduxFormReducer}, 
  rootReducer
),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;